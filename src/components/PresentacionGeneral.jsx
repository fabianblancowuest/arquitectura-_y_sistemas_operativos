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
import so from "../assets/img/sistema-operativo_2.png";
import so2 from "../assets/img/sistema-operativo_3.png";
import so3 from "../assets/img/operando.png";

import cpu from "../assets/img/torre-de-la-cpu.png";

export const PresentacionGeneral = () => {
	const [step, setStep] = useState(0); // Controla la sección
	const [subStep, setSubStep] = useState(0); // Controla el ítem de la lista
	const lastItemRef = useRef(null); // Referencia al último ítem

	// Datos de las secciones y listas
	const sections = [
		{
			// title: <h2>Resumen de la Materia</h2>,
			items: [
				<div className="encabezado">
					<h2>Resumen de la Materia</h2>
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
				<div className="conclusion">
					<h2>Procesos e hilos:</h2>
					<div className="texto-img">
						Fundamentales para la ejecución concurrente de tareas, optimizando
						el uso del procesador.
						<img className="tiny-img" src={cpu}></img>
					</div>
					<img className="img" src={procesoHilos}></img>
				</div>,
				<div className="conclusion">
					<h2>Administración de memoria:</h2> Esencial para garantizar un uso
					eficiente de los recursos y evitar sobrecargas.
					<img className="img" src={memoria} alt="" />
				</div>,
				<div className="conclusion">
					<h2>Rendimiento del sistema: </h2>
					Se estudiaron las métricas y magnitudes que evalúan la eficiencia
					operativa.
					<img className="img" src={rendimiento} alt="" />
				</div>,
				<div className="conclusion">
					<h2>Administración de archivos: </h2>
					Se exploraron métodos para organizar y gestionar el almacenamiento de
					datos.
					<img className="img" src={archivos} alt="" />
				</div>,
				<div className="conclusion">
					<h2>Entradas y salidas (E/S): </h2>
					Analizamos los mecanismos que facilitan la interacción con
					dispositivos externos.
					<img className="img" src={ES} alt="" />
				</div>,
				<div className="conclusion">
					<h2>Redes de datos: </h2>
					Se comprendió cómo se gestionan las comunicaciones entre sistemas.
					<img className="img" src={redes}></img>
				</div>,
				<div className="conclusion">
					<h2>Virtualización:</h2> Técnica que optimiza recursos al crear
					entornos aislados para ejecutar múltiples sistemas operativos.
					<img className="img" src={virt}></img>
				</div>,
				<div className="conclusion">
					{/* Este enfoque integral permitió entender cómo cada componente del
					sistema operativo trabaja en conjunto para garantizar un rendimiento
					eficiente y flexible, adaptándose a las necesidades actuales de la
					tecnología. */}
					<h2>Conclusión:</h2>
					<p>
						Este enfoque integral facilitó una comprensión profunda de cómo cada
						uno de los componentes del sistema operativo interactúa y colabora
						de manera sinérgica para asegurar un rendimiento óptimo, eficiente y
						flexible. De esta manera, se logra una adaptación continua y
						efectiva a las demandas y requerimientos que plantea la tecnología
						actual, permitiendo que el sistema responda de forma dinámica a los
						desafíos y cambios en el entorno tecnológico.
					</p>
					<div className="images-so">
						<img src={so}></img>,<img src={so2}></img>,<img src={so3}></img>,
					</div>
				</div>,
			],
		},
		// 	{
		// 		title: "Espacio de Direcciones",
		// 		items: [
		// 			"Noción de espacio de direcciones",
		// 			"Direcciones físicas vs. direcciones virtuales",
		// 			"Tamaño del espacio de direcciones",
		// 			"Espacio de direcciones por proceso",
		// 			"Ejemplo",
		// 			"Resumen",
		// 		],
		// 	},
		// 	{
		// 		title: "Administración de memoria",
		// 		items: ["Concepto"],
		// 	},
		// 	{
		// 		title: "Administración de memoria con mapa de bits",
		// 		items: ["¿Cómo funciona?", "Ventajas", "Desventajas"],
		// 	},
		// 	{
		// 		title: "Administración de memoria con listas ligadas",
		// 		items: ["¿Cómo funciona?", "Ventajas", "Desventajas"],
		// 	},
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
