import { Inter } from "next/font/google";
import "./styles/page.module.css";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Work Hard Play Hard",
  description: "SEO friendly description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       {children}
      </body>
    </html>
  );
}
