"use client";

import { useState } from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogPageClient({ posts }) {
  const [filter, setFilter] = useState("ALL"); // Výchozí filtr

  // Filtrování příspěvků podle typu
  const filteredPosts =
    filter === "ALL"
      ? posts
      : posts.filter((post) => post.typ && post.typ.toUpperCase() === filter);

  return (
    <div>
      <div className={styles.navMenu}>
        <Link href="/" className={styles.blogLink}>
          &lt; ZPĚT NA HOMEPAGE
        </Link>
        <div className={styles.filter}>
          {/* Tlačítka pro filtrování */}
          <div
            className={`${styles.filterButton} ${filter === "TRÉNINK" ? styles.active : ""}`}
            onClick={() => setFilter("TRÉNINK")}>
            TRÉNINK
          </div>
          <div
            className={`${styles.filterButton} ${filter === "STRAVA" ? styles.active : ""}`}
            onClick={() => setFilter("STRAVA")}>
            STRAVA
          </div>
          <div
            className={`${styles.filterButton} ${filter === "LIFESTYLE" ? styles.active : ""}`}
            onClick={() => setFilter("LIFESTYLE")}>
            LIFESTYLE
          </div>
          <div
            className={`${styles.filterButton} ${filter === "RECEPTY" ? styles.active : ""}`}
            onClick={() => setFilter("RECEPTY")}>
            RECEPTY
          </div>
          <div
            className={`${styles.filterButton} ${filter === "ALL" ? styles.active : ""}`}
            onClick={() => setFilter("ALL")}>
            VŠE
          </div>
        </div>
      </div>
      <ul className={styles.blogPost}>
        {filteredPosts.map((post) => (
          <li key={post.id} className={styles.blogItem}>
            <Link href={`/blog/${post.nazev}`}>
              {/* Nadpis */}
              <h2 style={{ textTransform: "uppercase" }}>{post.title}</h2>
              {/* Obrázek a úryvek textu */}
              <div className={styles.blogContent}>
                <div className={styles.blogImage}>
                  <Image
                    src={post.image} // z frontmatteru
                    alt={`Image for ${post.title}`}
                    style={{ objectFit: "cover" }}
                    width={150}
                    height={180}
                  />
                </div>
                <div className={styles.blogText}>
                  <p>{post.content.slice(0, 235)}...</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
