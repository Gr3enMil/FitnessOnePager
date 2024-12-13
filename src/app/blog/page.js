import styles from "./blog.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '../../lib/getPosts';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.navMenu}>
        <Link href="/" className={styles.blogLink}>
          &lt; ZPĚT NA HOMEPAGE
        </Link>
        <div className={styles.filter}>
          <div className={styles.filterButton}>TRÉNINK</div>
          <div className={styles.filterButton}>STRAVA</div>
          <div className={styles.filterButton}>LIFESTYLE</div>
          <div className={styles.filterButton}>RECEPTY</div>
        </div>
      </div>
      <ul className={styles.blogPost}>
        {posts.map((post) => {
          if (!post.nazev) {
            console.error("Chybí 'nazev' pro příspěvek:", post);
            return null; // Příspěvek přeskočíme, pokud 'nazev' neexistuje
          }

          return (
            <li key={post.id} className={styles.blogItem}>
              <Link href={`/blog/${post.nazev}`}>
                {/* Nadpis */}
                <h2 style={{ textTransform: 'uppercase'}}>
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
                      width={148}
                      height={171}
                    />
                  </div>

                  {/* Pravá část - úryvek textu */}
                  <div className={styles.blogText}>
                    <p>{post.content.slice(0, 100)}...</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
