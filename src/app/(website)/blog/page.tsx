import React from 'react';
import blogContent from '@/data/blog/content.json';
import BlogListing from '@/components/blog/BlogListing';
import type { Metadata } from 'next';
import { BlogPost, getBlogPosts } from '@/actions/blog';

// Function to calculate category counts
function calculateCategoryCounts(posts: BlogPost[]) {
  const categoryCounts: { [key: string]: number } = {};

  posts.forEach((post) => {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
  });

  return Object.entries(categoryCounts)
    .map(([name, count]) => ({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      count
    }))
    .filter((category) => category.count > 0); // Only show categories with posts
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
  const categories = calculateCategoryCounts(posts);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">{blogContent.seo.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{blogContent.seo.description}</p>
        </div>

        {/* Blog Content */}
        <BlogListing posts={posts} categories={categories} />
      </div>
    </div>
  );
}
