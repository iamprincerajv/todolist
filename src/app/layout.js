import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AcTo - A ToDo List Web App',
  description: 'Plan your day with AcTo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
      </body>
    </html>
  )
}
