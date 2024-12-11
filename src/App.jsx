import "./App.css";
import { IntercambioMemoriaDisco } from "./components/Presentaciones/IntercambioMemoriaDisco";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Integrantes } from "./components/Integrantes/Integrantes";
import so from "./assets/images/sistema-operativo.png";
import { EspacioDeDirecciones } from "./components/Glosario/EspacioDeDirecciones";
import { Resumen } from "./components/Resumen/Resumen";
import {
	Archivos,
	Emulacion,
	Firmware,
	Magnitudes,
	MemoriaCacheRAM,
	IP,
	MemoriaROM,
	MemoriaVirtual,
	Particion,
	Registros,
} from "./components/Glosario";

function App() {
	return (
		<div className="contenedor">
			<Router>
				<Navbar></Navbar>
				<header className="titulos">
					<div
						className="so-title"
						style={{ display: "flex", flexDirection: "column" }}
					>
						<h1 className="title">Arquitectura y Sistemas Operativos</h1>
						<img className="so-title" src={so}></img>
					</div>
				</header>
				{/* <div>
					<a href="https://vitejs.dev" target="_blank">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div> */}
				<main>
					<Routes>
						<Route exact path="/" element={<Resumen></Resumen>}></Route>
						<Route
							path="memoria-cache-ram"
							element={<MemoriaCacheRAM></MemoriaCacheRAM>}
						></Route>
						<Route
							path="memoria-rom"
							element={<MemoriaROM></MemoriaROM>}
						></Route>
						<Route path="firmware" element={<Firmware></Firmware>}></Route>
						<Route path="ip" element={<IP></IP>}></Route>
						<Route path="emulacion" element={<Emulacion></Emulacion>}></Route>
						<Route path="particion" element={<Particion></Particion>}></Route>
						<Route path="registros" element={<Registros></Registros>}></Route>
						<Route path="archivos" element={<Archivos></Archivos>}></Route>
						<Route
							path="espacio-de-direcciones"
							element={<EspacioDeDirecciones></EspacioDeDirecciones>}
						></Route>
						{/* <Route
							path="administracion-de-memoria"
							element={<AdministracionMemoria></AdministracionMemoria>}
						></Route> */}
						<Route
							path="integrantes"
							element={<Integrantes></Integrantes>}
						></Route>
						{/* <Route
							path="presentacion"
							element={<Presentacion></Presentacion>}
						></Route> */}
						<Route
							path="intercambio-memoria-disco"
							element={<IntercambioMemoriaDisco></IntercambioMemoriaDisco>}
						></Route>
						<Route path="memoria-virtual" element={<MemoriaVirtual />}></Route>
						<Route path="magnitudes" element={<Magnitudes />}></Route>
					</Routes>
				</main>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
