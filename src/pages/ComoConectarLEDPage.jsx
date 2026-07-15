import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@google/model-viewer';
import { X, Info, AlertTriangle, ArrowLeft, ArrowRight, Zap } from 'lucide-react';

const PARTES_LED = {
  anodo: {
    title: 'Ánodo (+)',
    description: 'Es la patita más larga del LED. Debe conectarse al polo positivo de la fuente de energía, a través de una resistencia limitadora.',
    detalle: 'Identifícalo por ser la pata más larga. Si ya cortaste las patas, busca el lado con el borde plano del LED: la pata de ese lado es el cátodo, la opuesta es el ánodo.'
  },
  catodo: {
    title: 'Cátodo (-)',
    description: 'Es la patita más corta del LED. Debe conectarse al polo negativo (tierra/GND) de la fuente de energía.',
    detalle: 'También puedes identificarlo por el corte plano en el borde del LED: ese lado indica el cátodo.'
  },
  led: {
    title: 'LED (Diodo Emisor de Luz)',
    description: 'Es un componente semiconductor que convierte la electricidad en luz. Solo funciona en un sentido: del ánodo (+) al cátodo (-).',
    detalle: 'Consume muy poca energía (2-3V) y está disponible en muchos colores. Cada color requiere un voltaje ligeramente distinto.'
  }
};

export default function ComoConectarLEDPage() {
  const [activePart, setActivePart] = useState(null);

  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen flex flex-col pb-20">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          ¿Cómo se conecta un LED?
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-6 leading-relaxed">
          Un <strong className="text-blue-400">LED</strong> (Diodo Emisor de Luz) es un pequeño componente que emite luz cuando la electricidad lo atraviesa.
          Tiene dos patitas y debes respetar su polaridad para que funcione.
        </p>
      </motion.div>

      <div className="bg-red-900/30 border-2 border-red-500/60 rounded-2xl p-6 mb-8 flex items-start gap-4">
        <AlertTriangle size={28} className="text-red-400 shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-bold text-red-400 mb-2">¡Importante!</h3>
          <p className="text-red-200 text-lg font-semibold">
            Nunca conectes un LED directamente a la energía. Siempre usa una resistencia para evitar que se queme.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Identifica las patitas</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">+</span>
              <div>
                <p className="text-slate-200 font-semibold">Ánodo (+): patita más larga</p>
                <p className="text-slate-400 text-sm">Conéctalo al positivo a través de una resistencia.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">−</span>
              <div>
                <p className="text-slate-200 font-semibold">Cátodo (−): patita más corta</p>
                <p className="text-slate-400 text-sm">Conéctalo al negativo (tierra/GND).</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-400 mb-4">¿Sabías qué?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Zap size={18} className="text-yellow-400 mt-1 shrink-0" />
              <p className="text-slate-300">El LED tiene polaridad. Si lo conectas al revés, <strong>no encenderá</strong>.</p>
            </li>
            <li className="flex items-start gap-3">
              <Zap size={18} className="text-yellow-400 mt-1 shrink-0" />
              <p className="text-slate-300">La patita larga es el ánodo (+), la corta es el cátodo (−).</p>
            </li>
            <li className="flex items-start gap-3">
              <Zap size={18} className="text-yellow-400 mt-1 shrink-0" />
              <p className="text-slate-300">También puedes identificar el cátodo por el <strong>borde plano</strong> en el cabezal del LED.</p>
            </li>
          </ul>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Explora el LED en 3D</h2>
        <p className="text-slate-300 mb-6">Haz clic en los puntos interactivos para identificar el ánodo y el cátodo.</p>
      </motion.div>

      <div className="w-full h-[55vh] bg-gradient-to-b from-slate-900 to-[#0B1120] rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden mb-8">
        <model-viewer
          src="/models/led_light.glb"
          camera-controls
          auto-rotate
          rotation-per-second="15deg"
          interaction-prompt="none"
          style={{ width: '100%', height: '100%', outline: 'none' }}
        >
          <button
            className="bg-red-500/80 hover:bg-red-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_#ef4444] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm"
            slot="hotspot-1"
            data-position="0.1m 0m 0.15m"
            data-normal="0m 0m 1m"
            onClick={() => setActivePart(PARTES_LED.anodo)}
          >
            <span className="text-sm font-bold">+</span>
          </button>

          <button
            className="bg-blue-500/80 hover:bg-blue-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_#3b82f6] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm"
            slot="hotspot-2"
            data-position="-0.1m 0m 0.15m"
            data-normal="0m 0m 1m"
            onClick={() => setActivePart(PARTES_LED.catodo)}
          >
            <span className="text-sm font-bold">−</span>
          </button>

          <button
            className="bg-green-500/80 hover:bg-green-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_#22c55e] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm"
            slot="hotspot-3"
            data-position="0m 0.05m 0.1m"
            data-normal="0m 0m 1m"
            onClick={() => setActivePart(PARTES_LED.led)}
          >
            <Info size={18} />
          </button>
        </model-viewer>

        <AnimatePresence>
          {activePart && (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-600 p-6 rounded-2xl shadow-2xl z-20"
            >
              <button
                onClick={() => setActivePart(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-700/50 p-1.5 rounded-full transition-colors"
              >
                <X size={16} />
              </button>

              <h3 className="text-xl font-bold text-yellow-400 mb-3 pr-6">
                {activePart.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {activePart.description}
              </p>
              <div className="p-3 rounded-xl bg-slate-700/50 border border-slate-600 text-slate-300 text-sm">
                💡 {activePart.detalle}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between mt-4">
        <a href="/protoboard" className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
          <ArrowLeft size={20} /> Anterior: Protoboard
        </a>
        <a href="/resistencias" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
          Siguiente: Resistencias <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}
