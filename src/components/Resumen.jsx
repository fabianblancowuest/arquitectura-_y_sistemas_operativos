import React from "react";
import "./Resumen.css";

export const Resumen = () => {
	return (
		<div className="container">
			<p>
				<h2 className="subtitle">
					1. Administración del intercambio memoria-disco
				</h2>
				<p className="paragraph">
					El intercambio memoria-disco (swap) es una técnica utilizada por los
					sistemas operativos para gestionar la memoria cuando la RAM física se
					llena. Consiste en mover temporalmente datos que no están en uso
					activo desde la memoria principal (RAM) al disco duro, permitiendo
					liberar espacio en la RAM para otros procesos. Esta estrategia ayuda a
					mantener el rendimiento del sistema evitando fallos por falta de
					memoria, aunque el acceso a disco es mucho más lento que a la memoria
					RAM.
				</p>
				<h2 className="subtitle">2. Proceso de intercambio memoria-disco</h2>
				<p className="paragraph">
					El proceso de intercambio se activa cuando la memoria RAM está casi
					saturada. El sistema operativo identifica las páginas de memoria menos
					utilizadas y las copia al espacio de intercambio (swap space) en el
					disco duro. Si estas páginas vuelven a ser necesarias, el sistema las
					recupera desde el disco de vuelta a la RAM, liberando otras páginas si
					es necesario. Esto genera un ciclo constante de transferencia entre la
					RAM y el disco, conocido como paginación o swapping. Etapas del
					proceso: Detección de falta de memoria: La RAM se llena o se acerca a
					su capacidad. Identificación de páginas inactivas: Se seleccionan las
					páginas de memoria menos utilizadas, típicamente basándose en un
					algoritmo de reemplazo de páginas como LRU (Least Recently Used).
					Transferencia de páginas al disco: Las páginas seleccionadas se
					escriben en el área de intercambio en el disco duro. Recuperación de
					páginas: Si el proceso necesita una página que fue intercambiada, esta
					se recupera de la partición de swap.
				</p>
				<h2 className="subtitle">
					3. Estrategias de administración y optimización
				</h2>
				<p className="paragraph">
					Para mejorar la administración del intercambio y optimizar el
					rendimiento, existen varias estrategias: Ajuste de tamaño del swap: El
					tamaño del área de intercambio es crítico. Un espacio de intercambio
					demasiado pequeño podría ocasionar que el sistema se quede sin
					memoria, mientras que uno muy grande podría generar ralentizaciones
					debido al uso excesivo del disco. Swapping basado en demanda: Se puede
					optimizar utilizando técnicas como el swapping basado en demanda,
					donde solo se intercambian páginas cuando es necesario, en lugar de
					realizar un intercambio preventivo. Almacenamiento en SSD: Colocar el
					área de intercambio en discos de estado sólido (SSD) puede mejorar
					significativamente la velocidad de acceso, ya que los SSD son mucho
					más rápidos que los discos duros tradicionales (HDD). Uso de
					algoritmos eficientes de reemplazo de páginas: Algoritmos como LRU o
					FIFO ayudan a optimizar qué páginas se intercambian, reduciendo la
					cantidad de accesos al disco. Compresión de memoria: En algunos
					sistemas modernos, antes de mover datos al disco, se comprime la
					información en la RAM, lo que puede reducir la frecuencia de swapping.
					Evitar swapping excesivo: Limitar la cantidad de procesos que consumen
					mucha memoria o añadir más RAM puede ayudar a reducir la necesidad de
					intercambio constante, mejorando el rendimiento general. Este resumen
					cubre los conceptos clave de la administración del intercambio
					memoria-disco, el proceso de swapping y las estrategias que se pueden
					implementar para optimizar el rendimiento del sistema.
				</p>
			</p>
		</div>
	);
};
