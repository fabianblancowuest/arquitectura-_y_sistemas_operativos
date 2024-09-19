import React from "react";
import "../Resumen.css";

export const Firmware = () => {
	return (
		<section className="container">
			<h2>¿Qué es un firmware</h2>
			<p>
				El firmware es un tipo de software esencial que está embebido en el
				hardware de un dispositivo. Se encarga de controlar las funciones
				básicas del hardware y permite que el dispositivo funcione
				correctamente. A diferencia de otros tipos de software, el firmware es
				permanente o semipermanente y no suele cambiar a menos que sea
				actualizado por el fabricante.
			</p>
			<h2>Características clave del firmware:</h2>
			<ul className="list">
				<li>
					Intermediario entre hardware y software: Controla y gestiona el
					hardware de manera directa.
				</li>
				<li>
					Almacenado en memoria no volátil: Normalmente está en una memoria ROM,
					EPROM, o flash, lo que significa que no se borra cuando el dispositivo
					se apaga.
				</li>
				<li>
					Difícil de modificar por el usuario: Solo se puede actualizar mediante
					procesos específicos proporcionados por el fabricante.
				</li>
				<li>
					Ejemplos: El BIOS en computadoras, el firmware de impresoras,
					enrutadores, smartphones, electrodomésticos, y otros dispositivos
					electrónicos.
				</li>
				<p>
					En resumen, el firmware es un software especializado que se encuentra
					en el hardware y que asegura su correcto funcionamiento, gestionando
					las tareas básicas del dispositivo.
				</p>
			</ul>
		</section>
	);
};
