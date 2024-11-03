import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getClients() {
  const clientsDirectory = path.join(process.cwd(), 'src/content/clients');
  const filenames = fs.readdirSync(clientsDirectory);

  const clients = filenames.map((filename) => {
    const filePath = path.join(clientsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      id: parseInt(data.id),
      ...data,
    };
  });

  // Seřadíme klienty podle ID od nejvyššího po nejnižší
  return clients.sort((a, b) => b.id - a.id);
}
