'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogFilters from '@/components/blog/BlogFilters';

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

interface BlogListingProps {
  initialPosts: BlogPost[];
  categories: { id: string; name: string; description: string }[];
  initialTags: { id: string; name: string; count: number }[];
}

export default function BlogListing({
  initialPosts,
  categories,
  initialTags
}: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = initialPosts.filter((post) => {
    if (selectedCategory && post.category !== selectedCategory) return false;
    if (selectedTag && !post.tags.includes(selectedTag)) return false;
    return true;
  });

  const handleFilterChange = (category: string | null, tag: string | null) => {
    setSelectedCategory(category);
    setSelectedTag(tag);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-sky-700 mb-8">Blog</h1>

      <BlogFilters
        categories={categories}
        tags={initialTags}
        onFilterChange={handleFilterChange}
      />

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link href={`/blog/${post.id}`}>
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-sky-600">{post.category}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm text-slate-500">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-slate-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-4">{post.description}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
