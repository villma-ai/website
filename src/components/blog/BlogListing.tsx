'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/app/actions/blog';

interface Category {
  id: string;
  name: string;
  count: number;
}

interface BlogListingProps {
  posts: BlogPost[];
  categories: Category[];
}

export default function BlogListing({ posts, categories }: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter(
          (post) =>
            post.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  filteredPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-sky-700 mb-8">Blog</h1>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-sky-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Posts ({posts.length})
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.name
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="group">
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-sky-600">{post.category}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm text-slate-500">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-slate-800 group-hover:text-sky-600 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-slate-600 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
