import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className={`${dancingScript.className} text-3xl sm:text-4xl text-green-700 mb-4`}>
          Naturaleza y cultura
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-8">
          La esencia de El Palmar
        </h2>
        {/* Añadir más contenido aquí */}
      </div>
    </section>
  )
}

