import React from "react";
import "../Resumen.css";
import "../Glosario/Glosario.css";
import memoriaRom from "../../assets/img/memoria-rom.png";
import memoriaRom2 from "../../assets/img/rom.png";

export const MemoriaROM = () => {
	return (
		<>
			<div className="container">
				<h2 className="subtitle">La Memoria ROM</h2>
				<div className="glosario-img">
					<img src={memoriaRom} alt="Memoria Rom"></img>
					<img src={memoriaRom2} alt="Memoria Rom"></img>
				</div>
				<p className="paragraph">
					La memoria ROM (Read-Only Memory o Memoria de Solo Lectura) es un tipo
					de memoria no volátil que se utiliza para almacenar de forma
					permanente instrucciones y datos esenciales que no deben ser
					modificados. A diferencia de la memoria RAM, cuyo contenido se borra
					cuando se apaga el dispositivo, los datos en la ROM permanecen
					intactos incluso después de apagar el sistema.
				</p>
				<h2>Características principales de la memoria ROM:</h2>
				<ol className="list">
					<li>
						Solo lectura: Como su nombre lo indica, la ROM está diseñada para
						ser leída, no para ser modificada fácilmente. Los datos se escriben
						en la ROM una vez y no se pueden alterar en condiciones normales de
						uso.
					</li>
					<li>
						No volátil: A diferencia de la RAM, que es volátil y pierde su
						contenido cuando el dispositivo se apaga, la ROM retiene los datos
						almacenados incluso sin energía.
					</li>
					<li>
						Almacenamiento de firmware: La ROM se usa principalmente para
						almacenar firmware, que es el software básico que controla el
						hardware de un dispositivo. Un ejemplo común es el BIOS (Basic
						Input/Output System) en las computadoras, que se almacena en la ROM
						y se ejecuta al encender el equipo para iniciar el sistema.
					</li>
				</ol>
				<h2>Tipos de memoria ROM:</h2>
				<p className="paragraph">
					Existen varios tipos de ROM que varían en la capacidad de ser
					reescritos o actualizados:
				</p>
				<ol className="list">
					<li>
						ROM estándar: Es la versión más básica. Los datos se escriben
						durante el proceso de fabricación y no pueden ser modificados.
					</li>
					<li>
						PROM (Programmable ROM): Es un tipo de ROM que puede ser programada
						por el usuario una sola vez después de su fabricación. Una vez que
						se ha escrito en la PROM, los datos no pueden ser modificados.
					</li>
					<li>
						EPROM (Erasable Programmable ROM): Este tipo de ROM puede ser
						borrado y reprogramado mediante exposición a luz ultravioleta.
					</li>
					<li>
						EEPROM (Electrically Erasable Programmable ROM): Es un tipo de ROM
						que puede ser reprogramado eléctricamente, permitiendo modificar su
						contenido sin necesidad de quitar el chip del dispositivo. Se
						utiliza en muchos dispositivos modernos para almacenar
						configuraciones y firmware.
					</li>
					<li>
						Flash ROM: Es una variante de la EEPROM que permite borrar y
						reescribir bloques de datos de manera rápida. Es el tipo de memoria
						utilizada en memorias USB y discos SSD.
					</li>
				</ol>
				<h2>Función de la memoria ROM:</h2>
				<p className="paragraph">
					La ROM es esencial en muchos dispositivos porque contiene el firmware,
					un conjunto de instrucciones básicas que son necesarias para que el
					hardware funcione correctamente. Este firmware es crítico para el
					funcionamiento básico de dispositivos como computadoras, teléfonos,
					electrodomésticos, y sistemas embebidos.
				</p>
				<h2>Resumen de la memoria ROM:</h2>
				<ul className="list">
					<li>
						Función principal: Almacenar instrucciones esenciales que no deben
						cambiar, como el firmware o el código de arranque (bootloader).
					</li>
					<li>
						No volátil: Los datos permanecen guardados incluso si el dispositivo
						se apaga.
					</li>
					<li>
						Solo lectura: Generalmente, no se puede modificar después de su
						escritura inicial (aunque algunos tipos como la EEPROM y la memoria
						flash permiten reescritura limitada).
					</li>
					<li>
						Usos comunes: BIOS en computadoras, firmware de dispositivos,
						controladores de hardware.
					</li>
				</ul>
				<p className="paragraph">
					En resumen, la memoria ROM es una memoria crítica para el
					funcionamiento de cualquier dispositivo que necesite almacenar
					instrucciones básicas permanentes, como el código que controla el
					arranque del sistema o el firmware que gobierna el comportamiento de
					los dispositivos electrónicos.
				</p>
			</div>
		</>
	);
};
