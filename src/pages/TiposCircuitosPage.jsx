import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DATA_CIRCUITOS = {
  serie: {
    title: 'Circuito en Serie',
    desc: 'Todos los componentes están uno tras otro. Si uno falla, todo se apaga.',
    emoji: '⛓️',
    color: 'from-blue-500 to-indigo-600'
  },
  paralelo: {
    title: 'Circuito en Paralelo',
    desc: 'Cada componente tiene su propio camino. Si uno falla, los otros siguen encendidos.',
    emoji: '🌿',
    color: 'from-green-500 to-emerald-600'
  }
};

export default function TiposCircuitosPage() {
  const [modal, setModal] = useState(null);

  return (
    <div className="h-screen flex flex-col overflow-hidden p-6">
      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 shrink-0">Tipos de Circuitos</h1>
        <p className="text-sm text-slate-300 shrink-0">Selecciona un tipo de circuito para ver sus propiedades.</p>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">
          {Object.values(DATA_CIRCUITOS).map((c, i) => (
            <button key={i} onClick={() => setModal(c)}
              className="group rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-blue-500 transition-all duration-300 cursor-pointer bg-slate-800/40"
            >
              <div className="h-full flex flex-col items-center justify-center p-6">
                <span className="text-6xl mb-4">{c.emoji}</span>
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{c.title}</h2>
                <span className="mt-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver Detalles
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setModal(null)} className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-slate-800 border border-slate-600 rounded-3xl p-6 max-w-sm w-full z-10 shadow-2xl">
              <button onClick={() => setModal(null)}
                className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 p-2 rounded-full">
                <X size={18} />
              </button>
              <div className="text-5xl text-center mb-4">{modal.emoji}</div>
              <h3 className="text-xl font-bold text-blue-400 mb-3 text-center">{modal.title}</h3>
              <p className="text-slate-300 text-sm text-center leading-relaxed">{modal.desc}</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
