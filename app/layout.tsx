import type { Metadata } from 'next'
import { Varela } from 'next/font/google'
import './globals.css'

const varela = Varela({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kittikoon C.',
  description: 'Chayakorn Kittikoon portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={varela.className}>{children}</body>
    </html>
  )
}
