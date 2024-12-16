import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';
import slugify from 'slugify';
import { prisma } from '@/lib/prisma';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const topics = [
  'Los Angeles Real Estate Market Trends',
  'Home Buying Tips in LA',
  'Investment Properties in Los Angeles',
  'Luxury Real Estate in LA',
  'First-Time Home Buyer Guide',
  'Real Estate Investment Strategies',
  'Property Management Tips',
  'Home Staging and Selling',
  'Neighborhood Guides in LA',
  'Real Estate Market Analysis'
];

export async function POST() {
  try {
    // Randomly select a topic
    const topic = topics[Math.floor(Math.random() * topics.length)];

    // Generate blog content using OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional real estate content writer specializing in the Los Angeles market. Write engaging, informative content that helps readers understand the real estate market and make informed decisions."
        },
        {
          role: "user",
          content: `Write a comprehensive blog post about "${topic}". Include a catchy title, an engaging introduction, detailed sections with valuable insights, and a conclusion. Format the content in markdown. Make it SEO-friendly and around 1000 words.`
        }
      ],
      temperature: 0.7,
    });

    const content = completion.choices[0].message.content;
    if (!content) throw new Error('No content generated');

    // Extract title from the markdown content
    const title = content.split('\n')[0].replace('# ', '');
    
    // Generate excerpt
    const excerpt = content
      .split('\n')
      .slice(1)
      .find(line => line.trim().length > 0) || '';

    // Generate slug
    const slug = slugify(title, { lower: true, strict: true });

    // Generate SEO metadata
    const seoCompletion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an SEO expert. Generate optimized metadata for blog posts."
        },
        {
          role: "user",
          content: `Generate an SEO title (max 60 chars) and description (max 160 chars) for a blog post titled: "${title}"`
        }
      ],
      temperature: 0.7,
    });

    const seoText = seoCompletion.choices[0].message.content || '';
    const [seoTitle = title, seoDesc = excerpt] = seoText.split('\n').map(s => s.trim());

    // Save to database
    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        tags: JSON.stringify([topic]), // Store tags as JSON string for SQLite
        seoTitle: seoTitle.slice(0, 60),
        seoDesc: seoDesc.slice(0, 160),
      },
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error('Blog generation error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to generate blog post'
      },
      { status: 500 }
    );
  }
}
