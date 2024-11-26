<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-light">
			<div class="container-fluid">
				<router-link to="/" class="navbar-brand d-flex align-items-center">
					<div class="logo-container">
						<img
							src="../assets/images/MatdeLogo.png"
							alt="MATDE Logo"
							class="brand-logo"
						/>
						<span class="brand-text ms-2">MATDE</span>
						<!-- Se agregó la clase 'ms-2' para agregar un espacio -->
					</div>
				</router-link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<router-link to="/" class="nav-link">Inicio</router-link>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="segurosDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Seguros
							</a>
							<ul class="dropdown-menu" aria-labelledby="segurosDropdown">
								<li>
									<router-link to="/flotas" class="dropdown-item"
										>Flotas de Autos</router-link
									>
								</li>
								<li>
									<router-link to="/art" class="dropdown-item"
										>A.R.T.</router-link
									>
								</li>
								<li>
									<router-link to="/accidentes-personales" class="dropdown-item"
										>Accidentes Personales</router-link
									>
								</li>
								<li>
									<router-link to="/comercio" class="dropdown-item"
										>Integral de Comercio</router-link
									>
								</li>
								<li>
									<router-link to="/transport" class="dropdown-item"
										>Transporte de Mercancías</router-link
									>
								</li>
								<li>
									<router-link to="/caucion" class="dropdown-item"
										>Caución</router-link
									>
								</li>
								<li>
									<router-link to="/combinado-familiar" class="dropdown-item"
										>Combinado Familiar</router-link
									>
								</li>
								<li>
									<router-link to="/notebooks" class="dropdown-item"
										>Notebooks</router-link
									>
								</li>
								<li>
									<router-link to="/celulares" class="dropdown-item"
										>Celulares</router-link
									>
								</li>
								<li>
									<router-link to="/consorcio" class="dropdown-item"
										>Integral de Consorcio</router-link
									>
								</li>
								<li>
									<router-link to="/mala-praxis" class="dropdown-item"
										>Mala Praxis</router-link
									>
								</li>
								<li>
									<router-link to="/todo-riesgo-operativo" class="dropdown-item"
										>Todo Riesgo Operativo</router-link
									>
								</li>
								<li>
									<router-link to="/bicicletas" class="dropdown-item"
										>Bicicletas</router-link
									>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							<router-link to="/about" class="nav-link">Nosotros</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/contact" class="nav-link">Contacto</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			menuOpen: false,
		};
	},
};
</script>

<style scoped>
header {
	background-color: #003366;
	color: white;
	padding: 10px 0;
}

.logo-container {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.brand-logo {
	width: 50px; /* Ajuste del tamaño del logo para una apariencia más proporcionada */
	height: auto;
}

.brand-text {
	color: white;
	font-size: 1.2rem;
	font-weight: bold;
	margin-top: 5px;
	text-align: center;
}

.navbar-brand {
	color: white;
	font-size: 1.5rem;
	font-weight: bold;
}

.navbar-nav .nav-link {
	color: white !important;
	padding: 10px 15px;
}

.navbar-nav .dropdown-menu {
	background-color: #003366;
	border-radius: 5px; /* Mejora la apariencia del dropdown */
}

.dropdown-item {
	color: white;
	transition: background-color 0.3s ease;
}

.dropdown-item:hover {
	background-color: #004080;
}
</style>
