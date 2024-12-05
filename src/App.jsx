import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Resumen } from "./components/Resumen";
import { Navbar } from "./components/Navbar/Navbar";
import { MemoriaCacheRAM } from "./components/Glosario/MemoriaCacheRAM";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MemoriaROM } from "./components/MemoriaROM/MemoriaROM";
import { Firmware } from "./components/Firmware/Firmware";
import { Footer } from "./components/Footer/Footer";
import { Integrantes } from "./components/Integrantes/Integrantes";
import { EspacioDeDirecciones } from "./components/EspacioDeDirecciones";
import { AdministracionMemoria } from "./components/AdministracionMemoria";
import { PresentacionGeneral } from "./components/PresentacionGeneral";
import { MemoriaVirtual } from "./components/MemoriaVirtual";
import { Magnitudes } from "./components/Magnitudes";

function App() {
	return (
		<div className="contenedor">
			<Router>
				<Navbar></Navbar>
				<h1 className="title">Arquitectura y Sistemas Operativos</h1>
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
						{/* <Route
							path="espacio-de-direcciones"
							element={<EspacioDeDirecciones></EspacioDeDirecciones>}
						></Route> */}
						<Route
							path="administracion-de-memoria"
							element={<AdministracionMemoria></AdministracionMemoria>}
						></Route>
						<Route
							path="integrantes"
							element={<Integrantes></Integrantes>}
						></Route>
						{/* <Route
							path="presentacion"
							element={<Presentacion></Presentacion>}
						></Route> */}
						<Route
							path="presentacion-general"
							element={<PresentacionGeneral></PresentacionGeneral>}
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
