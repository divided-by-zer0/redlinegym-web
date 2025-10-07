import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Building2, Smartphone, Scale, Heart } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: 'Instalaciones de última generación',
      description: 'Espacios diseñados para ofrecerte la mejor experiencia en cada sesión.',
    },
    {
      icon: Smartphone,
      title: 'App exclusiva',
      description: 'Gestioná tus rutinas, monitoreá tus avances y recibí recomendaciones personalizadas desde nuestra innovadora aplicación.',
    },
    {
      icon: Scale,
      title: 'Básculas de bioimpedancia',
      description: 'Obtené un análisis completo de tu composición corporal en segundos. Los datos se sincronizan automáticamente en la app y recibís un PDF detallado vía mail con toda la información de tu progreso.',
    },
    {
      icon: Heart,
      title: 'Desfibriladores externos automáticos (DEA)',
      description: 'Cada sede cuenta con DEA y personal capacitado en su uso, RCP y primeros auxilios, garantizando una respuesta rápida en caso de emergencia.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-card" id='info'>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4">Qué Ofrecemos</h2>
          <p className="text-gray-400">
            Todo lo que necesitas para alcanzar tus objetivos de fitness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-secondary border-border hover:border-primary transition-colors group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3">
                    <IconComponent className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl text-white mb-4">Red Line Gym - Siempre Cerca Tuyo</h3>
            <p className="text-gray-400 mb-6">
              Nuestras instalaciones de última generación están diseñadas para brindarte la mejor experiencia 
              de entrenamiento. Con tecnología avanzada, espacios amplios y equipamiento premium, 
              te acompañamos en cada paso de tu transformación.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Tecnología integrada con app exclusiva
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Análisis corporal con bioimpedancia
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Seguridad garantizada con DEA en cada sede
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Personal capacitado en primeros auxilios
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="src/assets/540507697_1350943593702931_7719395841914905384_n.jpg"
              alt="Fitness training equipment"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}