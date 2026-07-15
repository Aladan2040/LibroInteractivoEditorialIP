import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, Lightbulb, Play, ClipboardList } from 'lucide-react';

export default function ActividadPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto min-h-screen flex flex-col pb-20">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">
          Actividad FAB LAB
        </h1>
        <p className="text-2xl text-blue-400 font-semibold mb-6">
          Encendido básico con LED — Tu primer circuito sin soldadura
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-8">
          En esta actividad aprenderás a construir un circuito eléctrico básico utilizando componentes físicos:
          un LED, una resistencia, cables jumper, una protoboard y una fuente de energía (batería de 9V).
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
        className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
          <ClipboardList size={24} /> Materiales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { nombre: 'Protoboard', desc: 'Placa de pruebas para insertar componentes sin soldar', color: 'from-green-600 to-emerald-800' },
            { nombre: 'LED', desc: 'Rojo, verde, amarillo, etc.', color: 'from-red-500 to-red-700' },
            { nombre: 'Resistencia 220Ω', desc: 'Para limitar la corriente del LED', color: 'from-amber-600 to-amber-800' },
            { nombre: 'Batería 9V', desc: 'Fuente de alimentación', color: 'from-orange-600 to-orange-800' },
            { nombre: 'Cables jumper', desc: 'Macho-macho para conectar todo', color: 'from-blue-500 to-blue-700' },
          ].map((mat, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-center">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mat.color} mx-auto mb-3 flex items-center justify-center`}>
                <span className="text-white text-lg font-bold">{mat.nombre[0]}</span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{mat.nombre}</h3>
              <p className="text-slate-400 text-xs">{mat.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-blue-400 mb-6">Procedimiento paso a paso</h2>
        <ol className="space-y-5">
          {[
            'Coloca el LED en la zona central de la protoboard, ocupando dos columnas distintas (ánodo en una columna, cátodo en otra).',
            'Conecta la resistencia desde el ánodo del LED hasta otra columna libre de la protoboard.',
            'Usa un cable jumper para conectar el extremo de la resistencia a la línea positiva (+) de la protoboard.',
            'Conecta el cátodo del LED al riel negativo (-) de la protoboard con otro cable jumper.',
            'Conecta la batería de 9V al protoboard: el cable rojo al riel positivo (+) y el cable negro al riel negativo (-).',
            'Verifica que cada componente esté correctamente conectado antes de energizar el circuito.',
          ].map((paso, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 text-sm">
                {i + 1}
              </span>
              <p className="text-slate-300 text-base leading-relaxed pt-1">{paso}</p>
            </li>
          ))}
        </ol>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
            <Lightbulb size={22} /> Sabías qué...
          </h2>
          <p className="text-slate-300">
            Los cables tienen colores estándar en electrónica para evitar confusiones.
            El <strong className="text-red-400">rojo</strong> siempre se usa para el polo positivo (+),
            y el <strong className="text-slate-200">negro</strong> para el polo negativo (-) o la "tierra" (GND).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
          className="bg-red-900/30 border border-red-700/60 rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
            <AlertTriangle size={22} /> Para reflexionar
          </h2>
          <ul className="space-y-3 text-slate-300">
            <li>• ¿Qué pasaría si conectas el LED sin resistencia?</li>
            <li>• ¿Por qué es importante identificar el ánodo y cátodo antes de conectar?</li>
            <li>• ¿Qué sucede si inviertes los cables de la batería?</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-slate-800/40 border border-slate-700 border-dashed rounded-2xl p-8 mb-8 text-center"
      >
        <Play size={48} className="text-slate-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-500 mb-2">Video del paso a paso</h2>
        <p className="text-slate-500">
          Aquí se mostrará el video tutorial del montaje y el resultado final.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}
        className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-2xl p-6 mb-8"
      >
        <h2 className="text-xl font-bold text-blue-400 mb-4">Diagrama de montaje</h2>
        <div className="bg-slate-900/70 rounded-xl p-6 border border-slate-700">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-600 text-slate-300">Batería 9V</span>
            <span className="text-slate-500">→</span>
            <span className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-600 text-slate-300">Protoboard</span>
            <span className="text-slate-500">→</span>
            <span className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-600 text-slate-300">Resistencia 220Ω</span>
            <span className="text-slate-500">→</span>
            <span className="bg-slate-800 px-4 py-2 rounded-lg border border-yellow-600 text-yellow-300">LED ✨</span>
            <span className="text-slate-500">→</span>
            <span className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-600 text-slate-300">GND</span>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-between mt-4">
        <a href="/resistencias" className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
          <ArrowLeft size={20} /> Anterior: Resistencias
        </a>
        <span />
      </div>
    </div>
  );
}
