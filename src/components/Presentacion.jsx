import React, { useState } from "react";
import "./Presentacion.css";

export const Presentacion = () => {
	const [step, setStep] = useState(0); // Controla la sección
	const [subStep, setSubStep] = useState(0); // Controla el ítem de la lista

	// Datos de las secciones y listas
	const sections = [
		{
			title: "Resumen General",
			items: [
				"Administración del intercambio memoria-disco",
				"Proceso de intercambio memoria-disco",
				"Estrategias de administración y optimización",
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
