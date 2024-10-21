import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({ params }) {
  const { slug } = params;
  
  const markdownWithMeta = fs.readFileSync(
    path.join('src/content/blog', `${slug}.md`),
    'utf-8'
  );
  
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('src/content/blog'));

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const markdownWithMeta = fs.readFileSync(
    path.join('src/content/blog', `${slug}.md`),
    'utf-8'
  );

  const { data: frontmatter } = matter(markdownWithMeta);

  return {
    title: frontmatter.title,
  };
}
