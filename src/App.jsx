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

function App() {
	return (
		<>
			<Router>
				<Navbar></Navbar>
				<h1 className="title">Arquitectura y sistemas operativos</h1>
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
					</Routes>
				</main>
			</Router>
		</>
	);
}

export default App;
