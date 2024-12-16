import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";
import { prisma } from "@/lib/prisma";
import { BlogPost, BlogPostRaw } from "./types";
import Header from "@/components/header";

async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await prisma.blogPost.findMany({
    where: {
      published: true,
    },
    orderBy: {
      publishedAt: 'desc',
    },
  }) as BlogPostRaw[];

  return posts.map((post: BlogPostRaw) => ({
    ...post,
    tags: JSON.parse(post.tags),
    images: post.images ? JSON.parse(post.images) : null,
    sections: post.sections ? JSON.parse(post.sections) : null,
  }));
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Header />
      <div className={styles.blog_page}>
        <div className={styles.hero}>
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>Real Estate Insights & Tips</h1>
            <p className={styles.hero_description}>
              Expert advice and insights on buying, selling, and investing in Los Angeles real estate.
            </p>
          </div>
        </div>

        <div className={styles.posts_section}>
          <div className={styles.container}>
            <div className={styles.posts_grid}>
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className={styles.post_card}>
                  {post.coverImage && (
                    <div className={styles.post_image}>
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        width={600}
                        height={400}
                        className={styles.image}
                      />
                    </div>
                  )}
                  <div className={styles.post_content}>
                    <div className={styles.post_meta}>
                      <div className={styles.author}>
                        <Image
                          src="/images/osaze-headshot.jpg"
                          alt={post.author || "Author"}
                          width={40}
                          height={40}
                          className={styles.author_image}
                        />
                        <span className={styles.author_name}>{post.author}</span>
                      </div>
                      <time className={styles.post_date}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <h2 className={styles.post_title}>{post.title}</h2>
                    <p className={styles.post_excerpt}>{post.excerpt}</p>
                    <div className={styles.post_tags}>
                      {post.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
