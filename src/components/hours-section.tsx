import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Clock } from 'lucide-react';

export function HoursSection() {
  const hours = [
    { day: 'Lunes - Viernes', time: '6:00 - 23:00 hs' },
    { day: 'Sábados', time: '8:00 - 20:00 hs' },
    { day: 'Domingos', time: '17:00 - 21:00 hs' },
    { day: 'Feriados', time: '9:00 - 22:00 hs' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl text-white">Horarios de Atención</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hours.map((schedule, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader className="text-center">
                <CardTitle className="text-white">{schedule.day}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl text-primary">{schedule.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}