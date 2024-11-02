import fs from 'fs';
import path from 'path';
import styles from "./blog.module.css";
import Image from 'next/image';
import Link from 'next/link';
import matter from 'gray-matter';

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data, content: postContent } = matter(content); // Parsování pomocí gray-matter
    return {
      filename,
      ...data,       // Obsah frontmatter (title, date, image, id)
      content: postContent, // Skutečný obsah příspěvku
    };
  });

  // Seřazení příspěvků od nejvyššího ID po nejnižší
  const sortedPosts = posts.sort((a, b) => b.id - a.id);

  return (
    <div className={styles.blogContainer}>
      <h1>Blog</h1>
      <ul className={styles.blogPost}>
        {sortedPosts.map((post) => (
          <li key={post.id} className={styles.blogItem}>
            <Link href={`/blog/${post.nazev}`}>
              {/* Nadpis */}
              <h2 style={{ textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '1rem' }}>
                {post.title}
              </h2>

              {/* Obrázek a úryvek textu */}
              <div className={styles.blogContent}>
                {/* Levá část - obrázek */}
                <div className={styles.blogImage}>
                  <Image
                    src={post.image} // z frontmatteru, např. /uploads/blog2.png
                    alt={`Image for ${post.title}`} // SEO-friendly alt text
                    style={{ objectFit: 'cover' }}
                    width={100}
                    height={100}
                  />
                </div>

                {/* Pravá část - úryvek textu */}
                <div className={styles.blogText}>
                  <p>{post.content.slice(0, 100)}...</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
