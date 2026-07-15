import { motion } from 'framer-motion';
import SectionSlider from '../components/SectionSlider';

export default function CaminoElectricidadPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden p-6">
      <SectionSlider>
        <div className="h-full flex flex-col gap-4 overflow-hidden">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-3xl font-bold text-yellow-400 shrink-0">
            El camino de la electricidad: los circuitos
          </motion.h2>
          <p className="text-sm text-slate-300 leading-relaxed shrink-0">
            Para que la electricidad funcione, necesita un camino cerrado por donde fluir. A ese camino lo llamamos <strong className="text-blue-400">circuito eléctrico</strong>.
          </p>

          <div className="flex-1 bg-slate-900/50 border border-slate-700 rounded-2xl flex items-center justify-center min-h-0">
            <div className="text-center text-slate-500 p-4">
              <p className="text-sm">Video: Circuito animado</p>
              <p className="text-xs text-slate-600 mt-1">/videos/circuito-animado.mp4</p>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-3 shrink-0">
            <p className="text-xs text-blue-200 leading-relaxed">
              <strong>¿Sabías qué?</strong> Las luces navideñas modernas usan circuitos en paralelo para evitar apagones completos.
            </p>
          </div>
        </div>

        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <h3 className="text-xl font-bold text-blue-400 shrink-0">Partes de un circuito</h3>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 min-h-0">
            {[
              { num: '1', title: 'Fuente de energía', desc: 'Pila o batería', color: 'from-yellow-500 to-orange-600' },
              { num: '2', title: 'Conductores', desc: 'Cables que conectan todo', color: 'from-blue-500 to-indigo-600' },
              { num: '3', title: 'Interruptor', desc: 'Abre o cierra el paso de electricidad', color: 'from-green-500 to-emerald-600' },
              { num: '4', title: 'Carga', desc: 'Lo que consume la energía, como un LED', color: 'from-red-500 to-rose-600' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`bg-gradient-to-br ${item.color} bg-opacity-10 border border-slate-700 rounded-2xl p-4 flex items-center gap-4`}
              >
                <span className="bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {item.num}
                </span>
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-xs text-slate-400 italic shrink-0">
            ¿Qué tipo de circuito crees que usaremos en nuestro proyecto de iluminación?
          </motion.p>
        </div>
      </SectionSlider>
    </div>
  );
}
