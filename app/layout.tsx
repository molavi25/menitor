import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased bg-black',
          fontSans.variable,
        )}>
        {children}
      </body>
    </html>
  );
};
export default RootLayout;

const metadata: Metadata = {
  title: 'Menitor',
  description:
    'The app for monitor and track your work and life',
};
export { metadata };
