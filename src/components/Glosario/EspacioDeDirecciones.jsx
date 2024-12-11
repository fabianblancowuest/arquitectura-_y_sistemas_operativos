import React from "react";
import "../../index.css";
import "./Glosario.css";

export const EspacioDeDirecciones = () => {
	return (
		<article>
			<h2 className="subtitle">La Noción de Un Espacio de Direcciones</h2>
			<p className="paragraph">
				La noción de un espacio de direcciones se refiere al conjunto de todas
				las direcciones que puede utilizar un sistema para acceder a la memoria
				o a los recursos disponibles. Es un concepto clave en la administración
				de la memoria de una computadora, ya que define cómo se organizan y se
				identifican las posiciones de memoria a las que el procesador puede
				acceder.
			</p>
			<h3 className="subtitle">Resumen de los puntos clave</h3>
			<ol className="list">
				<li>
					Espacio de direcciones: Es el rango de direcciones que el procesador o
					un programa puede usar para identificar una ubicación en la memoria.
					Cada dirección dentro de este espacio apunta a un dato o instrucción
					almacenada en la memoria.
				</li>
				<li>
					Direcciones físicas vs. direcciones virtuales:
					<ul>
						<li>
							Direcciones físicas: Son las ubicaciones reales en la memoria RAM.
						</li>
						<li>
							Direcciones virtuales: Son las que el sistema operativo
							proporciona a los programas. Estas se traducen a direcciones
							físicas mediante una técnica llamada paginación o segmentación.
						</li>
					</ul>
				</li>
				<li>
					Tamaño del espacio de direcciones: Depende del ancho del bus de
					direcciones de la CPU. Por ejemplo, en una arquitectura de 32 bits, el
					espacio de direcciones es de 2 32 2 32 direcciones posibles, lo que
					permite acceder a 4 GB de memoria.
				</li>
				<li>
					Espacio de direcciones por proceso: Cada programa o proceso tiene su
					propio espacio de direcciones virtuales, lo que le permite trabajar
					como si tuviera toda la memoria disponible para sí mismo, mientras el
					sistema operativo se encarga de la traducción entre direcciones
					virtuales y físicas.
				</li>
				<h3 className="subtitle">Ejemplo:</h3>
				<p className="paragraph">
					Si un programa solicita un dato en una dirección virtual, el sistema
					operativo traduce esa dirección a una dirección física en la RAM, lo
					que permite que el programa acceda a la memoria sin saber dónde está
					físicamente almacenada la información.
				</p>
				<h3 className="subititle">Resumen</h3>
				<p className="paragraph">
					Un espacio de direcciones es el conjunto de todas las ubicaciones de
					memoria que un sistema puede usar para acceder a datos o
					instrucciones, y puede ser físico o virtual. Es esencial para la
					organización y administración de la memoria en los sistemas
					operativos.
				</p>
			</ol>
		</article>
	);
};
