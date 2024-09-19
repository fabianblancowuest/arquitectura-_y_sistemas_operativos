import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/UTN_logo.jpg";

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
							<NavLink to={"/presentacion"}>
								<li class="nav-item">
									<a class="nav-link" aria-current="page" href="#">
										Presentación
									</a>
								</li>
							</NavLink>
							<NavLink to={"/"}>
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="#">
										Home
									</a>
								</li>
							</NavLink>
							<NavLink to={"/espacio-de-direcciones"}>
								<li class="nav-item">
									<a class="nav-link" aria-current="page" href="#">
										Espacio de Direcciones
									</a>
								</li>
							</NavLink>
							<NavLink to={"/administracion-de-memoria"}>
								<li class="nav-item">
									<a class="nav-link" aria-current="page" href="#">
										Administración de memoria
									</a>
								</li>
							</NavLink>
							{/* <NavLink to={"/glosario"}>
								<li>
									<a class="nav-link" aria-current="page" href="#">
										Glosario
									</a>
								</li>
							</NavLink> */}
							{/* <li class="nav-item">
								<a class="nav-link" href="#">
									Link
								</a>
							</li> */}
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
								</ul>
							</li>
							{/* <li class="nav-item">
								<a class="nav-link disabled" aria-disabled="true">
									Disabled
								</a>
							</li> */}

							<NavLink to={"/integrantes"}>
								<li class="nav-item">
									<a class="nav-link" aria-current="page" href="#">
										Integrantes
									</a>
								</li>
							</NavLink>
						</ul>
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
