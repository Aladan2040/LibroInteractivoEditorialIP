import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@google/model-viewer';
import { Cpu, X, Info } from 'lucide-react';

// Información teórica para cada punto
const ARDUINO_DATA = {
    micro: {
        title: "Microcontrolador",
        description: "Es un pequeño chip que actúa como el 'cerebro digital'. Es capaz de seguir las instrucciones escritas en código para procesar información y actuar."
    },
    usb: {
        title: "Puerto USB",
        description: "Permite conectar la placa a la computadora para cargarle el código y también sirve como fuente de alimentación de 5V."
    },
    fuente: {
        title: "Fuente Externa",
        description: "Jack de alimentación para conectar una batería o adaptador de corriente externo cuando el Arduino no está conectado por USB."
    }
};

export default function Arduino3D() {
    const [activePart, setActivePart] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="h-full w-full flex flex-col items-center justify-center relative p-6"
        >
            <div className="absolute top-8 left-8 z-10 max-w-sm">
                <h2 className="text-3xl font-bold text-blue-400 mb-2 flex items-center gap-2">
                    <Cpu /> El "Cerebro"
                </h2>
                <p className="text-slate-300">
                    Gira el Arduino y haz clic en los puntos interactivos para descubrir sus partes antes de programarlo.
                </p>
            </div>

            <div className="w-full max-w-5xl h-[70vh] bg-gradient-to-b from-slate-900 to-[#0B1120] rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden flex">

                <model-viewer
                    src="/models/arduino.glb"
                    camera-controls
                    auto-rotate
                    rotation-per-second="10deg"
                    interaction-prompt="none"
                    style={{ width: '100%', height: '100%', outline: 'none' }}
                >
                    {/* Botón 1: Microcontrolador con tus coordenadas exactas */}
                    <button
                        className="bg-blue-600/80 hover:bg-blue-400 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-[0_0_15px_#2563eb] transition-transform hover:scale-110 border-2 border-white/30 backdrop-blur-sm"
                        slot="hotspot-2"
                        data-position="0.23391355767383176m -0.12758008934331322m 0.2577946156226276m"
                        data-normal="2.9602534190998065e-7m 1.7130718819202433e-7m 0.9999999999999415m"
                        onClick={() => setActivePart(ARDUINO_DATA.micro)}
                    >
                        <Info size={16} />
                    </button>

                    {/* Botón 2: USB con tus coordenadas exactas */}
                    <button
                        className="bg-blue-600/80 hover:bg-blue-400 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-[0_0_15px_#2563eb] transition-transform hover:scale-110 border-2 border-white/30 backdrop-blur-sm"
                        slot="hotspot-3"
                        data-position="-0.45977259865061576m 0.18134584480923222m 0.34886683912273725m"
                        data-normal="-0.006975260716884869m -0.000020721824734027776m 0.9999756723583516m"
                        onClick={() => setActivePart(ARDUINO_DATA.usb)}
                    >
                        <Info size={16} />
                    </button>

                    {/* Botón 3: Fuente Externa con tus coordenadas exactas */}
                    <button
                        className="bg-blue-600/80 hover:bg-blue-400 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-[0_0_15px_#2563eb] transition-transform hover:scale-110 border-2 border-white/30 backdrop-blur-sm"
                        slot="hotspot-4"
                        data-position="-0.4302260602436418m -0.2568518526958143m 0.32074932044657245m"
                        data-normal="2.9602534536999425e-7m 1.7130727503952246e-7m 0.9999999999999415m"
                        onClick={() => setActivePart(ARDUINO_DATA.fuente)}
                    >
                        <Info size={16} />
                    </button>
                </model-viewer>

                {/* Tarjeta de Información Flotante Animada */}
                <AnimatePresence>
                    {activePart && (
                        <motion.div
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-80 bg-slate-800/95 backdrop-blur-xl border border-slate-600 p-6 rounded-2xl shadow-2xl z-20"
                        >
                            <button
                                onClick={() => setActivePart(null)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-700/50 p-1.5 rounded-full transition-colors"
                            >
                                <X size={16} />
                            </button>

                            <h3 className="text-xl font-bold text-yellow-400 mb-3 pr-6">
                                {activePart.title}
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                {activePart.description}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </motion.div>
    );
}