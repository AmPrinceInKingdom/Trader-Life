import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TraderPro - Professional Trading Portfolio',
  description: 'Professional trader portfolio with real-time analytics, trade journal, and educational content',
  keywords: ['trading', 'forex', 'crypto', 'portfolio', 'analytics', 'ICT', 'SMC'],
  authors: [{ name: 'TraderPro' }],
  openGraph: {
    title: 'TraderPro - Professional Trading Portfolio',
    description: 'Professional trader portfolio with real-time analytics, trade journal, and educational content',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
