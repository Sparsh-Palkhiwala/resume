import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { ThemeProvider } from './components/theme-provider'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Sparsh Devang Palkhiwala',
    template: '%s | Sparsh Portfolio',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Sparsh Devang Palkhiwala',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'Sparsh Devang Palkhiwala',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'bg-white dark:bg-neutral-900',
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="antialiased text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0 max-w-xl mx-4 lg:mx-auto pt-8">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
