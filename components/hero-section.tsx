import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <Image 
        src="/principal.jpg"
        alt="El Palmar paisaje"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative pt-32 pb-16 sm:pb-32 flex items-center min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className={`${playfairDisplay.className} text-4xl sm:text-5xl text-white mb-6`}>
            Descubre la magia
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Explora y vive
            <br />
            El Palmar
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto">
            Sumérgete en una aventura donde la naturaleza, la cultura y la sostenibilidad se encuentran.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" asChild>
            <Link href="/contacto">Habla con nosotros</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

