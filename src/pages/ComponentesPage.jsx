import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, CircleDot, ArrowUpDown, GitFork, Shrub } from 'lucide-react';
import '@google/model-viewer';

const COMPONENTES = [
  {
    id: 'led',
    title: 'LED',
    subtitle: 'Diodo Emisor de Luz',
    icon: <Zap size={32} />,
    color: 'from-green-500 to-emerald-700',
    desc: 'Un LED (Light Emitting Diode) es un componente que convierte la electricidad en luz. Solo funciona cuando se conecta en la polaridad correcta: el ánodo (+) al positivo y el cátodo (-) al negativo.',
    detalle: [
      'Ánodo (pata larga): lado positivo',
      'Cátodo (pata corta): lado negativo',
      'Requiere una resistencia limitadora para no quemarse',
      'Consume muy poca energía (2-3V)'
    ],
    hasModel: true,
    modelSrc: '/models/led_light.glb'
  },
  {
    id: 'resistencia',
    title: 'Resistencia',
    subtitle: 'Limitador de Corriente',
    icon: <ArrowUpDown size={32} />,
    color: 'from-red-500 to-orange-700',
    desc: 'Las resistencias limitan el flujo de corriente en un circuito. Su valor se mide en Ohmios (Ω) y se identifica por un código de colores.',
    detalle: [
      'Su valor se lee mediante bandas de colores',
      'Protege componentes sensibles como los LEDs',
      'No tienen polaridad (se conectan en cualquier sentido)',
      'Disipan la energía en forma de calor'
    ],
    hasModel: false
  },
  {
    id: 'pulsador',
    title: 'Pulsador',
    subtitle: 'Interruptor Momentáneo',
    icon: <CircleDot size={32} />,
    color: 'from-blue-500 to-indigo-700',
    desc: 'Un pulsador (o push-button) es un interruptor que solo cierra el circuito mientras lo mantienes presionado. Al soltarlo, el circuito se abre nuevamente.',
    detalle: [
      'Normalmente abierto (NO): no pasa corriente en reposo',
      'Normalmente cerrado (NC): pasa corriente en reposo',
      'Ideal para botones de control y reset',
      'Necesita una resistencia pull-down o pull-up para funcionar con Arduino'
    ],
    hasModel: false
  },
  {
    id: 'condensador',
    title: 'Condensador',
    subtitle: 'Almacenador de Energía',
    icon: <GitFork size={32} />,
    color: 'from-cyan-500 to-teal-700',
    desc: 'Un condensador almacena energía eléctrica de forma temporal y la libera cuando es necesario. Se usa para filtrar ruido, estabilizar voltajes y temporizar circuitos.',
    detalle: [
      'Se mide en Faradios (F) — microfaradios (µF) en electrónica',
      'Polarizados (electrolíticos) y no polarizados (cerámicos)',
      'Se carga y descarga gradualmente',
      'Útil para eliminar picos de voltaje'
    ],
    hasModel: false
  },
  {
    id: 'diodo',
    title: 'Diodo',
    subtitle: 'Válvula de Dirección Única',
    icon: <Shrub size={32} />,
    color: 'from-purple-500 to-violet-700',
    desc: 'Un diodo permite que la corriente fluya en una sola dirección, actuando como una válvula unidireccional. Es esencial para proteger circuitos de polaridad inversa.',
    detalle: [
      'Ánodo (+) permite el flujo hacia el cátodo (-)',
      'Protege contra conexiones incorrectas',
      'Los diodos Zener regulan voltaje',
      'Caída de voltaje típica: 0.7V (silicio)'
    ],
    hasModel: false
  }
];

export default function ComponentesPage() {
  const [modal, setModal] = useState(null);
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen flex flex-col pb-20">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          Componentes Electrónicos
        </h1>
        <p className="text-xl text-slate-300 mb-12 max-w-3xl">
          Cada componente tiene una función específica. Conócelos antes de construir tus propios circuitos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMPONENTES.map((comp, index) => (
          <motion.button
            key={comp.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            onClick={() => setModal(comp)}
            className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700 hover:border-blue-500 rounded-3xl p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] cursor-pointer"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${comp.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
              <div className="text-white">{comp.icon}</div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
              {comp.title}
            </h2>
            <p className="text-sm text-blue-300 mb-3 font-medium">{comp.subtitle}</p>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{comp.desc}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setModal(null); setShowModel(false); }}
              className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-slate-800 border border-slate-600 rounded-3xl p-8 max-w-lg w-full z-10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => { setModal(null); setShowModel(false); }}
                className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 p-2 rounded-full z-20 transition-colors"
              >
                <X size={20} />
              </button>

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${modal.color} flex items-center justify-center mb-5 mx-auto`}>
                <div className="text-white">{modal.icon}</div>
              </div>

              <h3 className="text-2xl font-bold text-yellow-400 mb-1 text-center">{modal.title}</h3>
              <p className="text-blue-300 text-sm font-medium mb-5 text-center">{modal.subtitle}</p>

              <p className="text-slate-300 text-base leading-relaxed mb-6">{modal.desc}</p>

              <ul className="space-y-2 mb-6">
                {modal.detalle.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <span className="text-blue-400 mt-1 shrink-0">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {modal.hasModel && (
                <button
                  onClick={() => setShowModel(!showModel)}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {showModel ? 'Ocultar modelo 3D' : 'Ver modelo 3D'}
                </button>
              )}

              {showModel && modal.hasModel && (
                <div className="mt-4 w-full h-64 bg-slate-900 rounded-2xl border border-slate-600 overflow-hidden">
                  <model-viewer
                    src={modal.modelSrc}
                    camera-controls
                    auto-rotate
                    rotation-per-second="15deg"
                    interaction-prompt="none"
                    style={{ width: '100%', height: '100%', outline: 'none' }}
                  />
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
