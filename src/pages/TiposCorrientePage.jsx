import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DATA_CORRIENTE = {
    ac: {
        title: "Corriente Alterna (AC)",
        desc: "Es la que llega a los enchufes de casa. Cambia de dirección muchas veces por segundo[cite: 2].",
        imgModal: "/images/ac-modal.png"
    },
    dc: {
        title: "Corriente Continua (DC)",
        desc: "Es la que usan las pilas o baterías. Siempre fluye en un solo sentido[cite: 2].",
        imgModal: "/images/dc-modal.png"
    }
};

export default function TiposCorrientePage() {
    const [modal, setModal] = useState(null);

    return (
        <div className="p-8 max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">Tipos de Corriente</h2>
            <p className="text-lg text-slate-300 mb-12 text-center">Haz clic en cada imagen para conocer cómo fluye la energía.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <button onClick={() => setModal(DATA_CORRIENTE.dc)} className="group rounded-3xl overflow-hidden border-2 border-slate-700 hover:border-blue-500 transition-all duration-300 cursor-pointer relative">
                    <img src="/images/corriente-dc.png" alt="Corriente DC" className="w-full h-auto object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold">Ver Detalles</span>
                    </div>
                </button>

                <button onClick={() => setModal(DATA_CORRIENTE.ac)} className="group rounded-3xl overflow-hidden border-2 border-slate-700 hover:border-blue-500 transition-all duration-300 cursor-pointer relative">
                    <img src="/images/corriente-ac.png" alt="Corriente AC" className="w-full h-auto object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold">Ver Detalles</span>
                    </div>
                </button>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setModal(null)} className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer" />
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-slate-800 border border-slate-600 rounded-3xl p-8 max-w-lg w-full z-10 shadow-2xl">
                            <button onClick={() => setModal(null)} className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 p-2 rounded-full"><X size={20}/></button>
                            <img src={modal.imgModal} alt={modal.title} className="w-full h-40 object-contain mb-6" />
                            <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">{modal.title}</h3>
                            <p className="text-slate-300 text-lg text-center leading-relaxed">{modal.desc}</p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}