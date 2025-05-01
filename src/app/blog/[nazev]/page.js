import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from './slug.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/lib/getPosts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

async function getPostByNazev(nazev) {
  if (!nazev) {
    console.log("Nazev je nedefinován");
    return null;
  }
  const filePath = path.join(process.cwd(), 'src/content/blog', `${nazev}.md`);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { data, content };
  } catch (error) {
    console.error(`Chyba při načítání souboru ${filePath}:`, error);
    return null;
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    nazev: filename.replace(/\.md$/, ''),
  }));

  return paths;
}

export default async function BlogPostPage({ params }) {
  const { nazev } = params;
  const post = await getPostByNazev(nazev);
  const posts = await getPosts();

  if (!post) {
    return (
      <div>
        <h1>Příspěvek nenalezen</h1>
        <p>Příspěvek s tímto názvem neexistuje.</p>
      </div>
    );
  }

  return (
    <div className={styles.blogContainer}>
      <article className={styles.blogPost}>
          <Link href="/blog" className={styles.blogLink}>
            &lt; ZPĚT
          </Link>
          <span className={styles.blogTyp}>{post.data.typ}</span>
          <Image
            src={post.data.image}
            alt={`Image for ${post.data.title}`}
            style={{ objectFit: 'cover' }}
            width={150}
            height={180}
          />
          <h1>{post.data.title}</h1>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown> 
      </article>
    </div>
  );
}
