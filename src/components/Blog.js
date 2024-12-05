import styles from "./Blog.module.css";
import BlogCarousel from "./BlogCarousel.js";

export default function Blog({ posts }) {
  return (
    <section id="about" className={styles.blogSection}>
      <h2 className={styles.blogHeading}>BLOG</h2>
      <BlogCarousel posts={posts}/>
    </section>
  );
}  