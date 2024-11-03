import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from './slug.module.css';
import Image from 'next/image';
import Link from 'next/link';
import BlogCarousel from '@/components/BlogCarousel';
import { getPosts } from '@/lib/getPosts';

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

// Funkce pro dynamické generování cest na základě dostupných `nazev`
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
  const posts = await getPosts(); // Načítáme všechny příspěvky

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
      <Link href="/blog" className={styles.blogLink}>
        &lt; ZPĚT NA SEZNAM
      </Link>

      <article className={styles.blogPost}>
        <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '1rem' }}>
          {post.data.title}
        </h1>

        <div className={styles.blogContent}>
          {/* Obrázek */}
          {post.data.image && (
            <div className={styles.blogImage}>
              <Image
                src={post.data.image} // cesta k obrázku z frontmatteru
                alt={`Image for ${post.data.title}`} // SEO-friendly alt text
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Obsah příspěvku */}
          <div className={styles.blogText}>
            <p>{post.content}</p>
          </div>
        </div>
      </article>
      <BlogCarousel posts={posts} />
    </div>
  );
}
