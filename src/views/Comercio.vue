<template>
	<div class="integral-trade-page container my-5">
		<h1 class="text-center mb-4">Seguro Integral de Comercio</h1>

		<section id="informacion" class="mb-5">
			<h2 class="mb-4">Protección Integral para tu Comercio</h2>
			<p>
				Este seguro está diseñado para proteger tanto la estructura física del
				comercio como su contenido, incluyendo inventario y maquinaria. Además,
				cubre la responsabilidad civil frente a terceros.
			</p>

			<!-- Tarjetas de Cobertura -->
			<div class="row">
				<!-- Tarjeta: Cobertura Básica -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-fire"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Básica</h5>
							<p class="card-text">
								Incluye protección contra incendio, robo, daños por agua,
								vandalismo y responsabilidad civil.
							</p>
						</div>
					</div>
				</div>

				<!-- Tarjeta: Cobertura Adicional -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-hand-holding-usd"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Adicional</h5>
							<p class="card-text">
								Incluye además una cobertura por pérdida de ingresos debido a la
								interrupción de la actividad comercial.
							</p>
						</div>
					</div>
				</div>
			</div>
			<h3>Ejemplo de Cobertura</h3>
			<p>
				Si tu tienda sufre daños por un incendio, el seguro cubrirá tanto la
				reparación de la estructura como el reemplazo del inventario dañado.
			</p>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.integral-trade-page {
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
	font-size: 1.4rem;
	font-weight: bold;
	color: #003366;
	text-align: center;
}

.section-title {
	font-size: 1.2rem;
	color: #003366;
	margin-top: 20px;
	text-align: center;
}

.card-text {
	font-size: 1rem;
	color: #666;
	margin-bottom: 15px;
	text-align: center;
}

h2 {
	font-size: 1.8rem;
	color: #003366;
}

h3 {
	margin-top: 20px;
	color: #003366;
}

ul {
	list-style-type: disc;
	margin-left: 20px;
}
</style>
