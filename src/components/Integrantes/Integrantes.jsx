import React from "react";
import "./Intregrantes.css";

export const Integrantes = () => {
	return (
		<section className="container-integrantes">
			<h2>Integrantes del grupo 6:</h2>
			<ul className="list integrantes">
				<a
					href="https://fabianblancowuest.netlify.app/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<li>Fabián Blanco Wuest</li>
				</a>
				<li>Jose Derfler</li>
				<li>Lía Barcos</li>
				<li>Tomás Centurión</li>
				<li>Ana Rahn</li>
				<li>Anahí Portillo</li>
				<li>Yasmín Rojas</li>
			</ul>
		</section>
	);
};
