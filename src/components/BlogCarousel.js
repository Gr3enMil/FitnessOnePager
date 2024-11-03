
import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogCarousel.module.css';

export default function BlogCarousel({ posts }) {
  const latestPosts = posts.slice(0, 2);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.postsContainer}>
        {latestPosts.map((post) => (
          <div key={post.id} >
            <Link href={`/blog/${post.nazev}`} className={styles.postPreview}>
            <h2 className={styles.title}>{post.title}</h2>
            <div className={styles.imageWrapper}>
              <Image
                src={post.image} // URL obrázku z frontmatteru
                alt={`Image for ${post.title}`}
                width={100}
                height={100}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className={styles.excerpt}>{post.content.slice(0, 50)}...</p>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.linkContainer}>
        <Link href="/blog">
          <span className={styles.blogLink}>View all blog posts</span>
        </Link>
      </div>
    </div>
  );
}