import { motion } from 'framer-motion';
import SectionSlider from '../components/SectionSlider';

export default function DesafioPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden p-6">
      <SectionSlider>
        <div className="h-full grid grid-cols-1 md:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="md:col-span-2 h-full rounded-2xl overflow-hidden relative min-h-0"
          >
            <img src="/images/encendamoselfuturo-clean.png" alt="Pueblo de Luminaria a oscuras"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>

          <div className="md:col-span-3 h-full flex flex-col justify-center gap-5 min-h-0">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-yellow-400"
            >
              Un pueblo que sueña con volver a brillar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 text-base text-slate-300 leading-loose"
            >
              <p>
                En el tranquilo pueblo de Luminaria, las noches ya no son lo mismo. Las antiguas farolas se apagaron para siempre, dejando calles sumidas en una oscuridad inquietante. Sin luz, las plazas se vacían, las tiendas cierran temprano y hasta las fiestas del pueblo han quedado en silencio.
              </p>
              <p>
                Los pobladores han intentado de todo: cambiar focos, poner velas, incluso improvisar linternas gigantes. Pero pronto descubren que el verdadero problema es más profundo: nadie sabe cómo funciona la electricidad ni cómo instalar un sistema moderno de iluminación.
              </p>
              <p>
                Un grupo de jóvenes —ingeniosos, curiosos y decididos— se une para enfrentar el reto. Saben que la respuesta no está solo en reemplazar lámparas, sino en diseñar un sistema inteligente de luces que llene de color las noches de Luminaria.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="h-full grid grid-cols-1 md:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="md:col-span-2 h-full rounded-2xl overflow-hidden relative min-h-0"
          >
            <img src="/images/circuitoniños-clean.png" alt="Jóvenes experimentando con circuitos"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>

          <div className="md:col-span-3 h-full flex flex-col justify-between gap-4 min-h-0 py-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">El nacimiento de una idea</h2>
              <div className="space-y-3 text-base text-slate-300 leading-relaxed">
                <p>
                  Tendrán que aprender sobre circuitos, LEDs y programación, y pensar como verdaderos inventores para lograrlo. Uno de los jóvenes exclama: <span className="text-yellow-300 italic">"¡Si aprendemos cómo se mueve la electricidad, podremos diseñar nuestro propio sistema de luces!"</span>
                </p>
                <p>
                  Motivados por la oscuridad y por la esperanza, deciden investigar. Conocen el protoboard, los LEDs, las resistencias y descubren que detrás de cada encendido hay un principio físico, un orden, una lógica, una ciencia que se puede aprender. ¿Podrán devolverle la luz... y el color... al pueblo que nunca dejó de soñar?
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-blue-900/30 border border-blue-700/50 rounded-2xl p-4"
            >
              <h3 className="text-sm font-bold text-blue-400 mb-2.5">Saberes previos</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-300">
                {[
                  '¿Qué tipos de luces conoces y dónde las has visto funcionar?',
                  '¿Sabes cómo encender y apagar un LED en un circuito?',
                  '¿Qué diferencia hay entre un foco común y una luz LED?',
                  '¿Qué componentes se usan para controlar luces automáticas?',
                  '¿Has visto un lugar iluminado con luces de colores? ¿Cómo lo hicieron?'
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-sm text-yellow-300 italic text-center"
            >
              Si tuvieras el poder de iluminar cualquier lugar del mundo, ¿cómo lo harías?
            </motion.p>
          </div>
        </div>
      </SectionSlider>
    </div>
  );
}
