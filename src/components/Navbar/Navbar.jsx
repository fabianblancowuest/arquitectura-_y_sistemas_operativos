import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/UTN_logo.jpg";
import { descargarPDF } from "./descargarPDF";

export const Navbar = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg bg-body-tertiary">
				<div class="container-fluid">
					{/* <a class="navbar-brand" href="#">
						Navbar
					</a> */}
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<NavLink to={"/"}>
								<li class="nav-item">
									<a class="nav-link" aria-current="page" href="#">
										Resumen
									</a>
								</li>
							</NavLink>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Glosario
								</a>
								<ul class="dropdown-menu">
									<NavLink to={"/memoria-rom"}>
										<li>
											<a class="dropdown-item" href="#">
												Memoria ROM
											</a>
										</li>
									</NavLink>
									<NavLink to={"/firmware"}>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Firmware
											</a>
										</li>
									</NavLink>
									<NavLink to={"/memoria-cache-ram"}>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Memoria RAM Y Caché
											</a>
										</li>
									</NavLink>
									<NavLink to={"/memoria-virtual"}>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Memoria Virtual
											</a>
										</li>
									</NavLink>
									<NavLink to={"/magnitudes"}>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Magnitudes
											</a>
										</li>
									</NavLink>
									<NavLink to={"/ip"}>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												IP
											</a>
										</li>
									</NavLink>
									<NavLink to={"/emulacion"}>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Emulación
											</a>
										</li>
									</NavLink>
									<NavLink to={"/particion"}>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Partición
											</a>
										</li>
									</NavLink>
									<NavLink to={"/registros"}>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Registros
											</a>
										</li>
									</NavLink>
									<NavLink to={"/archivos"}>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Archivos
											</a>
										</li>
									</NavLink>
									<NavLink to={"/espacio-de-direcciones"}>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Espacio de direcciones
											</a>
										</li>
									</NavLink>
								</ul>
							</li>

							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Presentaciones
								</a>
								<ul class="dropdown-menu">
									<NavLink to={"intercambio-memoria-disco"}>
										<li>
											<a class="dropdown-item" href="#">
												Intercambio Memoria Disco
											</a>
										</li>
									</NavLink>
								</ul>
							</li>
							{/* Trabajos Prácticos */}
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Guías Prácticas
								</a>
								<ul class="dropdown-menu">
									<li>
										<a
											class="dropdown-item"
											href="/src/assets/pdfs/GP1.pdf"
											download="GP1.pdf"
											// onClick={() =>
											// 	descargarPDF("../../assets/pdfs/GP1.pdf", "GP1.pdf")
											// }
										>
											GUÍA PRACTICA 1
										</a>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<a
											class="dropdown-item"
											href="#"
											onClick={() =>
												descargarPDF("/src/assets/pdfs/GP2.pdf", "GP2.pdf")
											}
										>
											GUÍA PRÁCTICA 2
										</a>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<a
											class="dropdown-item"
											href="#"
											onClick={() =>
												descargarPDF("/src/assets/pdfs/GP3.pdf", "GP3.pdf")
											}
										>
											GUÍA PRÁCTICA 3
										</a>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<a
											class="dropdown-item"
											href="#"
											onClick={() =>
												descargarPDF("/src/assets/pdfs/GP4.pdf", "GP4.pdf")
											}
										>
											GUÍA PRÁCTICA 4
										</a>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<a
											class="dropdown-item"
											href="#"
											onClick={() =>
												descargarPDF("/src/assets/pdfs/GP5.pdf", "GP5.pdf")
											}
										>
											GUÍA PRÁCTICA 5
										</a>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<a
											class="dropdown-item"
											href="#"
											onClick={() =>
												descargarPDF(
													"/src/assets/pdfs/GP7-Parte1.pdf",
													"GP7-Parte1.pdf",
												)
											}
										>
											GUÍA PRÁCTICA 7 - Parte 1
										</a>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<a
											class="dropdown-item"
											href="#"
											onClick={() =>
												descargarPDF(
													"/src/assets/pdfs/GP7-Parte2.pdf",
													"GP7-Parte2.pdf",
												)
											}
										>
											GUÍA PRÁCTICA 7 - Parte 2
										</a>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<a
											class="dropdown-item"
											href="#"
											onClick={() =>
												descargarPDF(
													"/src/assets/pdfs/GP7-Parte3.pdf",
													"GP7-Parte3.pdf",
												)
											}
										>
											GUÍA PRÁCTICA 7 - Parte 3
										</a>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<a
											class="dropdown-item"
											href="#"
											onClick={() =>
												descargarPDF("/src/assets/pdfs/GP8.pdf", "GP8.pdf")
											}
										>
											GUÍA PRÁCTICA 8
										</a>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<a
											class="dropdown-item"
											href="#"
											onClick={() =>
												descargarPDF("/src/assets/pdfs/GP9.pdf", "GP9.pdf")
											}
										>
											GUÍA PRÁCTICA 9
										</a>
									</li>
								</ul>
							</li>
							{/* <li class="nav-item">
								<a class="nav-link disabled" aria-disabled="true">
									Disabled
								</a>
							</li> */}

							<li class="nav-item">
								<a
									class="nav-link"
									aria-current="page"
									href="https://drive.google.com/drive/folders/1rqzX3FVe4jP0CB-OF1qYixeB7o56AsW-?usp=drive_link"
									target="_blank"
								>
									Guías Prácticas en GD
								</a>
							</li>

							<NavLink to={"/integrantes"}>
								<li class="nav-item">
									<a class="nav-link" aria-current="page" href="#">
										Integrantes
									</a>
								</li>
							</NavLink>
						</ul>
						{/* SearchBar */}
						{/* <form class="d-flex" role="search">
							<input
								class="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button class="btn btn-outline-success" type="submit">
								Search
							</button>
						</form> */}
						<img className="logo-utn" src={logo} alt="Logo UTN" />
					</div>
				</div>
			</nav>
		</div>
	);
};
