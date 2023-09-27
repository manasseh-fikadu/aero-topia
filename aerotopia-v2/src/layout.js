'use client'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'aerotopia',
  description: 'We are not different, only excellent!',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
  )
}
