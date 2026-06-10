import type { ReactNode } from 'react';

import '@/styles/globals.css';

import { Inter, JetBrains_Mono } from 'next/font/google';

import { ConsentProvider } from '@/components/consent-provider';
import { ConsentBanner } from '@/components/cookie-banner/consent-banner';
import { Tracking } from '@/components/tracking';

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    // suppressHydrationWarning added according to https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        className={`bg-background ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ConsentProvider>
          {children}
          <Tracking />
          <ConsentBanner />
        </ConsentProvider>
      </body>
    </html>
  );
}
