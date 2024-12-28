
import styles from "./styles/page.module.css";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Logo from "../components/Logo";
import Pros from "../components/Pros";
import { getPosts } from '../lib/getPosts';
import { getClients } from "@/lib/getClients";


export default async function Home() {
  
  const posts = await getPosts(); // Načítá příspěvky na serverové straně
  const latestPosts = posts.slice(0, 2);

  const clients = await getClients(); // Načítá reference na serverové straně

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Logo />  
        <About />
        <Pros />
        <Services />
        <Clients clients={clients}/>
        <Blog posts={latestPosts}/>
        <Contact />
      </main>
    </div>
    
  );
}
