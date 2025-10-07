import { RedLineLogo } from './red-line-logo';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <RedLineLogo size="sm" />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Tu destino fitness. Proporcionamos las herramientas, conocimiento y
              comunidad que necesitas para alcanzar tus objetivos de fitness y transformar tu vida.
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Red Line Gym. Todos los derechos reservados.
            </p>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="text-white mb-4">Información Rápida</h4>
            <div className="space-y-3 text-gray-400">
              <div className="space-y-1">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Av. Constitución 7166</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Dorrego 333</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Av. Jacinto Peralta Ramos 758</span>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                <span className="text-sm">redlinemdp@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white mb-4 flex items-center">
              <Clock className="w-4 h-4 text-primary mr-2" />
              Horarios
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex justify-between">
                <span>Lun - Vie:</span>
                <span>6:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados:</span>
                <span>8:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingos:</span>
                <span>17:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span>Feriados:</span>
                <span>9:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}