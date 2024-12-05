import React, { useState, useRef, useEffect } from "react";
import "./Presentacion.css";
import procesoHilos from "../assets/img/procesos-e-hilos.png";
import memoria from "../assets/img/administracion-memoria.png";
import rendimiento from "../assets/img/rendimiento-sistema.webp";
import archivos from "../assets/img/administrador-archivos.jpg";
import ES from "../assets/img/input-output.svg";
import redes from "../assets/img/redes.jpg";
import virt from "../assets/img/virtualizacion.webp";
import linux from "../assets/img/linux.png";
import android from "../assets/img/androide.png";
import windows from "../assets/img/windows.png";

export const PresentacionGeneral = () => {
	const [step, setStep] = useState(0); // Controla la sección
	const [subStep, setSubStep] = useState(0); // Controla el ítem de la lista
	const lastItemRef = useRef(null); // Referencia al último ítem

	// Datos de las secciones y listas
	const sections = [
		{
			title: <h2>Resumen de la Materia</h2>,
			items: [
				<div>
					<h4 style={{ textAlign: "center", lineHeight: 1.5 }}>
						Durante la cursada de Arquitectura y Sistemas Operativos, se
						abordaron temas clave que permiten comprender la gestión y
						funcionamiento de los sistemas operativos:
					</h4>
					<div className="so">
						<img src={windows}></img>
						<img src={linux}></img>
						<img src={android}></img>
					</div>
				</div>,
				<div>
					<strong>Procesos e hilos:</strong> Fundamentales para la ejecución
					concurrente de tareas, optimizando el uso del procesador.
					<img className="img" src={procesoHilos}></img>
				</div>,
				<div>
					<strong>Administración de memoria:</strong> Esencial para garantizar
					un uso eficiente de los recursos y evitar sobrecargas.
					<img className="img" src={memoria} alt="" />
				</div>,
				<div>
					<strong>Rendimiento del sistema: </strong>
					Se estudiaron las métricas y magnitudes que evalúan la eficiencia
					operativa.
					<img className="img" src={rendimiento} alt="" />
				</div>,
				<div>
					<strong>Administración de archivos: </strong>
					Se exploraron métodos para organizar y gestionar el almacenamiento de
					datos.
					<img className="img" src={archivos} alt="" />
				</div>,
				<div>
					<strong>Entradas y salidas (E/S): </strong>
					Analizamos los mecanismos que facilitan la interacción con
					dispositivos externos.
					<img className="img" src={ES} alt="" />
				</div>,
				<div>
					<strong>Redes de datos: </strong>
					Se comprendió cómo se gestionan las comunicaciones entre sistemas.
					<img className="img" src={redes}></img>
				</div>,
				<div>
					<strong>Virtualización:</strong> Técnica que optimiza recursos al
					crear entornos aislados para ejecutar múltiples sistemas operativos.
					<img className="img" src={virt}></img>
				</div>,
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

	useEffect(() => {
		if (lastItemRef.current) {
			lastItemRef.current.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	}, [subStep]); // Se ejecuta cada vez que subStep cambia

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
			style={{ cursor: "pointer", minHeight: "100vh" }}
		>
			<h3 className="subtitulo">{sections[step].title}</h3>
			<ul className="lista">
				{sections[step].items.slice(0, subStep + 1).map((item, index) => (
					<li
						key={index}
						ref={index === subStep ? lastItemRef : null}
						className="aparece"
					>
						{item}
					</li>
				))}
			</ul>
		</section>
	);
};
