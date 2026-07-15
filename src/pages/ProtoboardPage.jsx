import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@google/model-viewer';
import { X, Info, AlertTriangle, ArrowRight } from 'lucide-react';

const ZONAS = {
  positiva: {
    title: 'Zona Positiva (+)',
    icon: <Info size={20} />,
    color: 'red',
    description: 'Las líneas horizontales marcadas en rojo (o con símbolo +) distribuyen el voltaje positivo por toda la protoboard. Todos los agujeros de esa fila están conectados eléctricamente.',
    consejo: 'Conecta aquí el cable positivo (+) de tu batería o fuente de energía.'
  },
  negativa: {
    title: 'Zona Negativa (-)',
    icon: <Info size={20} />,
    color: 'blue',
    description: 'Las líneas horizontales en azul (o con símbolo -) son el riel de tierra o negativo. Cierran el circuito devolviendo la corriente a la fuente.',
    consejo: 'Conecta aquí el cable negativo (-) o GND de tu fuente.'
  },
  central: {
    title: 'Zona Central',
    icon: <Info size={20} />,
    color: 'green',
    description: 'Cada columna vertical de 5 agujeros está conectada internamente. Aquí insertarás los LEDs, resistencias y demás componentes para armar tu circuito.',
    consejo: 'Cada pata de un componente debe ir en una columna distinta para evitar cortocircuitos.'
  }
};

export default function ProtoboardPage() {
  const [activeZone, setActiveZone] = useState(null);

  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen flex flex-col pb-20">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          ¿Qué es un protoboard?
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-6 leading-relaxed">
          Un <strong className="text-blue-400">protoboard</strong> o <strong className="text-blue-400">placa de pruebas</strong> es una placa de plástico con agujeritos que sirve para armar circuitos sin necesidad de soldar.
          Tiene líneas internas que conectan los agujeros, así que al insertar cables y componentes, estos quedan conectados eléctricamente.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Partes básicas</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-red-600 w-3 h-3 rounded-full mt-2 shrink-0" />
              <p className="text-slate-300"><strong>Líneas horizontales (superior e inferior):</strong> para conectar energía (positivo y negativo).</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 w-3 h-3 rounded-full mt-2 shrink-0" />
              <p className="text-slate-300"><strong>Líneas verticales:</strong> para conectar componentes en cada columna de la zona central.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-600 w-3 h-3 rounded-full mt-2 shrink-0" />
              <p className="text-slate-300"><strong>Aquí conectarás LEDs, resistencias y cables</strong> en tus proyectos.</p>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">⚠️ Consejos importantes</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <AlertTriangle size={20} className="text-yellow-400 mt-0.5 shrink-0" />
              <p className="text-slate-300">Nunca conectes el positivo y negativo en la misma línea.</p>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle size={20} className="text-yellow-400 mt-0.5 shrink-0" />
              <p className="text-slate-300">Verifica la polaridad de cada componente antes de insertarlo.</p>
            </li>
            <li className="flex items-start gap-3">
              <Info size={20} className="text-blue-400 mt-0.5 shrink-0" />
              <p className="text-slate-300">Las líneas horizontales superior e inferior están <strong>unidas internamente</strong>. Si conectas un cable en un punto de la fila, se conecta con todos los demás de esa misma línea.</p>
            </li>
          </ul>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Explora la protoboard en 3D</h2>
        <p className="text-slate-300 mb-6">Haz clic en los puntos interactivos para conocer cada zona.</p>
      </motion.div>

      <div className="w-full h-[60vh] bg-gradient-to-b from-slate-900 to-[#0B1120] rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        <model-viewer
          src="/models/protoboard_elecronic.glb"
          camera-controls
          auto-rotate
          rotation-per-second="10deg"
          interaction-prompt="none"
          style={{ width: '100%', height: '100%', outline: 'none' }}
        >
          <button
            className="bg-red-500/80 hover:bg-red-400 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_25px_#ef4444] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm"
            slot="hotspot-1"
            data-position="0.15m 0.05m 0.2m"
            data-normal="0m 0m 1m"
            onClick={() => setActiveZone(ZONAS.positiva)}
          >
            <span className="text-lg font-bold">+</span>
          </button>

          <button
            className="bg-blue-500/80 hover:bg-blue-400 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_25px_#3b82f6] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm"
            slot="hotspot-2"
            data-position="-0.15m -0.05m 0.2m"
            data-normal="0m 0m 1m"
            onClick={() => setActiveZone(ZONAS.negativa)}
          >
            <span className="text-lg font-bold">−</span>
          </button>

          <button
            className="bg-green-500/80 hover:bg-green-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_25px_#22c55e] transition-transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm"
            slot="hotspot-3"
            data-position="0m 0m 0m"
            data-normal="0m 0m 1m"
            onClick={() => setActiveZone(ZONAS.central)}
          >
            <Info size={18} />
          </button>
        </model-viewer>

        <AnimatePresence>
          {activeZone && (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-600 p-6 rounded-2xl shadow-2xl z-20"
            >
              <button
                onClick={() => setActiveZone(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-700/50 p-1.5 rounded-full transition-colors"
              >
                <X size={16} />
              </button>

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                activeZone.color === 'red' ? 'bg-red-600/30 text-red-400' :
                activeZone.color === 'blue' ? 'bg-blue-600/30 text-blue-400' :
                'bg-green-600/30 text-green-400'
              }`}>
                {activeZone.icon}
              </div>

              <h3 className="text-xl font-bold text-yellow-400 mb-3 pr-6">
                {activeZone.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {activeZone.description}
              </p>
              <div className={`p-3 rounded-xl text-sm ${
                activeZone.color === 'red' ? 'bg-red-900/30 border border-red-800 text-red-300' :
                activeZone.color === 'blue' ? 'bg-blue-900/30 border border-blue-800 text-blue-300' :
                'bg-green-900/30 border border-green-800 text-green-300'
              }`}>
                💡 {activeZone.consejo}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between mt-8">
        <span />
        <a
          href="/como-conectar-led"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center gap-2"
        >
          Siguiente: ¿Cómo se conecta un LED? <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}
