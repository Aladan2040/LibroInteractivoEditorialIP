import { Lightbulb, AlertTriangle, Play } from 'lucide-react';
import SectionSlider from '../components/SectionSlider';

const MATERIALES = [
  { nombre: 'Protoboard', desc: 'Placa de pruebas', color: 'from-green-600 to-emerald-800' },
  { nombre: 'LED', desc: 'Rojo, verde o amarillo', color: 'from-red-500 to-red-700' },
  { nombre: 'Resistencia 220Ω', desc: 'Limita la corriente', color: 'from-amber-600 to-amber-800' },
  { nombre: 'Batería 9V', desc: 'Fuente de alimentación', color: 'from-orange-600 to-orange-800' },
  { nombre: 'Cables jumper', desc: 'Macho-macho', color: 'from-blue-500 to-blue-700' },
];

export default function ActividadPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden p-6">
      <SectionSlider>
        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 shrink-0">
            Actividad FAB LAB
          </h1>
          <p className="text-sm md:text-base text-blue-400 font-semibold shrink-0">
            Encendido básico con LED
          </p>
          <p className="text-xs text-slate-300 leading-relaxed shrink-0">
            Construye tu primer circuito eléctrico con un LED, resistencia, cables jumper, protoboard y batería de 9V.
          </p>

          <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4 shrink-0">
            <h2 className="text-base font-bold text-blue-400 mb-3">Materiales</h2>
            <div className="grid grid-cols-5 gap-2">
              {MATERIALES.map((m, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-xl p-2 text-center">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${m.color} mx-auto mb-1.5 flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{m.nombre[0]}</span>
                  </div>
                  <p className="text-white text-[10px] font-semibold leading-tight">{m.nombre}</p>
                  <p className="text-slate-400 text-[9px] leading-tight mt-0.5">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-slate-800/40 border border-slate-700 rounded-2xl p-4 overflow-y-auto min-h-0">
            <h2 className="text-base font-bold text-blue-400 mb-3">Procedimiento paso a paso</h2>
            <ol className="space-y-2 text-sm">
              {[
                'Coloca el LED en la zona central de la protoboard, ocupando dos columnas distintas.',
                'Conecta la resistencia desde el ánodo del LED hasta otra columna libre.',
                'Usa un cable jumper para conectar el extremo de la resistencia a la línea positiva (+) de la protoboard.',
                'Conecta el cátodo del LED al riel negativo (-) con otro cable jumper.',
                'Conecta la batería de 9V: cable rojo al riel positivo (+), cable negro al riel negativo (-).',
                'Verifica cada conexión antes de energizar el circuito.',
              ].map((paso, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 text-[10px] mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-slate-300 text-xs leading-relaxed">{paso}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <h2 className="text-xl font-bold text-yellow-400 shrink-0">Reflexión y resultados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 shrink-0">
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4">
              <h3 className="text-sm font-bold text-yellow-400 mb-2 flex items-center gap-1.5">
                <Lightbulb size={16} /> Sabías qué...
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Los cables tienen colores estándar: el <strong className="text-red-400">rojo</strong> para positivo (+), el <strong>negro</strong> para negativo (-) o tierra (GND).
              </p>
            </div>

            <div className="bg-red-900/30 border border-red-700/60 rounded-2xl p-4">
              <h3 className="text-sm font-bold text-red-400 mb-2 flex items-center gap-1.5">
                <AlertTriangle size={16} /> Reflexiona
              </h3>
              <ul className="space-y-1 text-xs text-slate-300">
                <li>• ¿Qué pasa si conectas el LED sin resistencia?</li>
                <li>• ¿Por qué identificar ánodo y cátodo antes de conectar?</li>
                <li>• ¿Qué sucede si inviertes los cables de la batería?</li>
              </ul>
            </div>
          </div>

          <div className="flex-1 bg-slate-800/40 border border-slate-700 border-dashed rounded-2xl p-6 text-center flex flex-col items-center justify-center min-h-0">
            <Play size={36} className="text-slate-600 mb-2" />
            <p className="text-sm text-slate-500">Video del paso a paso</p>
            <p className="text-xs text-slate-600">Aquí se mostrará el tutorial del montaje y el resultado final.</p>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-2xl p-3 shrink-0">
            <p className="text-xs text-slate-300 text-center">
              <strong className="text-blue-400">Flujo:</strong> Batería → Protoboard → Resistencia → <strong className="text-yellow-300">LED</strong> → GND
            </p>
          </div>
        </div>
      </SectionSlider>
    </div>
  );
}
