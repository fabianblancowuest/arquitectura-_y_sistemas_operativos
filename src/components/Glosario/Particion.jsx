import React from "react";
import "./Glosario.css";

export const Particion = () => {
	return (
		<article>
			<h2>¿Qué es una partición?</h2>
			<p>
				Una partición en informática se refiere a la división de un espacio de
				almacenamiento, como un disco duro o una unidad de estado sólido, en
				secciones más pequeñas, conocidas como particiones. Cada partición se
				trata como una unidad independiente que puede tener su propio sistema de
				archivos y puede ser utilizada para almacenar datos o instalar sistemas
				operativos.
			</p>
			<h3>Las particiones pueden ser útiles para varios propósitos, como:</h3>
			<ul>
				<li>
					Organizar datos: Separar archivos de diferentes categorías o tipos de
					uso. Instalar múltiples sistemas operativos: Crear particiones
					separadas para diferentes sistemas operativos, permitiendo el arranque
					dual.
				</li>
				<li>
					Aislar datos: Mejorar la seguridad al mantener los archivos de sistema
					separados de los archivos personales. Las particiones se gestionan a
					través de una tabla de particiones, que define cómo se dividen y
					acceden a estas áreas en el disco.
				</li>
			</ul>
		</article>
	);
};
