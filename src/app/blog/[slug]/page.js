import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from "./slug.module.css";
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <div className={styles.blogContainer}>
      <Link href="/blog" className={styles.blogLink}>
      &lt; ZPĚT NA SEZNAM
      </Link>
      <article className={styles.blogPost}>
        <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '1rem' }}>
          {data.title}
        </h1>

        <div className={styles.blogContent}>
          {/* Obrázek */}
          {data.image && (
            <div className={styles.blogImage}>
              <Image
                src={data.image} // cesta k obrázku z frontmatteru, např. /uploads/blog2.png
                alt={`Image for ${data.title}`} // SEO-friendly alt text
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Obsah příspěvku */}
          <div className={styles.blogText}>
            <p>{content}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
