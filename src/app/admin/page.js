"use client"

// src/app/admin/page.js
import { useState } from 'react';
import { db, auth } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from './admin.module.css';

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddBlog = async () => {
    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        date: new Date().toISOString(),
        slug: title.toLowerCase().replace(/ /g, "-")
      });
      alert('Blog added successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, 'admin@example.com', 'your_password');
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  return (
    <div className={styles.adminPage}>
      <h1>Admin - Přidat Blogový Příspěvek</h1>
      <button onClick={handleLogin}>Přihlásit se jako Admin</button>
      <input
        type="text"
        placeholder="Titulek"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Obsah článku"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddBlog}>Přidat článek</button>
    </div>
  );
}
