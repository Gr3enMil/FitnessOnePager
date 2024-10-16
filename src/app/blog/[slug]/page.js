"use client"

import styles from './blogPost.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // použití `useParams` pro získání slugu
import { getBlogsFromFirebase } from '@/app/api/blog/route'; // Získej metodu na získání dat z Firebase

export default function BlogPost() {
  const { slug } = useParams(); // Získání slugu z URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogs = await getBlogsFromFirebase();
        const foundBlog = blogs.find((blog) => blog.slug === slug);
        setBlog(foundBlog);
      } catch (error) {
        console.error('Chyba při načítání blogového příspěvku:', error);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <p>Načítání...</p>;
  }

  return (
    <div className={styles.blogPost}>
      <h1>{blog.title}</h1>
      <Image src={blog.image} alt={blog.title} className={styles.blogImage} />
      <div className={styles.content}>
        {blog.content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
