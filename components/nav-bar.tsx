'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram, Facebook, PhoneIcon as WhatsApp, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Productos', href: '/productos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
]

export function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/Logo.png"
                alt="Logo El Palmar"
                width={80}
                height={80}
                className="h-16 w-16"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium ${
                    pathname === item.href
                      ? 'text-green-700'
                      : 'text-gray-700 hover:text-green-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://instagram.com" className="text-gray-700 hover:text-green-700">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com" className="text-gray-700 hover:text-green-700">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://wa.me/1234567890" className="text-gray-700 hover:text-green-700">
              <WhatsApp className="h-5 w-5" />
            </Link>
            <Button className="bg-green-700 hover:bg-green-800">
              Reservar
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-lg font-medium ${
                        pathname === item.href
                          ? 'text-green-700'
                          : 'text-gray-700 hover:text-green-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex space-x-4 px-3 pt-4">
                    <Link href="https://instagram.com" className="text-gray-700 hover:text-green-700">
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link href="https://facebook.com" className="text-gray-700 hover:text-green-700">
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link href="https://wa.me/1234567890" className="text-gray-700 hover:text-green-700">
                      <WhatsApp className="h-5 w-5" />
                    </Link>
                  </div>
                  <Button className="bg-green-700 hover:bg-green-800 mx-3">
                    Reservar
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

