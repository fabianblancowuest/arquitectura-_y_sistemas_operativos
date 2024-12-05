import React, { useState } from "react";
import "./Presentacion.css";
import procesoHilos from "../assets/img/procesos-e-hilos.png";

export const PresentacionGeneral = () => {
	const [step, setStep] = useState(0); // Controla la sección
	const [subStep, setSubStep] = useState(0); // Controla el ítem de la lista

	// Datos de las secciones y listas
	const sections = [
		{
			title: "Resumen de la Materia",
			items: [
				"Durante la cursada de Arquitectura y Sistemas Operativos, se abordaron temas clave que permiten comprender la gestión y funcionamiento de los sistemas operativos:",
				"Procesos e hilos: Fundamentales para la ejecución concurrente de tareas, optimizando el uso del procesador.",
				<img src={procesoHilos}></img>,
				"Administración de memoria: Esencial para garantizar un uso eficiente de los recursos y evitar sobrecargas.",
				"Rendimiento del sistema: Se estudiaron las métricas y magnitudes que evalúan la eficiencia operativa",
				"Administración de archivos: Se exploraron métodos para organizar y gestionar el almacenamiento de datos.",
				"Entradas y salidas (E/S): Analizamos los mecanismos que facilitan la interacción con dispositivos externos.",
				"Redes de datos: Se comprendió cómo se gestionan las comunicaciones entre sistemas.",
				"Virtualización: Técnica que optimiza recursos al crear entornos aislados para ejecutar múltiples sistemas operativos.",
				"Este enfoque integral permitió entender cómo cada componente del sistema operativo trabaja en conjunto para garantizar un rendimiento eficiente y flexible, adaptándose a las necesidades actuales de la tecnología.",
			],
		},
		{
			title: "Espacio de Direcciones",
			items: [
				"Noción de espacio de direcciones",
				"Direcciones físicas vs. direcciones virtuales",
				"Tamaño del espacio de direcciones",
				"Espacio de direcciones por proceso",
				"Ejemplo",
				"Resumen",
			],
		},
		{
			title: "Administración de memoria",
			items: ["Concepto"],
		},
		{
			title: "Administración de memoria con mapa de bits",
			items: ["¿Cómo funciona?", "Ventajas", "Desventajas"],
		},
		{
			title: "Administración de memoria con listas ligadas",
			items: ["¿Cómo funciona?", "Ventajas", "Desventajas"],
		},
	];

	// Avanza al siguiente ítem o sección
	const handleNext = () => {
		if (subStep < sections[step].items.length - 1) {
			setSubStep(subStep + 1); // Avanza dentro de los ítems
		} else {
			if (step < sections.length - 1) {
				setStep(step + 1); // Avanza a la siguiente sección
				setSubStep(0); // Reinicia los ítems para la nueva sección
			} else {
				setStep(0); // Si es la última sección, reinicia
				setSubStep(0);
			}
		}
	};

	return (
		// El evento onClick está en la sección
		<section
			onClick={handleNext}
			style={{ cursor: "pointer", height: "100vh" }}
		>
			<h3 className="subtitulo">{sections[step].title}</h3>
			<ul className="lista">
				{/* Muestra los ítems progresivamente según subStep */}
				{sections[step].items.slice(0, subStep + 1).map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</section>
	);
};
