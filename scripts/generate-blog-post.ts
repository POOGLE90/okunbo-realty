import cron from 'node-cron';
import { OpenAI } from 'openai';
import slugify from 'slugify';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config } from 'dotenv';
import { PrismaClient } from '@prisma/client';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: join(__dirname, '..', '.env') });

if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not set in environment variables');
}

const prisma = new PrismaClient();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

type BlogCategory = 'Market Trends' | 'Buyer\'s Guide' | 'Seller\'s Guide' | 'Lifestyle';

interface TopicCategory {
  category: BlogCategory;
  topics: string[];
}

const topics: TopicCategory[] = [
  {
    category: 'Market Trends',
    topics: [
      'Los Angeles Real Estate Market Analysis 2024',
      'Investment Opportunities in LA\'s Emerging Neighborhoods',
      'Luxury Real Estate Trends in Los Angeles',
      'Impact of Tech Industry on LA Real Estate'
    ]
  },
  {
    category: 'Buyer\'s Guide',
    topics: [
      'First-Time Home Buyer\'s Guide to LA Real Estate',
      'Understanding LA\'s Different Neighborhoods',
      'How to Win in LA\'s Competitive Housing Market',
      'Hidden Costs of Buying a Home in Los Angeles'
    ]
  },
  {
    category: 'Seller\'s Guide',
    topics: [
      'Maximizing Your LA Home\'s Value',
      'Best Time to Sell in Los Angeles',
      'Home Staging Tips for LA Properties',
      'Understanding LA\'s Property Tax System'
    ]
  },
  {
    category: 'Lifestyle',
    topics: [
      'Living in Los Angeles: Neighborhood Guides',
      'Best School Districts in Los Angeles',
      'LA\'s Most Family-Friendly Neighborhoods',
      'Commuting in LA: Transportation Guide'
    ]
  }
];

// Sample images for each category
const categoryImages: Record<BlogCategory, string[]> = {
  'Market Trends': [
    '/images/blog/market-trends/skyline.jpg',
    '/images/blog/market-trends/chart.jpg',
    '/images/blog/market-trends/modern-building.jpg'
  ],
  'Buyer\'s Guide': [
    '/images/blog/buyers-guide/keys.jpg',
    '/images/blog/buyers-guide/contract.jpg',
    '/images/blog/buyers-guide/family.jpg'
  ],
  'Seller\'s Guide': [
    '/images/blog/sellers-guide/staging.jpg',
    '/images/blog/sellers-guide/sold-sign.jpg',
    '/images/blog/sellers-guide/curb-appeal.jpg'
  ],
  'Lifestyle': [
    '/images/blog/lifestyle/neighborhood.jpg',
    '/images/blog/lifestyle/park.jpg',
    '/images/blog/lifestyle/cafe.jpg'
  ]
};

async function generateBlogPost() {
  try {
    console.log('Starting blog post generation...');
    
    // Randomly select a category and topic
    const category = topics[Math.floor(Math.random() * topics.length)];
    const topic = category.topics[Math.floor(Math.random() * category.topics.length)];
    console.log('Selected topic:', topic);
    
    // Generate blog content with sections
    console.log('Generating content with OpenAI...');
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional real estate content writer specializing in the Los Angeles market. Write engaging, informative content that helps readers understand the real estate market and make informed decisions. Include clear section headings and subheadings."
        },
        {
          role: "user",
          content: `Write a comprehensive blog post about "${topic}". Include:
          1. A catchy title
          2. An engaging introduction
          3. 4-5 main sections with descriptive headings
          4. Practical tips and actionable advice
          5. A conclusion
          Format the content in markdown. Make it SEO-friendly and around 1500 words.`
        }
      ],
      temperature: 0.7,
    });

    const content = completion.choices[0].message.content;
    if (!content) throw new Error('No content generated');
    console.log('Content generated successfully');

    // Extract title and sections
    const lines = content.split('\n');
    const title = lines[0].replace('# ', '');
    const sections = lines
      .filter(line => line.startsWith('## '))
      .map(line => line.replace('## ', ''));
    console.log('Title:', title);
    console.log('Sections:', sections);
    
    // Generate excerpt
    const excerpt = lines
      .slice(1)
      .find(line => line.trim().length > 0 && !line.startsWith('#')) || '';
    console.log('Excerpt:', excerpt);

    // Generate slug
    const slug = slugify(title, { lower: true, strict: true });
    console.log('Slug:', slug);

    // Get images for the category
    const images = categoryImages[category.category];
    console.log('Images:', images);

    // Calculate read time (average 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    console.log('Reading time:', readingTime, 'minutes');

    // Generate SEO metadata
    console.log('Generating SEO metadata...');
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
    console.log('SEO Title:', seoTitle);
    console.log('SEO Description:', seoDesc);

    // Save to database
    console.log('Saving to database...');
    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        coverImage: images[0] || null,
        images: JSON.stringify(images),
        tags: JSON.stringify([category.category, ...topic.split(' ').slice(0, 3)]),
        readingTime,
        seoTitle: seoTitle.slice(0, 60),
        seoDesc: seoDesc.slice(0, 160),
        sections: JSON.stringify(sections),
      },
    });

    console.log('Successfully generated blog post:', post.title);
    return post;
  } catch (error) {
    console.error('Error generating blog post:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run immediately on script start
generateBlogPost()
  .then(() => {
    console.log('Blog post generation completed');
    process.exit(0);
  })
  .catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
