import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@google/model-viewer';
import { X, Info, AlertTriangle } from 'lucide-react';
import SectionSlider from '../components/SectionSlider';

const ZONAS = {
  positiva: {
    title: 'Zona Positiva (+)',
    color: 'red',
    description: 'Las líneas horizontales marcadas en rojo distribuyen el voltaje positivo por toda la protoboard. Todos los agujeros de esa fila están conectados eléctricamente.',
    consejo: 'Conecta aquí el cable positivo (+) de tu batería o fuente de energía.'
  },
  negativa: {
    title: 'Zona Negativa (-)',
    color: 'blue',
    description: 'Las líneas horizontales en azul son el riel de tierra o negativo. Cierran el circuito devolviendo la corriente a la fuente.',
    consejo: 'Conecta aquí el cable negativo (-) o GND de tu fuente.'
  },
  central: {
    title: 'Zona Central',
    color: 'green',
    description: 'Cada columna vertical de 5 agujeros está conectada internamente. Aquí insertarás los LEDs, resistencias y cables.',
    consejo: 'Cada pata de un componente debe ir en una columna distinta.'
  }
};

export default function ProtoboardPage() {
  const [activeZone, setActiveZone] = useState(null);

  return (
    <div className="h-screen flex flex-col overflow-hidden p-6">
      <SectionSlider>
        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 shrink-0">
            ¿Qué es un protoboard?
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed shrink-0">
            Un <strong className="text-blue-400">protoboard</strong> o <strong className="text-blue-400">placa de pruebas</strong> sirve para armar circuitos sin soldar. Tiene líneas internas que conectan los agujeros eléctricamente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 min-h-0">
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4 overflow-y-auto">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Partes básicas</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="bg-red-600 w-3 h-3 rounded-full mt-1 shrink-0" />
                  <p className="text-slate-300"><strong>Líneas horizontales</strong> superior e inferior: para conectar energía (+ y -).</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-600 w-3 h-3 rounded-full mt-1 shrink-0" />
                  <p className="text-slate-300"><strong>Líneas verticales</strong> en la zona central: para conectar componentes.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-600 w-3 h-3 rounded-full mt-1 shrink-0" />
                  <p className="text-slate-300">Aquí conectarás LEDs, resistencias y cables en tus proyectos.</p>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4 overflow-y-auto">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">⚠️ Consejos</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300">Nunca conectes el positivo y negativo en la misma línea.</p>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300">Verifica la polaridad de cada componente.</p>
                </li>
                <li className="flex items-start gap-2">
                  <Info size={16} className="text-blue-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300">Las líneas horizontales están <strong>unidas internamente</strong>.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <h2 className="text-xl font-bold text-blue-400 shrink-0">Explora la protoboard en 3D</h2>
          <p className="text-xs text-slate-400 shrink-0">Haz clic en los puntos para conocer cada zona.</p>

          <div className="flex-1 bg-gradient-to-b from-slate-900 to-[#0B1120] rounded-2xl border border-slate-800 relative overflow-hidden min-h-0">
            <model-viewer
              src="/models/protoboard_elecronic.glb"
              camera-controls
              auto-rotate
              rotation-per-second="10deg"
              interaction-prompt="none"
              style={{ width: '100%', height: '100%', outline: 'none' }}
            >
              <button
                className="bg-red-500/80 hover:bg-red-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_#ef4444] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm cursor-pointer"
                slot="hotspot-1"
                data-position="0.15m 0.05m 0.2m"
                data-normal="0m 0m 1m"
                onClick={() => setActiveZone(ZONAS.positiva)}
              >
                <span className="text-base font-bold">+</span>
              </button>
              <button
                className="bg-blue-500/80 hover:bg-blue-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_#3b82f6] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm cursor-pointer"
                slot="hotspot-2"
                data-position="-0.15m -0.05m 0.2m"
                data-normal="0m 0m 1m"
                onClick={() => setActiveZone(ZONAS.negativa)}
              >
                <span className="text-base font-bold">−</span>
              </button>
              <button
                className="bg-green-500/80 hover:bg-green-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_#22c55e] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm cursor-pointer"
                slot="hotspot-3"
                data-position="0m 0m 0m"
                data-normal="0m 0m 1m"
                onClick={() => setActiveZone(ZONAS.central)}
              >
                <Info size={16} />
              </button>
            </model-viewer>

            <AnimatePresence>
              {activeZone && (
                <motion.div
                  initial={{ x: 260, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 260, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-64 bg-slate-800/95 backdrop-blur-xl border border-slate-600 p-4 rounded-xl shadow-2xl z-20"
                >
                  <button onClick={() => setActiveZone(null)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-white bg-slate-700/50 p-1 rounded-full transition-colors">
                    <X size={14} />
                  </button>
                  <h3 className="text-base font-bold text-yellow-400 mb-2 pr-5">{activeZone.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-3">{activeZone.description}</p>
                  <div className={`p-2 rounded-lg text-xs ${activeZone.color === 'red' ? 'bg-red-900/30 border border-red-800 text-red-300' : activeZone.color === 'blue' ? 'bg-blue-900/30 border border-blue-800 text-blue-300' : 'bg-green-900/30 border border-green-800 text-green-300'}`}>
                    💡 {activeZone.consejo}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </SectionSlider>
    </div>
  );
}
