import React from 'react';
import fs from 'fs';
import path from 'path';
import blogData from '@/data/blog/posts.json';
import BlogListing from '@/components/blog/BlogListing';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  image: string;
  content: string;
  readTime: string;
}

// Function to get all blog posts
async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), 'src/data/blog/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as BlogPost;
  });

  return posts;
}

// Function to calculate tag counts
function calculateTagCounts(posts: BlogPost[]) {
  const tagCounts: { [key: string]: number } = {};

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCounts).map(([name, count]) => ({
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name,
    count
  }));
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const tags = calculateTagCounts(posts);

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogListing
        initialPosts={posts}
        categories={blogData.categories}
        initialTags={tags}
      />
    </div>
  );
}
