import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const ps = Public_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Senbo',
  description: 'Personal Site made with nextjs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen max-w-prose mx-auto py-2 px-3',
          ps.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
