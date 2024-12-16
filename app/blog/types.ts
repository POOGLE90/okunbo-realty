// Base type from database
type BlogPostFromDB = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage?: string | null;
  images?: string | null;
  tags: string; // SQLite stores this as a JSON string
  readingTime?: number | null;
  author?: string | null;
  authorImage?: string | null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  published: boolean;
  seoTitle?: string | null;
  seoDesc?: string | null;
  sections?: string | null; // JSON array of section titles
};

// Extended type with parsed tags
export interface BlogPost extends Omit<BlogPostFromDB, 'tags' | 'images' | 'sections'> {
  tags: string[];
  images?: string[] | null;
  sections?: string[] | null;
}

// Type for blog post preview
export type BlogPostPreview = Pick<BlogPost, 
  'id' | 
  'title' | 
  'slug' | 
  'excerpt' | 
  'publishedAt' | 
  'tags' | 
  'coverImage' | 
  'readingTime' | 
  'author' | 
  'authorImage'
>;

// Type for raw database result
export type BlogPostRaw = BlogPostFromDB;
