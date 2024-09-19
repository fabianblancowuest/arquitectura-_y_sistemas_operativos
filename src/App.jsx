import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Resumen } from "./components/Resumen";
import { Navbar } from "./components/Navbar/Navbar";
import { Glosario } from "./components/Glosario/Glosario";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MemoriaROM } from "./components/MemoriaROM/MemoriaROM";

function App() {
	return (
		<>
			<Router>
				<Navbar></Navbar>
				<h1>Arquitectura y sistemas operativos</h1>
				<div>
					<a href="https://vitejs.dev" target="_blank">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<Routes>
					<Route exact path="/" element={<Resumen></Resumen>}></Route>
					<Route path="glosario" element={<Glosario></Glosario>}></Route>
					<Route path="memoria-rom" element={<MemoriaROM></MemoriaROM>}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
