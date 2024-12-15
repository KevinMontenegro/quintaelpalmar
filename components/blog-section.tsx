import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export function BlogSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className={`${playfairDisplay.className} text-3xl sm:text-4xl text-green-700 mb-4`}>
            Nuestro Blog
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-8">
            Historias de El Palmar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">El pájaro Valdivia</h3>
            <p className="text-gray-600 text-lg">
              En los bosques de El Palmar, existe una leyenda sobre un pájaro misterioso llamado Valdivia. 
              Se dice que su canto melodioso tiene el poder de guiar a los viajeros perdidos de vuelta a casa.
            </p>
            <p className="text-gray-600 text-lg">
              Los antiguos habitantes de estas tierras creían que el Valdivia era un espíritu guardián de la naturaleza, 
              protegiendo la flora y fauna de la región. Su presencia es considerada un buen augurio, 
              simbolizando la armonía entre el hombre y la naturaleza.
            </p>
            <Button className="bg-green-700 hover:bg-green-800" asChild>
              <Link href="/blog">Leer más historias</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Ilustración del pájaro Valdivia"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

