import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./post.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import { BlogPost, BlogPostRaw } from "../types";
import ReactMarkdown from "react-markdown";
import { prisma } from "@/lib/prisma";
import Header from "@/components/header";

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = await prisma.blogPost.findUnique({
    where: { 
      slug,
      published: true 
    },
  }) as BlogPostRaw | null;

  if (!post) return null;

  return {
    ...post,
    tags: JSON.parse(post.tags) as string[],
    images: post.images ? JSON.parse(post.images) as string[] : null,
    sections: post.sections ? JSON.parse(post.sections) as string[] : null
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <article className={styles.post_page}>
        <header className={styles.post_header}>
          {post.coverImage && (
            <div className={styles.cover_image}>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="100vw"
                className={styles.image}
              />
            </div>
          )}
          <div className={cn("container", styles.header_container)}>
            <div className={styles.meta_top}>
              {post.readingTime && (
                <span className={styles.read_time}>
                  {post.readingTime} min read
                </span>
              )}
            </div>
            <Heading type="heading-1" className={styles.title}>
              {post.title}
            </Heading>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.meta_bottom}>
              <div className={styles.author}>
                <div className={styles.author_image_wrapper}>
                  <Image
                    src="/images/osaze-headshot.jpg"
                    alt="Osaze Okunbo"
                    width={60}
                    height={60}
                    className={styles.author_image}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className={styles.author_info}>
                  <span className={styles.author_name}>
                    Osaze Okunbo
                  </span>
                  <time dateTime={post.publishedAt.toISOString()} className={styles.post_date}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className={cn("section", styles.content_section)}>
          <div className={cn("container", styles.content_container)}>
            {post.sections && post.sections.length > 0 && (
              <div className={styles.table_of_contents}>
                <h2>Table of Contents</h2>
                <ul>
                  {post.sections.map((section, index) => (
                    <li key={index}>
                      <a href={`#${slugify(section)}`}>{section}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.content}>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {post.images && post.images.length > 1 && (
              <div className={styles.additional_images}>
                {post.images.slice(1).map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Additional image ${index + 1}`}
                    width={800}
                    height={450}
                    className={styles.additional_image}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <footer className={cn("section", styles.author_bio_section)}>
          <div className={cn("container", styles.content_container)}>
            <div className={styles.author_bio}>
              <div className={styles.author_bio_content}>
                <div className={styles.author_bio_image}>
                  <Image
                    src="/images/osaze-headshot.jpg"
                    alt="Osaze Okunbo"
                    width={140}
                    height={140}
                    className={styles.bio_image}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className={styles.author_bio_text}>
                  <h3>About the Author</h3>
                  <h4>Osaze Okunbo</h4>
                  <p>
                    Real Estate Agent Osaze Okunbo also runs "The Realtors Studio," a media company that has helped its hundreds of homes sell through high-quality property media. With extensive experience in the Los Angeles real estate market, Osaze combines his deep market knowledge with innovative marketing strategies to deliver exceptional results for his clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
