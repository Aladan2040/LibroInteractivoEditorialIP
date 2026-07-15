import { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SectionSlider({ children, indicators = true }) {
  const sections = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(sections.length - 1, c + 1));

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 overflow-hidden"
          >
            {sections[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      {sections.length > 1 && (
        <div className="flex items-center justify-between pt-3 border-t border-slate-700/50 mt-3">
          <button
            onClick={prev}
            disabled={current === 0}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              current === 0
                ? 'text-slate-600 cursor-not-allowed'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <ChevronLeft size={16} /> Anterior
          </button>

          {indicators && (
            <div className="flex items-center gap-1.5">
              {sections.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? 'bg-blue-400 w-5' : 'bg-slate-600 hover:bg-slate-500 w-2'
                  }`}
                />
              ))}
              <span className="text-[10px] text-slate-500 ml-1">
                {current + 1}/{sections.length}
              </span>
            </div>
          )}

          <button
            onClick={next}
            disabled={current === sections.length - 1}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              current === sections.length - 1
                ? 'text-slate-600 cursor-not-allowed'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            Siguiente <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
