import { useState } from "react";
import "./App.css";
import { Resumen } from "./components/Resumen";
import { Navbar } from "./components/Navbar/Navbar";
import { MemoriaCacheRAM } from "./components/Glosario/MemoriaCacheRAM";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Firmware } from "./components/Firmware/Firmware";
import { Footer } from "./components/Footer/Footer";
import { Integrantes } from "./components/Integrantes/Integrantes";
import { AdministracionMemoria } from "./components/AdministracionMemoria";
import { PresentacionGeneral } from "./components/PresentacionGeneral";
import so from "./assets/img/sistema-operativo.png";
import { IP } from "./components/Glosario/IP";
import { Emulacion } from "./components/Glosario/Emulacion";
import { Particion } from "./components/Glosario/Particion";
import { Registros } from "./components/Glosario/Registros";
import { Archivos } from "./components/Glosario/Archivos";
import { MemoriaROM } from "./components/Glosario/MemoriaROM";
import { MemoriaVirtual } from "./components/Glosario/MemoriaVirtual";
import { Magnitudes } from "./components/Glosario/Magnitudes";
import { EspacioDeDirecciones } from "./components/Glosario/EspacioDeDirecciones";

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
						<Route
							exact
							path="/"
							element={<PresentacionGeneral></PresentacionGeneral>}
						></Route>
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
						<Route path="resumen" element={<Resumen></Resumen>}></Route>
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
