import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/nav-bar'

const inter = Inter({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'El Palmar - Finca Agroturística',
  description: 'Sumérgete en una aventura donde la naturaleza, la cultura y la sostenibilidad se encuentran.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${playfairDisplay.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

