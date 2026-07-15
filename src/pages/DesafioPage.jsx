import { motion } from 'framer-motion';
import SectionSlider from '../components/SectionSlider';

export default function DesafioPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden p-6">
      <SectionSlider>
        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="shrink-0">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">Un pueblo que sueña con volver a brillar</h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              En el tranquilo pueblo de Luminaria, las noches ya no son lo mismo. Las antiguas farolas se apagaron para siempre, dejando calles sumidas en una oscuridad inquietante. Sin luz, las plazas se vacían, las tiendas cierran temprano y hasta las fiestas del pueblo han quedado en silencio.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mt-2">
              Los pobladores han intentado de todo: cambiar focos, poner velas, incluso improvisar linternas gigantes. Pero pronto descubren que el verdadero problema es más profundo: nadie sabe cómo funciona la electricidad ni cómo instalar un sistema moderno de iluminación.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 rounded-2xl border border-slate-700 overflow-hidden flex items-center justify-center min-h-0 bg-slate-900/50"
          >
            <img src="/images/encendamoselfuturo-clean.png" alt="Pueblo de Luminaria a oscuras"
              className="w-full h-full object-contain" />
          </motion.div>
        </div>

        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="shrink-0">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">El nacimiento de una idea</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Un grupo de jóvenes —ingeniosos, curiosos y decididos— se une para enfrentar el reto. Saben que la respuesta no está solo en reemplazar lámparas, sino en diseñar un sistema inteligente de luces que llene de color las noches de Luminaria.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mt-2">
              Pero el camino no será fácil. Tendrán que aprender sobre circuitos, LEDs y programación, y pensar como verdaderos inventores para lograrlo.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 rounded-2xl border border-slate-700 overflow-hidden flex items-center justify-center min-h-0 bg-slate-900/50"
          >
            <img src="/images/circuitoniños-clean.png" alt="Jóvenes experimentando con circuitos"
              className="w-full h-full object-contain" />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-xs text-slate-400 italic shrink-0">
            "Si aprendemos cómo se mueve la electricidad, podremos diseñar nuestro propio sistema de luces"
          </motion.p>
        </div>

        <div className="h-full flex flex-col gap-4 overflow-hidden justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">¿Podrán devolverle la luz... y el color... al pueblo que nunca dejó de soñar?</h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Los jóvenes de Luminaria comienzan a experimentar con circuitos simples. Saben que el primer paso es entender cómo funciona la electricidad, ese poder invisible que un día desapareció sin dejar rastro.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Motivados por la oscuridad y por la esperanza, deciden investigar. Conocen el protoboard, los LEDs, las resistencias y descubren que detrás de cada encendido hay un principio físico, un orden, una lógica, una ciencia que se puede aprender.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-blue-900/30 border border-blue-700/50 rounded-2xl p-5"
          >
            <h3 className="text-base font-bold text-blue-400 mb-3">Saberes previos</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>¿Qué tipos de luces conoces y dónde las has visto funcionar?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>¿Sabes cómo encender y apagar un LED en un circuito?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>¿Qué diferencia hay entre un foco común y una luz LED?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>¿Qué componentes electrónicos piensas que se usan para controlar luces de manera automática?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>¿Alguna vez has visto un lugar iluminado con luces de colores? ¿Cómo crees que lo hicieron?</span>
              </li>
            </ul>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-xs text-yellow-300 italic text-center shrink-0">
            Si tuvieras el poder de iluminar cualquier lugar del mundo, ¿cómo lo harías?
          </motion.p>
        </div>
      </SectionSlider>
    </div>
  );
}
