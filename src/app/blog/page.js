"use client"

import { useEffect, useState } from 'react';
import styles from './blog.module.css';
import Link from 'next/link';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();

        console.log("Fetched Blogs:", data); // Log pro kontrolu

        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error("Načtená data nejsou pole:", data);
        }
      } catch (error) {
        console.error("Chyba při načítání blogů:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className={styles.blogContainer}>
      <h1>Blog</h1>
      <div className={styles.blogList}>
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div className={styles.blogItem}>
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
