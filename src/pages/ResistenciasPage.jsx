import { useState } from 'react';
import { Calculator } from 'lucide-react';
import SectionSlider from '../components/SectionSlider';

const COLORES = [
  { color: 'Negro', valor: 0, mult: 1, clase: 'bg-black' },
  { color: 'Marrón', valor: 1, mult: 10, clase: 'bg-amber-800' },
  { color: 'Rojo', valor: 2, mult: 100, clase: 'bg-red-600' },
  { color: 'Naranja', valor: 3, mult: 1000, clase: 'bg-orange-500' },
  { color: 'Amarillo', valor: 4, mult: 10000, clase: 'bg-yellow-400' },
  { color: 'Verde', valor: 5, mult: 100000, clase: 'bg-green-600' },
  { color: 'Azul', valor: 6, mult: 1000000, clase: 'bg-blue-600' },
  { color: 'Violeta', valor: 7, mult: 10000000, clase: 'bg-purple-600' },
  { color: 'Gris', valor: 8, mult: 100000000, clase: 'bg-gray-400' },
  { color: 'Blanco', valor: 9, mult: 1000000000, clase: 'bg-gray-100' },
];

const TOL = [
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

  const v1 = COLORES[b1].valor;
  const v2 = COLORES[b2].valor;
  const mul = COLORES[mult].mult;
  const tolStr = TOL[tol].tol;
  const ohms = (v1 * 10 + v2) * mul;
  const formateado = ohms >= 1000000 ? `${ohms / 1000000} MΩ` : ohms >= 1000 ? `${ohms / 1000} kΩ` : `${ohms} Ω`;
  const pct = parseInt(tolStr);
  const min = ohms - ohms * pct / 100;
  const max = ohms + ohms * pct / 100;

  return (
    <div className="h-screen flex flex-col overflow-hidden p-6">
      <SectionSlider>
        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 shrink-0">
            ¿Conoces las resistencias?
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed shrink-0">
            Las <strong className="text-blue-400">resistencias</strong> limitan el paso de corriente y protegen los LEDs. Cada resistencia tiene un valor en ohmios (Ω).
          </p>
          <div className="bg-blue-900/30 border border-blue-700 rounded-xl p-3 shrink-0">
            <p className="text-blue-200 text-sm"><strong>¡Importante!</strong> Siempre coloca una resistencia en serie con el LED para evitar que se queme.</p>
          </div>

          <div className="flex-1 bg-slate-800/40 border border-slate-700 rounded-2xl p-4 overflow-y-auto min-h-0">
            <h2 className="text-lg font-bold text-blue-400 mb-3">Código de colores</h2>
            <p className="text-xs text-slate-400 mb-3">Cada color representa un número. Con la tabla descifras cuánto "frena" la corriente.</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-xs">
              {COLORES.map(c => (
                <div key={c.color} className="flex items-center gap-1.5 bg-slate-900/50 rounded-lg px-2 py-1.5 border border-slate-700">
                  <span className={`w-4 h-4 rounded ${c.clase} border border-white/20 shrink-0`} />
                  <span className="text-slate-200">{c.color}</span>
                  <span className="text-slate-500 ml-auto">{c.valor}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-700">
              <p className="text-xs text-slate-400 mb-2">Tolerancias:</p>
              <div className="flex flex-wrap gap-2">
                {TOL.map(t => (
                  <span key={t.tol} className="flex items-center gap-1 text-xs text-slate-300 bg-slate-900/50 px-2 py-1 rounded-lg border border-slate-700">
                    <span className={`w-3 h-3 rounded ${t.clase} border border-white/20`} />
                    {t.tol}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col gap-3 overflow-hidden">
          <h2 className="text-xl font-bold text-blue-400 shrink-0">Calcula el valor</h2>
          <p className="text-xs text-slate-400 shrink-0">Fórmula de 4 bandas: (1ra × 2da) × Multiplicador ± Tolerancia</p>

          <div className="bg-slate-900/70 border border-slate-600 rounded-xl p-3 text-center shrink-0">
            <p className="text-yellow-300 font-mono text-sm">Valor (Ω) = (1ra × 2da) × Mult. ± Tol.</p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4 overflow-y-auto">
              <div className="space-y-3">
                {[
                  { label: '1ra banda', val: b1, set: setB1 },
                  { label: '2da banda', val: b2, set: setB2 },
                  { label: 'Multiplicador', val: mult, set: setMult },
                  { label: 'Tolerancia', val: tol, set: setTol },
                ].map((item, i) => (
                  <div key={i}>
                    <label className="text-xs text-slate-400 mb-1 block">{item.label}</label>
                    <select value={item.val} onChange={e => item.set(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg p-2 text-sm text-white">
                      {item.label === 'Tolerancia'
                        ? TOL.map((t, idx) => <option key={idx} value={idx}>{t.color} ({t.tol})</option>)
                        : COLORES.map((c, idx) => (
                            <option key={idx} value={idx}>{c.color} ({c.valor}{item.label === 'Multiplicador' ? ` ×${c.mult}` : ''})</option>
                          ))
                      }
                    </select>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-4 flex flex-col justify-center">
              <Calculator size={28} className="text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-yellow-400 font-mono text-center">{formateado}</p>
              <p className="text-slate-400 text-xs text-center mt-1">Tolerancia: {tolStr}</p>
              <p className="text-slate-500 text-[10px] text-center mt-1">Rango: {min} Ω ~ {max} Ω</p>
              <div className="mt-3 pt-3 border-t border-slate-700">
                <p className="text-xs text-slate-400 mb-2">Ejemplo:</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <span className="w-4 h-4 rounded bg-amber-800 border border-white/30" />
                  <span>1</span>
                  <span className="w-4 h-4 rounded bg-black border border-white/30" />
                  <span>0</span>
                  <span className="w-4 h-4 rounded bg-red-600 border border-white/30" />
                  <span>×100</span>
                  <span className="w-4 h-4 rounded bg-gray-300 border border-white/30" />
                  <span>±10%</span>
                  <span className="text-yellow-400 ml-1">= 1000 Ω</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionSlider>
    </div>
  );
}
