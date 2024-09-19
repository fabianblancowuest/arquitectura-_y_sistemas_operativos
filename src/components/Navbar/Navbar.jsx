import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg bg-body-tertiary">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						Navbar
					</a>
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
									<a class="nav-link active" aria-current="page" href="#">
										Home
									</a>
								</li>
							</NavLink>
							<NavLink to={"/glosario"}>
								<li>
									<a class="nav-link" aria-current="page" href="#">
										Glosario
									</a>
								</li>
							</NavLink>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Link
								</a>
							</li>
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
									<NavLink to={"/referencias"}>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Referencias
											</a>
										</li>
									</NavLink>
								</ul>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled" aria-disabled="true">
									Disabled
								</a>
							</li>
						</ul>
						<form class="d-flex" role="search">
							<input
								class="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button class="btn btn-outline-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};
