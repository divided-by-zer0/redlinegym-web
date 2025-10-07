import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { RedLineLogo } from './red-line-logo';

export function HeroSection() {

  const scrollToSection = () => {
    const element = document.getElementById("info");
    if (element) element.scrollIntoView(); // ya será suave gracias al CSS
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src='/RedlineBackground.jpg'
          alt="Modern gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <RedLineLogo size="xl" className="mb-4" />
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Siempre Cerca Tuyo
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/*<Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            Empezá el cambio ahora
          </Button>*/}
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3"
            style={{ 
              borderColor: '#BEC043', 
              color: '#BEC043',
              '--tw-ring-color': '#BEC043'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#BEC043';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.color = '#BEC043';
            }}
            onClick={scrollToSection}
          >
            Más Información
          </Button>
        </div>
      </div>
    </div>
  );
}