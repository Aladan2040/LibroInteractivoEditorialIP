import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DesafioPage from './pages/DesafioPage';
import ElectricidadPage from './pages/ElectricidadPage';
import TiposCorrientePage from './pages/TiposCorrientePage';
import CaminoElectricidadPage from './pages/CaminoElectricidadPage';
import TiposCircuitosPage from './pages/TiposCircuitosPage';
import ProtoboardPage from './pages/ProtoboardPage';
import ComoConectarLEDPage from './pages/ComoConectarLEDPage';
import ResistenciasPage from './pages/ResistenciasPage';
import ActividadPage from './pages/ActividadPage';
import MicrobitPage from './pages/MicrobitPage';

export default function App() {
    return (
        <BrowserRouter>
            <div className="bg-[#0B1120] min-h-screen text-white font-sans overflow-x-hidden">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/desafio" element={<DesafioPage />} />
                    <Route path="/electricidad" element={<ElectricidadPage />} />
                    <Route path="/tipos-corriente" element={<TiposCorrientePage />} />
                    <Route path="/camino-electricidad" element={<CaminoElectricidadPage />} />
                    <Route path="/tipos-circuitos" element={<TiposCircuitosPage />} />
                    <Route path="/protoboard" element={<ProtoboardPage />} />
                    <Route path="/como-conectar-led" element={<ComoConectarLEDPage />} />
                    <Route path="/resistencias" element={<ResistenciasPage />} />
                    <Route path="/actividad" element={<ActividadPage />} />
                    <Route path="/microbit" element={<MicrobitPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}