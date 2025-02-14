import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Tree Gallery Dashboard',
    template: '%s | Tree Gallery Dashboard',
  },
  description: 'Welcome to the Tree Gallery Admin Dashboard',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100">
        <main className="flex-grow p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>2025 My Dashboard. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
