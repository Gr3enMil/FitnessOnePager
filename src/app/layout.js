// src/app/layout.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles/globals.css';

export const metadata = {
  title: 'Barbara Mallarino - Personal Trainer',
  description: 'Personal trainer website of Barbara Mallarino',
  keywords: 'fitness, personal trainer, Barbara Mallarino',
  author: 'Barbara Mallarino',
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body style={{overflow: 'visible'}}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
