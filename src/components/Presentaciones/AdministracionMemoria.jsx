import React from "react";
import "./Presentaciones.css";
import "../../index.css";
import administracionMemoria from "../../assets/mapa_de_bits_listas_ligadas.png";
import mapaBits from "../../assets/images/mapa-de-bits.png";
import mapaBits2 from "../../assets/images/mapa-de-bits2.png";
import lista from "../../assets/images/lista.png";
import lista2 from "../../assets/images/lista2.png";

export const AdministracionMemoria = () => {
	return (
		<section className="container">
			<h2 className="subtitle">
				La administración de memoria con mapa de bits y la administración de
				memoria con listas ligadas
			</h2>
			<div className="memoria-disco">
				<img src={mapaBits}></img>
				<img src={mapaBits2}></img>
			</div>
			<p>
				La administración de memoria con mapa de bits y la administración de
				memoria con listas ligadas son dos enfoques utilizados por los sistemas
				operativos para gestionar la asignación y liberación de la memoria. A
				continuación te presento una comparación en resumen:
			</p>
			<h2 className="subtitle">
				1. Administración de Memoria con Mapa de Bits:
			</h2>
			<ul className="list">
				<li>
					Cómo funciona:
					<ul>
						<li>
							Se utiliza un mapa de bits para representar el estado de la
							memoria, donde cada bit corresponde a una unidad de memoria
							(generalmente una palabra o bloque).
						</li>
						<li>
							Si un bit está en 0, significa que esa unidad está libre, y si
							está en 1, significa que está ocupada.
						</li>
					</ul>
				</li>
				<li>
					Ventajas:
					<ul>
						<li>
							Simplicidad: Es fácil de implementar y de recorrer para encontrar
							bloques libres o ocupados.
						</li>
						<li>
							Uniformidad: El mapa de bits tiene un tamaño fijo y proporciona
							una visión uniforme de la memoria.
						</li>
					</ul>
				</li>
				<li>
					Desventajas:
					<ul>
						<li>
							Búsqueda lenta: Para encontrar bloques de memoria grandes o
							contiguos, puede ser necesario recorrer muchos bits, lo que
							consume tiempo.
						</li>
						<li>
							Fragmentación interna: Al asignar bloques pequeños, puede quedar
							memoria desaprovechada dentro de los bloques asignados.
						</li>
					</ul>
				</li>
			</ul>
			<h2 className="subtitle">
				2. Administración de Memoria con Listas Ligadas:
			</h2>
			<div className="memoria-disco">
				<img src={lista} alt="Lista Ligada"></img>
				<img src={lista2} alt="Lista"></img>
			</div>
			<li>
				Como funciona:
				<ul className="list">
					<li>
						La memoria disponible se organiza en bloques de tamaño variable,
						cada uno apuntando al siguiente bloque libre en una lista enlazada.
					</li>
					<li>
						Cada entrada en la lista contiene el tamaño del bloque y la
						dirección del siguiente bloque libre.
					</li>
				</ul>
			</li>
			<li>
				Ventajas:
				<ul>
					<li>
						Búsqueda más eficiente: Al recorrer la lista, es más fácil encontrar
						bloques grandes y ajustar la memoria según el tamaño solicitado (por
						ejemplo, con estrategias como "primer ajuste" o "mejor ajuste").
					</li>
					<li>
						Flexibilidad: Se pueden gestionar bloques de tamaño variable, lo que
						reduce la fragmentación interna.
					</li>
				</ul>
			</li>
			<li>
				Desventajas:
				<ul>
					<li>
						Fragmentación externa: Con el tiempo, pueden aparecer muchos bloques
						pequeños dispersos, dificultando la asignación de bloques grandes.
					</li>
					<li>
						Sobrecarga de administración: Cada bloque necesita almacenar
						información adicional, como el tamaño y la dirección del siguiente
						bloque, lo que puede incrementar la sobrecarga de memoria.
					</li>
					<li>
						Complejidad: Requiere más lógica para manejar las listas y los
						bloques.
					</li>
				</ul>
			</li>
			<img src={administracionMemoria} alt="Administración de memoria"></img>
			<h3>Resumen:</h3>
			<ul>
				<li>
					Mapa de Bits: Es simple y utiliza pocos recursos, pero es menos
					eficiente en la búsqueda y puede provocar fragmentación interna.
				</li>
				<li>
					Listas Ligadas: Son más flexibles y permiten bloques de tamaño
					variable, lo que mejora la eficiencia en ciertos casos, pero tienen
					más sobrecarga de administración y son propensas a la fragmentación
					externa.
				</li>
			</ul>
			<p>
				Ambos enfoques tienen sus ventajas y desventajas, y la elección depende
				de las necesidades específicas del sistema y cómo se utiliza la memoria.
			</p>
		</section>
	);
};
