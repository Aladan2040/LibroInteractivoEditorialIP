import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Battery, Route as RouteIcon, Network, LayoutGrid, Lightbulb, Cpu, Wrench } from 'lucide-react';

export default function HomePage() {
    // Lista de nuestras páginas para generar las tarjetas dinámicamente
    const menuItems = [
        {
            path: '/desafio',
            title: '1. El Desafío Inicial',
            icon: <BookOpen size={24} />,
            desc: 'Conoce la historia del pueblo de Luminaria y el problema a resolver.'
        },
        {
            path: '/electricidad',
            title: '2. ¿Qué es la electricidad?',
            icon: <Zap size={24} />,
            desc: 'Conceptos básicos: Corriente, Voltaje y Resistencia.'
        },
        {
            path: '/tipos-corriente',
            title: '3. Tipos de Corriente',
            icon: <Battery size={24} />,
            desc: 'Diferencias entre Corriente Continua (DC) y Alterna (AC).'
        },
        {
            path: '/camino-electricidad',
            title: '4. El Camino de la Energía',
            icon: <RouteIcon size={24} />,
            desc: 'Explora las partes fundamentales de un circuito eléctrico.'
        },
        {
            path: '/tipos-circuitos',
            title: '5. Tipos de Circuitos',
            icon: <Network size={24} />,
            desc: 'Aprende cómo funcionan los circuitos en Serie y en Paralelo.'
        },
        {
            path: '/protoboard',
            title: '6. La Protoboard',
            icon: <LayoutGrid size={24} />,
            desc: '¿Qué es? Descubre sus partes y explora un modelo 3D interactivo.'
        },
        {
            path: '/como-conectar-led',
            title: '7. ¿Cómo conectar un LED?',
            icon: <Lightbulb size={24} />,
            desc: 'Aprende la polaridad del LED, sus partes y cómo conectarlo sin dañarlo.'
        },
        {
            path: '/resistencias',
            title: '8. Las Resistencias',
            icon: <Cpu size={24} />,
            desc: 'Código de colores, fórmula de 4 bandas y calculadora interactiva.'
        },
        {
            path: '/actividad',
            title: '9. Actividad: Encendido básico',
            icon: <Wrench size={24} />,
            desc: 'Construye tu primer circuito con LED, resistencia y protoboard.'
        },
    ];

    return (
        <div className="p-8 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">

            {/* Cabecera Animada */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4 tracking-tight">
                    Luminaria
                </h1>
                <p className="text-xl text-slate-300 font-light">
                    Sistema Inteligente de Luces - Índice del Módulo
                </p>
            </motion.div>

            {/* Cuadrícula de Navegación */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                        {/* Componente Link para navegar sin recargar la página */}
                        <Link
                            to={item.path}
                            className="block h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] group"
                        >
                            <div className="text-blue-400 mb-6 flex items-center justify-center w-14 h-14 bg-slate-900 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                                {item.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {item.title}
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </Link>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}