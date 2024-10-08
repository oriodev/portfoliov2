import type { Metadata } from 'next';
import './globals.css';
import { Josefin_Sans } from '@next/font/google';
import { Suspense } from 'react';

const josefinSans = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'oriodev',
  description: 'oriodev web development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} no-scrollbar bg-dark-blue`}>
        {children}
      </body>
    </html>
  );
}
