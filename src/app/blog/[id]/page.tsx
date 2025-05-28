import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

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

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  // Find related posts (same category or tags)
  const relatedPosts = posts
    .filter((p) => p.id !== post.id)
    .filter(
      (p) =>
        p.category === post.category ||
        p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Post Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-sky-600">{post.category}</span>
            <span className="text-slate-400">•</span>
            <span className="text-sm text-slate-500">{post.readTime}</span>
            <span className="text-slate-400">•</span>
            <span className="text-sm text-slate-500">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-slate-600 mb-6">{post.description}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <p>{post.content}</p>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {relatedPost.readTime}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
