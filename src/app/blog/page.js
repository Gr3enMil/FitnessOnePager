import fs from 'fs';
import path from 'path';
import styles from "./blog.module.css";

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    return {
      filename,
      content,
    };
  });

  return (
    <div className={styles.blogContainer}>
      <h1>Blog</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h2>{post.filename.replace('.md', '')}</h2>
            <p>{post.content.slice(0, 100)}...</p> {/* Ukázka z obsahu */}
          </li>
        ))}
      </ul>
    </div>
  );
}
