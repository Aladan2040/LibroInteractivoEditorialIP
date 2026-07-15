import { motion } from 'framer-motion';

export default function DesafioPage() {
    return (
        <div className="p-8 max-w-4xl mx-auto flex flex-col gap-12 pb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">Un pueblo que sueña con volver a brillar</h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    En el tranquilo pueblo de Luminaria, las noches ya no son lo mismo[cite: 2]. Las antiguas farolas se apagaron para siempre, dejando calles sumidas en una oscuridad inquietante[cite: 2]. Sin luz, las plazas se vacían, las tiendas cierran temprano y hasta las fiestas del pueblo han quedado en silencio[cite: 2].
                </p>
                <img src="/images/pueblo-oscuro.png" alt="Pueblo de Luminaria a oscuras" className="w-full rounded-2xl shadow-2xl border border-slate-700 object-cover max-h-[400px]" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                <h2 className="text-3xl font-bold text-blue-400 mb-6">El nacimiento de una idea</h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Los pobladores han intentado de todo: cambiar focos, poner velas, incluso improvisar linternas gigantes[cite: 2]. Pero pronto descubren que el verdadero problema es más profundo: nadie sabe cómo funciona la electricidad ni cómo instalar un sistema moderno de iluminación[cite: 2].
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Un grupo de jóvenes —ingeniosos, curiosos y decididos— se une para enfrentar el reto[cite: 2]. Saben que la respuesta no está solo en reemplazar lámparas, sino en diseñar un sistema inteligente de luces que llene de color las noches de Luminaria[cite: 2].
                </p>
                <img src="/images/ninos-experimentos.png" alt="Niños experimentando con circuitos" className="w-full rounded-2xl shadow-2xl border border-slate-700 object-cover max-h-[400px]" />
            </motion.div>
        </div>
    );
}