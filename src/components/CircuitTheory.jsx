import { motion } from 'framer-motion';

export default function CircuitTheory() {
    // Variantes para controlar animaciones en cascada
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.8 } }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col h-full overflow-y-auto custom-scrollbar p-8 md:p-16 max-w-4xl mx-auto"
        >
            <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                Un pueblo que sueña con volver a brillar
            </motion.h1>

            <motion.p variants={item} className="text-xl text-slate-300 mb-8 leading-relaxed">
                En el tranquilo pueblo de Luminaria, las noches ya no son lo mismo. Las antiguas farolas se apagaron para siempre, dejando calles sumidas en una oscuridad inquietante.
            </motion.p>

            <motion.div variants={item} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl mb-12 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">El camino de la electricidad</h3>
                <p className="text-slate-300 mb-6">
                    Para que la luz vuelva, necesitamos un <strong>circuito cerrado</strong>.
                    Observa cómo fluye la energía desde la fuente hasta la carga.
                </p>

                {/* Aquí va tu recorte del PDF */}
                <div className="relative overflow-hidden rounded-xl bg-white/5 p-4 flex justify-center">
                    <img
                        src="/images/circuitoniños-clean.png"
                        alt="Circuito Eléctrico"
                        className="max-w-full h-auto object-contain opacity-90"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}