import React from "react";
import "../Presentacion.css";
import "../../index.css";
import "./Glosario.css";

export const MemoriaVirtual = () => {
	return (
		<article className="container">
			<h2>¿Qué es la memoria virtual?</h2>
			<p className="paragraph">
				La memoria virtual es una técnica utilizada por los sistemas operativos
				para gestionar la memoria de manera eficiente. Permite que un sistema
				ejecute programas que requieren más memoria de la que físicamente tiene
				disponible (RAM), al utilizar una combinación de memoria física y
				espacio en disco.
			</p>
			<h3>Descripción</h3>
			<ul className="list">
				<li>
					<p className="paragraph">
						<strong>Extensión de la memoria física:</strong>
						La memoria virtual permite que el sistema use parte del disco duro
						como si fuera RAM. Esto se hace mediante la creación de un archivo
						de paginación o de intercambio, donde se almacenan temporalmente los
						datos que no caben en la memoria física.
					</p>
				</li>
				<li>
					<p className="paragraph">
						<strong>Aislamiento y protección:</strong>
						Cada proceso en ejecución tiene su propio espacio de direcciones
						virtuales, lo que le permite operar como si fuera el único programa
						que está utilizando la memoria. Esto aumenta la seguridad y la
						estabilidad del sistema, ya que un programa no puede acceder
						directamente a la memoria de otro.
					</p>
				</li>
				<li>
					<p>
						<strong>Paginación:</strong>
						El sistema operativo divide la memoria en bloques de tamaño fijo
						llamados páginas. Cuando un proceso necesita más memoria de la que
						hay disponible, el sistema mueve páginas inactivas de la RAM al
						disco duro (a un área llamada swap), y trae las páginas necesarias
						de vuelta a la RAM según sea necesario. En resumen, la memoria
						virtual permite ejecutar programas grandes en sistemas con menos
						memoria física, gestiona eficientemente el uso de la RAM y mejora la
						estabilidad del sistema al aislar los procesos entre sí.
					</p>
				</li>
			</ul>
		</article>
	);
};
