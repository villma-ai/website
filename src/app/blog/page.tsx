import React from 'react';
import blogData from '@/data/blog/categories.json';
import blogContent from '@/data/blog/content.json';
import BlogListing from '@/components/blog/BlogListing';
import { getBlogPosts, type BlogPost } from '@/app/actions/blog';
import type { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: blogContent.seo.title,
  description: blogContent.seo.description,
  keywords: blogContent.seo.keywords,
  openGraph: {
    title: blogContent.seo.ogTitle,
    description: blogContent.seo.ogDescription,
    images: [blogContent.seo.ogImage]
  },
  twitter: {
    card: 'summary_large_image',
    title: blogContent.seo.twitterTitle,
    description: blogContent.seo.twitterDescription,
    images: [blogContent.seo.ogImage]
  }
};

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
