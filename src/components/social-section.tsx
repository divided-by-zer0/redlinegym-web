import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Instagram, Facebook, Mail } from 'lucide-react';

export function SocialSection() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, handle: '@gymredline', url: 'https://instagram.com/gymredline' },
    { name: 'Facebook', icon: Facebook, handle: 'Red Line Gym', url: 'https://facebook.com/redlinegym' },
    { name: 'Email', icon: Mail, handle: 'redlinemdp@gmail.com', url: 'mailto:redlinemdp@gmail.com' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white mb-4">Conéctate Con Nosotros</h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3">
                    <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-white">{social.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-400 mb-4">{social.handle}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                    onClick={() => window.open(social.url, social.name === 'Email' ? '_self' : '_blank')}
                  >
                    {social.name === 'Email' ? 'Contactar' : 'Seguir'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-secondary border-border inline-block">
            <CardContent className="p-6">
              <h3 className="text-white mb-2">Mantente Actualizado</h3>
              <p className="text-gray-400 mb-4">
                Recibe las últimas noticias, consejos y ofertas exclusivas
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Ingresa tu email"
                  className="flex-1 px-4 py-2 rounded bg-input border border-border text-white placeholder-gray-400"
                />
                <Button className="bg-primary hover:bg-primary/90 text-white px-6">
                  Suscribirse
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}