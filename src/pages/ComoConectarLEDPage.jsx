import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@google/model-viewer';
import { X, Info, AlertTriangle, Zap } from 'lucide-react';
import SectionSlider from '../components/SectionSlider';

const PARTES_LED = {
  anodo: {
    title: 'Ánodo (+)',
    description: 'Es la patita más larga del LED. Conéctalo al positivo a través de una resistencia.',
    detalle: 'También se identifica por el lado opuesto al borde plano del cabezal del LED.'
  },
  catodo: {
    title: 'Cátodo (-)',
    description: 'Es la patita más corta del LED. Conéctalo al negativo (tierra/GND).',
    detalle: 'El borde plano en el cabezal del LED indica el lado del cátodo.'
  },
  led: {
    title: 'LED (Diodo Emisor de Luz)',
    description: 'Convierte la electricidad en luz. Solo funciona del ánodo (+) al cátodo (-).',
    detalle: 'Consume 2-3V. Cada color requiere un voltaje ligeramente distinto.'
  }
};

export default function ComoConectarLEDPage() {
  const [activePart, setActivePart] = useState(null);

  return (
    <div className="h-screen flex flex-col overflow-hidden p-6">
      <SectionSlider>
        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 shrink-0">
            ¿Cómo se conecta un LED?
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed shrink-0">
            Un <strong className="text-blue-400">LED</strong> (Diodo Emisor de Luz) emite luz cuando la electricidad lo atraviesa. Tiene dos patitas y debes respetar su polaridad.
          </p>

          <div className="bg-red-900/30 border-2 border-red-500/60 rounded-xl p-3 flex items-start gap-3 shrink-0">
            <AlertTriangle size={22} className="text-red-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-red-400">¡Importante!</h3>
              <p className="text-red-200 text-sm font-semibold">Nunca conectes un LED directamente a la energía. Siempre usa una resistencia para evitar que se queme.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 min-h-0">
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4">
              <h3 className="text-base font-bold text-blue-400 mb-3">Identifica las patitas</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">+</span>
                  <div>
                    <p className="text-slate-200 text-sm font-semibold">Ánodo (+): patita más larga</p>
                    <p className="text-slate-400 text-xs">Conéctalo al positivo a través de una resistencia.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">−</span>
                  <div>
                    <p className="text-slate-200 text-sm font-semibold">Cátodo (−): patita más corta</p>
                    <p className="text-slate-400 text-xs">Conéctalo al negativo (tierra/GND).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4">
              <h3 className="text-base font-bold text-blue-400 mb-3">Sabías qué...</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Zap size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300">El LED tiene polaridad. Si lo conectas al revés, <strong>no encenderá</strong>.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300">La patita larga es el ánodo (+), la corta es el cátodo (−).</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="text-slate-300">También identifica el cátodo por el <strong>borde plano</strong> del cabezal del LED.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <h2 className="text-xl font-bold text-blue-400 shrink-0">Explora el LED en 3D</h2>
          <p className="text-xs text-slate-400 shrink-0">Haz clic en los puntos para identificar ánodo y cátodo.</p>

          <div className="flex-1 bg-gradient-to-b from-slate-900 to-[#0B1120] rounded-2xl border border-slate-800 relative overflow-hidden min-h-0">
            <model-viewer
              src="/models/led_light.glb"
              camera-controls
              auto-rotate
              rotation-per-second="15deg"
              interaction-prompt="none"
              style={{ width: '100%', height: '100%', outline: 'none' }}
            >
              <button
                className="bg-red-500/80 hover:bg-red-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_#ef4444] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm cursor-pointer"
                slot="hotspot-1"
                data-position="0.1m 0m 0.15m"
                data-normal="0m 0m 1m"
                onClick={() => setActivePart(PARTES_LED.anodo)}
              >
                <span className="text-sm font-bold">+</span>
              </button>
              <button
                className="bg-blue-500/80 hover:bg-blue-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_#3b82f6] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm cursor-pointer"
                slot="hotspot-2"
                data-position="-0.1m 0m 0.15m"
                data-normal="0m 0m 1m"
                onClick={() => setActivePart(PARTES_LED.catodo)}
              >
                <span className="text-sm font-bold">−</span>
              </button>
              <button
                className="bg-green-500/80 hover:bg-green-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_#22c55e] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm cursor-pointer"
                slot="hotspot-3"
                data-position="0m 0.05m 0.1m"
                data-normal="0m 0m 1m"
                onClick={() => setActivePart(PARTES_LED.led)}
              >
                <Info size={16} />
              </button>
            </model-viewer>

            <AnimatePresence>
              {activePart && (
                <motion.div
                  initial={{ x: 260, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 260, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-64 bg-slate-800/95 backdrop-blur-xl border border-slate-600 p-4 rounded-xl shadow-2xl z-20"
                >
                  <button onClick={() => setActivePart(null)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-white bg-slate-700/50 p-1 rounded-full transition-colors">
                    <X size={14} />
                  </button>
                  <h3 className="text-base font-bold text-yellow-400 mb-2 pr-5">{activePart.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-3">{activePart.description}</p>
                  <div className="p-2 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-300 text-xs">
                    💡 {activePart.detalle}
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
