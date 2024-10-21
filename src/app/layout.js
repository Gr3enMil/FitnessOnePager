// src/app/layout.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles/globals.css';

export const metadata = {
  title: 'Barbara Maiarino - Personal Trainer',
  description: 'Personal trainer website of Barbara Maiarino',
  keywords: 'fitness, personal trainer, Barbara Maiarino',
  author: 'Barbara Maiarino',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body className="font-pussycat">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
