import fs from 'fs';
import path from 'path';

export interface BlogPost {
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

export async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), 'src/data/blog/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as BlogPost;
  });

  return posts;
} 