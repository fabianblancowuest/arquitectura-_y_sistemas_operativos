import React from "react";
import "./Resumen.css";
import "../index.css";

export const Magnitudes = () => {
	return (
		<div className="container">
			<p className="paragraph">
				En arquitectura de computadoras y sistemas operativos, las magnitudes
				son unidades o medidas que permiten cuantificar y describir las
				capacidades, el rendimiento y las características de un sistema. Estas
				magnitudes se aplican a distintos componentes del hardware y a aspectos
				del funcionamiento del software, incluyendo el procesamiento, el
				almacenamiento, la transferencia de datos, y el rendimiento general. A
				continuación, se describen algunas de las magnitudes más importantes en
				estos contextos:
			</p>
			<p className="paragraph">
				1. Capacidad de Almacenamiento Se refiere a la cantidad de datos que un
				dispositivo de almacenamiento puede retener. Las unidades de medida
				incluyen: Bit (b): Unidad básica de información (0 o 1). Byte (B): 8
				bits. Es la unidad básica utilizada para medir la memoria o
				almacenamiento. Kilobyte (KB): 1,024 bytes. Megabyte (MB): 1,024
				kilobytes. Gigabyte (GB): 1,024 megabytes. Terabyte (TB): 1,024
				gigabytes. Estas unidades se aplican tanto a la memoria principal (RAM)
				como a los dispositivos de almacenamiento secundario como discos duros
				(HDD), discos de estado sólido (SSD) y otros medios de almacenamiento.
			</p>
			<p className="paragraph">
				2. Ancho de Banda El ancho de banda mide la cantidad de datos que pueden
				transferirse entre diferentes componentes de un sistema, como entre el
				procesador y la memoria, o entre la computadora y un dispositivo de red.
				Se mide en términos de: Bits por segundo (bps): Velocidad a la que se
				transfieren los datos. Megabits por segundo (Mbps): Un millón de bits
				por segundo. Gigabits por segundo (Gbps): Mil millones de bits por
				segundo. Es crucial tanto para la comunicación de datos interna en la
				arquitectura del sistema, como para la transferencia de datos en
				redes.2. Ancho de Banda El ancho de banda mide la cantidad de datos que
				pueden transferirse entre diferentes componentes de un sistema, como
				entre el procesador y la memoria, o entre la computadora y un
				dispositivo de red. Se mide en términos de: Bits por segundo (bps):
				Velocidad a la que se transfieren los datos. Megabits por segundo
				(Mbps): Un millón de bits por segundo. Gigabits por segundo (Gbps): Mil
				millones de bits por segundo. Es crucial tanto para la comunicación de
				datos interna en la arquitectura del sistema, como para la transferencia
				de datos en redes.
			</p>
			<p className="paragraph">
				3. Velocidad de Procesamiento La velocidad de procesamiento se refiere a
				la capacidad del CPU para ejecutar instrucciones y realizar operaciones.
				Algunas magnitudes importantes incluyen: Ciclos por segundo (Hertz, Hz):
				El número de ciclos de reloj que el procesador puede ejecutar en un
				segundo. Kilohertz (KHz): 1,000 Hz. Megahertz (MHz): 1,000,000 Hz.
				Gigahertz (GHz): 1,000,000,000 Hz. Por ejemplo, un procesador de 3 GHz
				puede ejecutar 3,000 millones de ciclos de reloj por segundo.
			</p>
			<p className="paragraph">
				4. Latencia La latencia mide el tiempo que tarda una operación en
				completarse desde que se inicia. Esto se aplica a diferentes áreas, como
				la latencia de memoria (tiempo de acceso a la RAM) o la latencia de
				disco (tiempo que tarda el sistema en acceder a datos en un disco duro o
				SSD). Se mide en: Nanosegundos (ns): Un billonésimo de segundo.
				Milisegundos (ms): Un milisegundo es 1/1,000 de segundo. En el caso de
				los sistemas operativos, la latencia también se refiere al tiempo que
				tardan en responder a una solicitud o evento, como una interrupción.
			</p>
			<p className="paragraph">
				5. Tasa de Transferencia de Datos Se refiere a la cantidad de datos que
				pueden ser transferidos desde o hacia un dispositivo o sistema. Se mide
				en términos de: Bytes por segundo (Bps): Número de bytes transferidos en
				un segundo. Megabytes por segundo (MBps): Un millón de bytes por
				segundo. Gigabytes por segundo (GBps): Mil millones de bytes por
				segundo. Esta magnitud es relevante para la velocidad de lectura y
				escritura de discos o intercambio de datos en buses.
			</p>
			{/* 6. Rendimiento de Procesadores (CPI) El CPI (Cycles Per Instruction) es
			una medida importante en la arquitectura de procesadores, que indica el
			número de ciclos de reloj que el procesador necesita para ejecutar una
			instrucción. Cuanto menor sea el CPI, mayor será el rendimiento del
			procesador. CPI promedio: Mide el rendimiento general de la CPU,
			considerando el tiempo necesario para ejecutar una variedad de
			instrucciones. 7. Consumo Energético En la arquitectura de sistemas, es
			importante medir cuánta energía consume un dispositivo, especialmente con
			los sistemas modernos, donde la eficiencia energética es clave. Se mide
			en: Watts (W): Unidad de potencia. Indica cuánta energía consume un
			sistema. Vatios-hora (Wh): Mide el consumo energético a lo largo del
			tiempo. Esto es importante tanto en procesadores como en otros componentes
			como discos duros, tarjetas gráficas, y especialmente en dispositivos
			móviles. 8. Tamaño de Palabra El tamaño de palabra se refiere al número de
			bits que un procesador puede manejar o procesar simultáneamente. Se mide
			en: 32 bits: Los procesadores de 32 bits pueden manejar operaciones de 32
			bits. 64 bits: Los procesadores de 64 bits pueden manejar operaciones de
			64 bits. Este concepto está relacionado con la arquitectura del procesador
			y la cantidad de datos que puede procesar en una sola instrucción. 9.
			Tiempos de Conmutación de Contexto En sistemas operativos, el tiempo de
			conmutación de contexto mide el tiempo que tarda el procesador en cambiar
			de una tarea o proceso a otro. Se mide en: Milisegundos (ms) o
			microsegundos (μs). Es una magnitud crítica en la gestión de procesos y
			multitarea. 10. Número de Nucleos El número de núcleos (cores) en un
			procesador indica la capacidad de ejecutar múltiples tareas de manera
			simultánea. Esto afecta el rendimiento del sistema y su capacidad de
			manejar paralelismo. Resumen Las magnitudes en arquitectura de
			computadoras y sistemas operativos permiten describir y cuantificar
			diversos aspectos del rendimiento, capacidad y eficiencia de los sistemas.
			Estas magnitudes abarcan desde el almacenamiento y la velocidad de
			procesamiento, hasta el consumo energético y la capacidad de multitarea,
			permitiendo optimizar tanto el diseño del hardware como la administración
			de los recursos en el software. */}
		</div>
	);
};
