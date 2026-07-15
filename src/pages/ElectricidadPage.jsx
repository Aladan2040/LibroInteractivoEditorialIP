import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import SectionSlider from '../components/SectionSlider';

export default function ElectricidadPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden p-6">
      <SectionSlider>
        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="shrink-0">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">¿Qué es la electricidad?</h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              La electricidad está en todas partes: en tu casa, en el colegio, en tu celular y hasta en los semáforos. Es una forma de energía que se mueve a través de materiales llamados <strong className="text-blue-400">conductores</strong>, como los cables de cobre.
            </p>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 min-h-0">
            {[
              { icon: <Zap size={24} />, title: 'Corriente (I)', desc: 'Flujo de electrones por un conductor. Se mide en amperios (A).', color: 'from-yellow-500 to-orange-600' },
              { icon: <Zap size={24} />, title: 'Voltaje (V)', desc: 'Fuerza que empuja a los electrones. Se mide en voltios (V).', color: 'from-blue-500 to-indigo-600' },
              { icon: <Zap size={24} />, title: 'Resistencia (R)', desc: 'Frena el paso de electrones. Se mide en ohmios (Ω).', color: 'from-red-500 to-rose-600' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4 flex flex-col justify-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                  {item.icon}
                </div>
                <h2 className="text-lg font-bold text-white mb-1">{item.title}</h2>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-xs text-slate-500 italic shrink-0">
            Si la corriente es un río, el voltaje es la pendiente por donde baja.
          </motion.p>
        </div>

        <div className="h-full flex flex-col gap-4 overflow-hidden justify-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 text-center"
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-4">El misterio detrás de la luz perdida</h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Los jóvenes del equipo ya tienen claro su objetivo: traer la luz de vuelta. Pero al abrir una linterna o conectar una pila a un foco, se dan cuenta de que algo más profundo ocurre entre cables, energía y componentes.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Motivados por la oscuridad y por la esperanza, deciden investigar. Conocen el protoboard, los LEDs, las resistencias y descubren que detrás de cada encendido hay un principio físico, un orden, una lógica, una ciencia que se puede aprender.
            </p>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xs text-yellow-300 italic text-center shrink-0">
            "¡Si aprendemos cómo se mueve la electricidad, podremos diseñar nuestro propio sistema de luces!"
          </motion.p>
        </div>
      </SectionSlider>
    </div>
  );
}
