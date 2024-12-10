import React from "react";
import "./Glosario.css";

export const IP = () => {
	return (
		<article>
			<h2>IP</h2>
			<p>
				IP: (Protocolo de Internet, por sus siglas en inglés) es un conjunto de
				reglas o protocolos que gobiernan cómo los dispositivos de una red, como
				computadoras, routers y servidores, se identifican y se comunican entre
				sí a través de Internet o redes privadas. Cada dispositivo conectado a
				una red necesita una dirección IP única para poder intercambiar datos de
				forma correcta. Existen dos versiones principales de direcciones IP:
				IPv4 (Protocolo de Internet versión 4): Usa direcciones de 32 bits, que
				se dividen en cuatro bloques de 8 bits, representados como números
				decimales (por ejemplo, 192.168.1.1). La cantidad de direcciones
				posibles es limitada (aproximadamente 4 mil millones), lo que ha llevado
				a la adopción de IPv6. IPv6 (Protocolo de Internet versión 6): Usa
				direcciones de 128 bits, representadas en formato hexadecimal (por
				ejemplo, 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Permite una cantidad
				mucho mayor de direcciones posibles (aproximadamente 340 sextillones),
				lo que resuelve la escasez de direcciones en IPv4. Las direcciones IP se
				asignan de forma estática o dinámica: Estática: No cambia, se asigna de
				forma permanente a un dispositivo. Dinámica: Se asigna temporalmente a
				un dispositivo mediante un servidor DHCP (Protocolo de Configuración
				Dinámica de Host). En resumen, la dirección IP es esencial para que los
				dispositivos puedan localizarse y comunicarse correctamente dentro de
				una red, como la de Internet.
			</p>
		</article>
	);
};
