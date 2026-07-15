import { motion } from 'framer-motion';

export default function CaminoElectricidadPage() {
    return (
        <div className="p-8 max-w-4xl mx-auto flex flex-col gap-8 pb-16">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold text-yellow-400">
                El camino de la electricidad: los circuitos
            </motion.h2>

            <p className="text-lg text-slate-300 leading-relaxed">
                Para que la electricidad funcione, necesita un camino cerrado por donde fluir[cite: 2]. A ese camino lo llamamos circuito eléctrico[cite: 2].
            </p>

            {/* VIDEO EN BUCLE DEL CIRCUITO */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl my-4">
                <video autoPlay loop muted playsInline className="w-full h-auto">
                    <source src="/videos/circuito-animado.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg mt-4">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Partes de un circuito</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</span>
                        <p className="text-slate-300 text-lg"><strong>Fuente de energía:</strong> pila o batería[cite: 2].</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</span>
                        <p className="text-slate-300 text-lg"><strong>Conductores:</strong> cables que conectan todo[cite: 2].</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</span>
                        <p className="text-slate-300 text-lg"><strong>Interruptor:</strong> para abrir o cerrar el paso de la electricidad[cite: 2].</p>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">4</span>
                        <p className="text-slate-300 text-lg"><strong>Carga:</strong> lo que consume la energía, como un LED[cite: 2].</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}