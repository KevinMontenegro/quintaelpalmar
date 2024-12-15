import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export function ProductsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className={`${playfairDisplay.className} text-3xl sm:text-4xl text-green-700 mb-4`}>
            Nuestros productos
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-8">
            Del campo a tu mesa
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Productos orgánicos</h3>
            <p className="text-gray-600 text-lg">
              Cultivamos con amor y dedicación productos frescos y orgánicos. 
              Nuestra finca produce una variedad de cultivos sostenibles que 
              respetan el medio ambiente y deleitan tu paladar.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                • Plátanos maduros y verdes
              </li>
              <li className="flex items-center">
                • Naranjas jugosas
              </li>
              <li className="flex items-center">
                • Piñas dulces
              </li>
              <li className="flex items-center">
                • Cañas de chupar
              </li>
              <li className="flex items-center">
                • Guanábanas frescas
              </li>
            </ul>
            <Button className="bg-green-700 hover:bg-green-800" asChild>
              <Link href="/productos">Ver productos</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/productos.jpg"
              alt="Productos El Palmar"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

