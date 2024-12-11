import React from "react";
import "./Glosario.css";
import mram from "../../assets/images/ram.png";
import mcache from "../../assets/images/cache.png";

export const MemoriaCacheRAM = () => {
	return (
		<article className="container">
			<h2 className="subtitle">La memoria caché y la memoria RAM</h2>
			<div className="glosario-img">
				<img src={mcache} alt="memoria-caché"></img>
				<img src={mram} alt="memoria ram"></img>
			</div>
			<p className="paragraph">
				La memoria caché y la RAM (memoria de acceso aleatorio) son dos tipos de
				memoria que se utilizan para almacenar datos temporalmente, pero tienen
				diferencias clave en su propósito, ubicación, velocidad y tamaño.
			</p>
			<p className="paragraph">
				<strong>1. Propósito:</strong>
				Memoria caché: Está diseñada para almacenar datos e instrucciones que el
				procesador necesita de forma inmediata o frecuente, con el objetivo de
				reducir el tiempo de acceso a los datos. Actúa como un intermediario
				entre la CPU y la RAM. Memoria RAM: Es la memoria principal donde se
				almacenan temporalmente los datos y programas que el sistema operativo y
				las aplicaciones en uso necesitan. Es más grande que la caché y almacena
				una mayor cantidad de información.
			</p>
			<p className="paragraph">
				<strong>2. Ubicación:</strong>Memoria caché: Está integrada directamente
				en el procesador (CPU) o en el chipset cercano a la CPU. Debido a esta
				cercanía, el acceso es extremadamente rápido. Memoria RAM: Es un
				componente separado ubicado en módulos de memoria fuera del procesador,
				pero conectada a él a través de un bus de datos.
			</p>
			<p className="paragraph">
				<strong>3. Velocidad:</strong>
				Memoria caché: Es mucho más rápida que la RAM porque está ubicada dentro
				del procesador y utiliza una tecnología más rápida. Su acceso es casi
				inmediato, lo que permite que el procesador no se detenga mientras
				espera datos. Memoria RAM: Aunque es más rápida que otras formas de
				almacenamiento, como los discos duros o SSD, es significativamente más
				lenta que la memoria caché.
			</p>
			<p className="paragraph">
				4. Tamaño: Memoria caché: Es de tamaño pequeño, normalmente unos pocos
				MB (megabytes) o incluso KB (kilobytes) en algunos niveles de caché (L1,
				L2). Memoria RAM: Es mucho más grande, generalmente en el rango de
				varios GB (gigabytes). Almacena la mayoría de los datos y programas en
				uso por el sistema.
			</p>
			<p className="paragraph">
				5. Costo: Memoria caché: Debido a su alta velocidad y tecnología más
				avanzada, es más costosa de fabricar. Por eso su tamaño es limitado.
				Memoria RAM: Aunque es más cara que el almacenamiento de disco, es mucho
				más económica que la caché y por eso se utiliza en mayores cantidades.
			</p>
			<p className="paragraph">
				6. Función en el flujo de datos: Memoria caché: Almacena los datos que
				la CPU va a necesitar en el corto plazo, intentando anticiparse a las
				operaciones de lectura/escritura. Funciona bajo algoritmos de predicción
				de acceso. Memoria RAM: Almacena todos los datos de las aplicaciones
				activas en el sistema, funcionando como el banco de trabajo donde el
				sistema operativo y los programas ejecutan sus procesos. Resumen de las
				diferencias: Característica Memoria caché Memoria RAM Ubicación Dentro
				del procesador En módulos externos Velocidad Mucho más rápida Más lenta
				que la caché Tamaño Pequeña (KB a MB) Grande (GB) Costo Más costosa
				Menos costosa Propósito Almacenar datos frecuentes para la CPU Almacenar
				datos y programas en uso Función Intermediaria entre CPU y RAM Memoria
				principal para el sistema En resumen, la memoria caché es una memoria
				pequeña y ultrarrápida ubicada en el procesador que acelera el acceso a
				los datos más frecuentes, mientras que la RAM es más grande y almacena
				la información de las aplicaciones activas, pero es más lenta en
				comparación con la caché. Ambos tipos de memoria son esenciales para el
				rendimiento del sistema, trabajando en conjunto para que el procesador
				acceda a los datos de manera eficiente.
			</p>
			<h2 className="title">Resumen de las diferencias</h2>
			{/* <Caption>Resumen de las diferencias</Caption> */}
			<table border={1}>
				<thead>
					<th>Característica</th>
					<th>Memoria Caché</th>
					<th>Memoria RAM</th>
				</thead>
				<tr>
					<td>Ubicación</td>
					<td>Dentro del procesador</td>
					<td>En módulo externos</td>
				</tr>
				<tr>
					<td>Velocidad</td>
					<td>Mucho más rapida</td>
					<td>Más lenta que la caché</td>
				</tr>
				<tr>
					<td>Tamaño</td>
					<td>Pequeña (KB a MB)</td>
					<td>Grande (GB)</td>
				</tr>{" "}
				<tr>
					<td>Costo</td>
					<td>Más costosa</td>
					<td>Menos costosa</td>
				</tr>
				<tr>
					<td>Propósito</td>
					<td>Almacenar datos frecuentes para la CPU</td>
					<td>Almacenar datos y programas en uso</td>
				</tr>
				<tr>
					<td>Función</td>
					<td>Intermediaria entre CPU y RAM</td>
					<td>Memoria principal para el sistema</td>
				</tr>
			</table>
		</article>
	);
};
