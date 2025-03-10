import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { PostHogProvider } from '@/components/PostHogProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'senbo',
  description: 'hi, I write code',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased min-h-screen max-w-prose mx-auto px-4 md:px-0 duration-200`}
      >
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
