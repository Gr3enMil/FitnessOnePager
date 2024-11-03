import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data, content: postContent } = matter(content);

    return {
      id: data.id,
      nazev: data.nazev, // Zajišťujeme, že 'nazev' je správně zahrnut
      title: data.title,
      image: data.image,
      content: postContent,
      slug: filename.replace(/\.md$/, ''), // Přidáváme slug, pokud by byl potřeba
    };
  });

  // Seřadíme příspěvky od nejvyššího ID po nejnižší
  return posts.sort((a, b) => b.id - a.id);
}
