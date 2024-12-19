import styles from "./blog.module.css";
import BlogPageClient from "./BlogPageClient";
import { getPosts } from "../../lib/getPosts";

export default async function BlogPage() {
  const posts = await getPosts(); // Načteme příspěvky na serverové straně

  return (
    <div className={styles.blogContainer}>
      {/* Záhlaví */}
      <h1 className={styles.title}>Blog</h1>
      <BlogPageClient posts={posts} />
    </div>
  );
}
