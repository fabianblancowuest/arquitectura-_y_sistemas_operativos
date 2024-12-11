import React from "react";
import "./Footer.css";
import logoUtn from "../../assets/images/logo-utn.png";

export const Footer = () => {
	return (
		<footer className="footer">
			<p className="footer-paragraph">
				Tecnicatura Universitaria en Programación - Arquitectura y Sistemas
				Operativos
			</p>
			<img src={logoUtn} alt="Logo UTN"></img>
		</footer>
	);
};
