import React from 'react';
import blogData from '@/data/blog/categories.json';
import BlogListing from '@/components/blog/BlogListing';
import { getBlogPosts, type BlogPost } from '@/app/actions/blog';

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
