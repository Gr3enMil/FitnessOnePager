import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default function BlogPost({ frontmatter, content }) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src/content/blog'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/content/blog', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
