import React from "react";
import "./Glosario.css";
import "../../index.css";

import emulacion from "../../assets/images/emulacion.png";
import virtualizacion from "../../assets/images/maquina-virtual.png";
import emulador from "../../assets/images/emulador.png";

export const Emulacion = () => {
	return (
		<article>
			<h2>¿Qué es la emulación?</h2>
			<img src={emulador} alt="emulador"></img>
			<p>
				La emulación es el proceso mediante el cual un sistema de hardware o
				software simula el comportamiento de otro sistema, permitiendo que
				programas diseñados para un sistema específico se ejecuten en un sistema
				diferente. Esto se logra mediante un emulador, que actúa como un
				"traductor" entre el sistema original y el nuevo, replicando sus
				características y funcionalidad. Características clave de la emulación:
				Simulación completa: Un emulador no solo ejecuta programas, sino que
				también imita todo el entorno del sistema original, incluidos su CPU,
				memoria, puertos de entrada/salida y otros componentes.
			</p>
			<h3>Compatibilidad entre diferentes plataformas:</h3>
			<p>
				La emulación permite ejecutar software diseñado para una plataforma de
				hardware en otra plataforma distinta. Por ejemplo, ejecutar un juego de
				consola en una computadora, o un sistema operativo diseñado para un tipo
				de arquitectura de procesador en otro tipo de arquitectura.
				<ul>
					<li>
						Ejemplos comunes:
						<li>
							Emuladores de consolas de videojuegos: Permiten jugar juegos de
							consolas antiguas (como NES, SNES o PlayStation) en un PC.
						</li>
						<li>
							Emuladores de sistemas operativos: Permiten ejecutar un sistema
							operativo en una máquina virtual que simula el hardware del
							sistema original (como ejecutar Windows en Linux a través de un
							emulador).
						</li>
					</li>
				</ul>
			</p>
			<h3>Diferencia entre emulación y virtualización:</h3>
			<div className="glosario-img">
				<img src={emulacion} alt="Emulación"></img>
				<img src={virtualizacion} alt="Virtualización"></img>
			</div>
			<p>
				Emulación: Imitación completa de un sistema, a menudo con una pérdida de
				rendimiento debido a la simulación del hardware.
			</p>
			<p>
				Virtualización: Ejecución de un sistema operativo o aplicación en un
				entorno aislado, pero no simula completamente el hardware como lo hace
				la emulación. En resumen, la emulación es útil para preservar software
				antiguo, ejecutar programas en plataformas incompatibles o permitir la
				interoperabilidad entre diferentes sistemas.
			</p>
		</article>
	);
};
