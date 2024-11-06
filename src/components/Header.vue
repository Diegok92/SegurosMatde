<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark">
			<div class="container-fluid">
				<router-link to="/" class="navbar-brand">MATDE</router-link>
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
}

.dropdown-item {
	color: white;
}

.dropdown-item:hover {
	background-color: #004080;
}
</style>
