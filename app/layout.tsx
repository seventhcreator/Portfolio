import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const archivo = localFont({
  src: '../public/fonts/archivo-latin-variable.woff2',
  variable: '--font-archivo',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : 'http://localhost:3000'),
  ),
  title: 'Santiago Vélez — People, ideas & possibility',
  description:
    'Client Relationship Manager in Medellín, Colombia. Connecting client needs, cross-functional teams and thoughtful solutions across SaaS, brand and business development.',
  openGraph: {
    title: 'Santiago Vélez',
    description: 'Connecting people, ideas & possibility.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santiago Vélez',
    description: 'Connecting people, ideas & possibility.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={archivo.variable}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
