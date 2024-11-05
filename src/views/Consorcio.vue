<template>
	<div class="consorcio-page container my-5">
		<h1 class="text-center mb-4">Seguro Integral de Consorcio</h1>

		<section id="informacion" class="mb-5">
			<h2 class="mb-4">Protección Integral para Consorcios</h2>
			<p>
				Este seguro está diseñado para proteger los edificios bajo régimen de
				propiedad horizontal (consorcios). Cubre tanto los daños a las áreas
				comunes como la responsabilidad civil por accidentes ocurridos en el
				edificio.
			</p>

			<div class="row">
				<!-- Tarjeta: Cobertura Básica -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-fire"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Básica</h5>
							<p class="card-text">Incluye protección ante:</p>
							<ul>
								<li>Daños por incendio</li>
								<li>Robo en áreas comunes</li>
								<li>Responsabilidad civil frente a terceros</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta: Coberturas Adicionales -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-tools"></i>
							</div>
							<h5 class="card-title text-center">Coberturas Adicionales</h5>
							<p class="card-text">Esta cobertura incluye la básica más:</p>
							<ul>
								<li>Mantenimiento de ascensores</li>
								<li>Daños por agua</li>
								<li>Asistencia para emergencias</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<h3>Ejemplo de Cobertura</h3>
			<p>
				Si una tubería en el edificio se rompe y causa daños en varios
				departamentos, el seguro de consorcio cubre las reparaciones.
			</p>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.consorcio-page {
	padding-top: 20px;
}

.card {
	border: 1px solid #e0e0e0;
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	border-radius: 8px;
	background-color: #ffffff;
}

.card:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	background-color: #f9f9f9;
}

.icon-container {
	font-size: 2.5rem;
	color: #003366;
	margin-bottom: 15px;
}

.card-title {
	font-size: 1.3rem;
	font-weight: bold;
	color: #003366;
	text-align: center;
}

.card-text {
	font-size: 1rem;
	color: #666;
	margin-bottom: 15px;
}

ul {
	list-style-type: disc;
	margin-left: 20px;
}

h2 {
	font-size: 1.8rem;
	color: #003366;
}

h3 {
	margin-top: 20px;
	color: #003366;
}
</style>
