import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

export function LocationSection() {
  const locations = [
    {
      address: "Av. Constitución 7166",
      whatsapp: "+54 223 446-6740"
    },
    {
      address: "Dorrego 333", 
      whatsapp: "+54 223 466-5109"
    },
    {
      address: "Av. Jacinto Peralta Ramos 758",
      whatsapp: "+54 223 697-8393"
    }
  ];

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl text-white">Nuestras Sedes</h2>
          </div>
          <p className="text-gray-400">Encuentra la sede más cercana a ti</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="bg-secondary border-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  Sede {index + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-300">
                  {location.address}
                </p>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-primary mr-2" />
                  <a 
                    href={`https://wa.me/${location.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {location.whatsapp}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}