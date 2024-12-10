import React from "react";
import "./Glosario.css";

export const Registros = () => {
	return (
		<article>
			<h2>¿Qué son los registros?</h2>
			<p>
				Los registros son pequeñas unidades de almacenamiento de datos dentro de
				la unidad central de procesamiento (CPU) de una computadora. Son una
				parte fundamental de la arquitectura del procesador, utilizados para
				almacenar temporalmente valores durante las operaciones de procesamiento
				de datos. Los registros tienen varias características clave: Velocidad:
				Son mucho más rápidos que la memoria RAM, ya que están directamente
				integrados en la CPU, lo que les permite acceder a los datos y
				operaciones de manera inmediata. Propósito: Los registros se usan para
				almacenar valores intermedios o de propósito específico durante la
				ejecución de instrucciones de un programa. Por ejemplo, se pueden usar
				para almacenar resultados de operaciones aritméticas, direcciones de
				memoria o datos temporales.
			</p>
			<h3>Tipos de registros:</h3>
			<p>
				<ul>
					<li>
						Registros de propósito general: Son utilizados por los programas
						para almacenar datos temporales. El número y el tipo de estos
						registros dependen de la arquitectura del procesador.
					</li>
					<li>
						Registros de propósito específico: Estos están dedicados a tareas
						específicas, como el registro de instrucciones, el contador de
						programa (PC), el registro de estado (flags), entre otros.
					</li>
					<li>
						Registros de control: Son utilizados por el procesador para
						gestionar el flujo de ejecución, como el contador de programa (PC),
						que indica la dirección de la próxima instrucción a ejecutar.
					</li>
				</ul>
			</p>
			<p>
				En resumen, los registros son esenciales para el funcionamiento
				eficiente de la CPU, permitiendo realizar operaciones rápidas y
				almacenar datos críticos durante la ejecución de instrucciones.
			</p>
		</article>
	);
};
