import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RK Enterprises - Infrastructure, Architecture & PMC',
  description: 'RamKrishan Enterprises - Professional consultancy in infrastructure development, architectural planning, and project management services.',
  openGraph: {
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
