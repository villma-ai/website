import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPosts } from '@/actions/blog';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  const title = post.seo?.title || post.title;
  const description = post.seo?.description || post.description;
  const keywords = post.seo?.keywords || post.tags;
  const ogImage = post.seo?.ogImage || post.image;
  const ogTitle = post.seo?.ogTitle || title;
  const ogDescription = post.seo?.ogDescription || description;
  const twitterCard = post.seo?.twitterCard || 'summary_large_image';
  const twitterTitle = post.seo?.twitterTitle || title;
  const twitterDescription = post.seo?.twitterDescription || description;
  const twitterImage = post.seo?.twitterImage || ogImage;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags
    },
    twitter: {
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      images: [twitterImage]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  // Find related posts (same category)
  const relatedPosts = posts
    .filter((p) => p.id !== post.id)
    .filter((p) => p.category === post.category)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <h1 className="text-4xl font-bold text-slate-800 mb-4">{post.title}</h1>
          <p className="text-xl text-slate-600 mb-6">{post.description}</p>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden group">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-all duration-300 group-hover:object-contain"
            priority
          />
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              hr: () => <hr className="my-6" />,
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-slate-800 mb-4">{children}</h2>
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-all duration-300 group-hover:object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">{relatedPost.readTime}</p>
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
