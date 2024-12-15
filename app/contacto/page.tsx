import { Button } from '@/components/ui/button'

export default function Contacto() {
  return (
    <main className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>
        <p className="mb-4">Para más información o reservas, contáctenos:</p>
        <p className="mb-2">Email: info@elpalmar.co</p>
        <p className="mb-2">Teléfono: +123 456 7890</p>
        <Button className="bg-green-700 hover:bg-green-800 mt-4">
          Enviar mensaje
        </Button>
      </div>
    </main>
  )
}

