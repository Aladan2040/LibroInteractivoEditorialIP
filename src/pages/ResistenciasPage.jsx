import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calculator } from 'lucide-react';

const COLORES = [
  { color: 'Negro', valor: 0, multiplicador: 1, clase: 'bg-black' },
  { color: 'Marrón', valor: 1, multiplicador: 10, clase: 'bg-amber-800' },
  { color: 'Rojo', valor: 2, multiplicador: 100, clase: 'bg-red-600' },
  { color: 'Naranja', valor: 3, multiplicador: 1000, clase: 'bg-orange-500' },
  { color: 'Amarillo', valor: 4, multiplicador: 10000, clase: 'bg-yellow-400' },
  { color: 'Verde', valor: 5, multiplicador: 100000, clase: 'bg-green-600' },
  { color: 'Azul', valor: 6, multiplicador: 1000000, clase: 'bg-blue-600' },
  { color: 'Violeta', valor: 7, multiplicador: 10000000, clase: 'bg-purple-600' },
  { color: 'Gris', valor: 8, multiplicador: 100000000, clase: 'bg-gray-400' },
  { color: 'Blanco', valor: 9, multiplicador: 1000000000, clase: 'bg-gray-100' },
];

const TOLERANCIAS = [
  { color: 'Marrón', tol: '±1%', clase: 'bg-amber-800' },
  { color: 'Rojo', tol: '±2%', clase: 'bg-red-600' },
  { color: 'Dorado', tol: '±5%', clase: 'bg-yellow-500' },
  { color: 'Plata', tol: '±10%', clase: 'bg-gray-300' },
  { color: 'Ninguna', tol: '±20%', clase: 'bg-transparent border border-white/30' },
];

export default function ResistenciasPage() {
  const [b1, setB1] = useState(1);
  const [b2, setB2] = useState(0);
  const [mult, setMult] = useState(2);
  const [tol, setTol] = useState(2);

  const val1 = COLORES[b1].valor;
  const val2 = COLORES[b2].valor;
  const multiplicador = COLORES[mult].multiplicador;
  const tolerancia = TOLERANCIAS[tol].tol;
  const valorOhm = (val1 * 10 + val2) * multiplicador;
  const valorFormateado = valorOhm >= 1000000 ? `${valorOhm / 1000000} MΩ` :
    valorOhm >= 1000 ? `${valorOhm / 1000} kΩ` : `${valorOhm} Ω`;

  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen flex flex-col pb-20">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          ¿Conoces las resistencias?
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mb-6 leading-relaxed">
          Las <strong className="text-blue-400">resistencias</strong> sirven para limitar el paso de corriente y proteger los LEDs.
          Cada resistencia tiene un valor en ohmios (Ω).
        </p>
        <div className="bg-blue-900/30 border border-blue-700 rounded-2xl p-5 mb-8">
          <p className="text-blue-200 text-lg">
            <strong>¡Importante!</strong> Siempre debes colocar una resistencia en serie con el LED para evitar que se queme.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Código de colores</h2>
          <p className="text-slate-300 mb-6">
            Las rayitas de colores en la resistencia indican su valor. Cada color representa un número, y con una tabla puedes descifrar cuánto "frena" la corriente.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left py-2 text-slate-400">Color</th>
                  <th className="text-center py-2 text-slate-400">Valor</th>
                  <th className="text-center py-2 text-slate-400">Multiplicador</th>
                </tr>
              </thead>
              <tbody>
                {COLORES.map((c) => (
                  <tr key={c.color} className="border-b border-slate-700/50">
                    <td className="py-2 flex items-center gap-2">
                      <span className={`w-5 h-5 rounded ${c.clase} border border-white/20`} />
                      <span className="text-slate-200">{c.color}</span>
                    </td>
                    <td className="text-center text-slate-300">{c.valor}</td>
                    <td className="text-center text-slate-300">×{c.multiplicador}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
            <h4 className="text-sm font-semibold text-slate-400 mb-2">Tolerancias</h4>
            <div className="flex flex-wrap gap-3">
              {TOLERANCIAS.map((t) => (
                <div key={t.tol} className="flex items-center gap-1.5 text-xs text-slate-300">
                  <span className={`w-4 h-4 rounded ${t.clase} border border-white/20`} />
                  {t.tol}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Calcula el valor</h2>
          <p className="text-slate-300 mb-6">
            Fórmula del valor de una resistencia de 4 bandas:
          </p>
          <div className="bg-slate-900/70 border border-slate-600 rounded-xl p-4 mb-6 text-center">
            <p className="text-yellow-300 font-mono text-lg">
              Valor (Ω) = (1ra banda × 2da banda) × Multiplicador ± Tolerancia
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="text-sm text-slate-400 mb-1 block">1ra banda</label>
              <select value={b1} onChange={e => setB1(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg p-2.5 text-white">
                {COLORES.map((c, i) => (
                  <option key={i} value={i}>{c.color} ({c.valor})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1 block">2da banda</label>
              <select value={b2} onChange={e => setB2(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg p-2.5 text-white">
                {COLORES.map((c, i) => (
                  <option key={i} value={i}>{c.color} ({c.valor})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Multiplicador (3ra banda)</label>
              <select value={mult} onChange={e => setMult(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg p-2.5 text-white">
                {COLORES.map((c, i) => (
                  <option key={i} value={i}>{c.color} (×{c.multiplicador})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-1 block">Tolerancia (4ta banda)</label>
              <select value={tol} onChange={e => setTol(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg p-2.5 text-white">
                {TOLERANCIAS.map((t, i) => (
                  <option key={i} value={i}>{t.color} ({t.tol})</option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-700/50 rounded-xl p-6 text-center">
            <Calculator size={24} className="text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-400 font-mono">{valorFormateado}</p>
            <p className="text-slate-400 text-sm mt-1">Tolerancia: {tolerancia}</p>
            <p className="text-slate-500 text-xs mt-2">
              Rango: {valorOhm - (valorOhm * parseInt(tolerancia) / 100)} Ω ~ {valorOhm + (valorOhm * parseInt(tolerancia) / 100)} Ω
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Ejemplo práctico</h2>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="w-8 h-8 rounded bg-amber-800 border border-white/30" title="Marrón" />
          <span className="text-white font-mono text-xl">→ 1</span>
          <span className="w-8 h-8 rounded bg-black border border-white/30" title="Negro" />
          <span className="text-white font-mono text-xl">→ 0</span>
          <span className="w-8 h-8 rounded bg-red-600 border border-white/30" title="Rojo" />
          <span className="text-white font-mono text-xl">→ ×100</span>
          <span className="w-8 h-8 rounded bg-gray-300 border border-white/30" title="Plata" />
          <span className="text-white font-mono text-xl">→ ±10%</span>
        </div>
        <p className="text-slate-300">
          <strong>Marrón – Negro – Rojo – Plata</strong> = (1 0) × 100 = <strong className="text-yellow-400">1000 Ω ±10%</strong>
        </p>
        <p className="text-slate-400 text-sm mt-2">
          Esto significa que la resistencia tiene un valor cercano a 1000 ohmios, pero puede variar entre 900 Ω y 1100 Ω debido a su tolerancia del 10%.
        </p>
      </motion.div>

      <div className="flex justify-between mt-4">
        <a href="/como-conectar-led" className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
          <ArrowLeft size={20} /> Anterior: LED
        </a>
        <a href="/actividad" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
          Siguiente: Actividad <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}
