import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ServiceCard } from './service-card'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const services = [
  {
    title: "Caminata por senderos naturales",
    description: "Explora nuestros senderos rodeados de exuberante vegetación y descubre la belleza natural de El Palmar.",
    imageSrc: "/caminatas.jpg"
  },
  {
    title: "Baño refrescante en el río",
    description: "Disfruta de las cristalinas aguas de nuestro río, un oasis natural perfecto para refrescarse.",
    imageSrc: "/rio.jpg"
  },
  {
    title: "Picnic y fogata",
    description: "Vive una experiencia única compartiendo historias alrededor de una fogata bajo las estrellas.",
    imageSrc: "/picnic.jpg"
  },
  {
    title: "Observación de aves",
    description: "Descubre la diversa fauna avícola que habita en nuestra finca, un paraíso para los amantes de las aves.",
    imageSrc: "/aves.jpg"
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className={`${playfairDisplay.className} text-3xl sm:text-4xl text-green-700 mb-4`}>
            Nuestros servicios
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-8">
            Experiencias únicas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/rio.jpg"
              alt="Río El Palmar"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Aventura en la naturaleza</h3>
            <p className="text-gray-600 text-lg">
              Descubre la belleza natural de nuestro río y sus alrededores. Disfruta de actividades al aire libre
              y conecta con la naturaleza en su estado más puro.
            </p>
            <Button className="bg-green-700 hover:bg-green-800" asChild>
              <Link href="/servicios">Conoce más</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

