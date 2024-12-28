"use client";

import { useState } from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogPageClient({ posts }) {
  const [filter, setFilter] = useState("ALL"); // Výchozí filtr
  const [currentPage, setCurrentPage] = useState(1); // Aktuální stránka
  const postsPerPage = 8; // Počet příspěvků na stránku

  // Filtrování příspěvků podle typu
  const filteredPosts =
    filter === "ALL"
      ? posts
      : posts.filter((post) => post.typ && post.typ.toUpperCase() === filter);

  // Počet stránek
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Zobrazení příspěvků na aktuální stránce
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Funkce pro změnu stránky
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={styles.navMenu}>
        <Link href="/" className={styles.blogLink}>
          &lt; <span className={styles.spanText}>ZPĚT NA HOMEPAGE</span>
        </Link>
        <div className={styles.filter}>
          {/* Tlačítka pro filtrování */}
          <div
            className={`${styles.filterButton} ${filter === "TRÉNINK" ? styles.active : ""}`}
            onClick={() => {
              setFilter("TRÉNINK");
              setCurrentPage(1); // Reset na první stránku při změně filtru
            }}
          >
            TRÉNINK
          </div>
          <div
            className={`${styles.filterButton} ${filter === "STRAVA" ? styles.active : ""}`}
            onClick={() => {
              setFilter("STRAVA");
              setCurrentPage(1);
            }}
          >
            STRAVA
          </div>
          <div
            className={`${styles.filterButton} ${filter === "LIFESTYLE" ? styles.active : ""}`}
            onClick={() => {
              setFilter("LIFESTYLE");
              setCurrentPage(1);
            }}
          >
            LIFESTYLE
          </div>
          <div
            className={`${styles.filterButton} ${filter === "RECEPTY" ? styles.active : ""}`}
            onClick={() => {
              setFilter("RECEPTY");
              setCurrentPage(1);
            }}
          >
            RECEPTY
          </div>
          <div
            className={`${styles.filterButton} ${filter === "ALL" ? styles.active : ""}`}
            onClick={() => {
              setFilter("ALL");
              setCurrentPage(1);
            }}
          >
            VŠE
          </div>
        </div>
      </div>
      <ul className={styles.blogPost}>
        {paginatedPosts.map((post) => (
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
                  <p>{post.content.slice(0, 200)}...</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* Paginátor */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`${styles.pageButton} ${
                currentPage === index + 1 ? styles.active : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
