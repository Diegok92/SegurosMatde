<template>
	<div class="mala-praxis-page container my-5">
		<h1 class="text-center mb-4">Seguro de Mala Praxis</h1>

		<section id="informacion" class="mb-5">
			<h2 class="mb-4">Información sobre Seguro de Mala Praxis</h2>
			<p>
				Este seguro está dirigido a profesionales de la salud, abogados,
				ingenieros, y otros que puedan enfrentar demandas por errores
				profesionales. Cubre las indemnizaciones que el asegurado deba pagar a
				terceros por daños causados por negligencia, errores u omisiones en el
				ejercicio de su profesión.
			</p>

			<div class="row">
				<!-- Tarjeta: Cobertura Básica -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-balance-scale"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Básica</h5>
							<ul>
								<li>Indemnizaciones por daños a terceros</li>
								<li>Gastos judiciales</li>
								<li>Honorarios legales</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta: Coberturas Adicionales -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-shield-alt"></i>
							</div>
							<h5 class="card-title text-center">Coberturas Adicionales</h5>
							<ul>
								<li>Cobertura para actos de negligencia grave</li>
								<li>Defensa ante tribunales de ética</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<h3>Ejemplo</h3>
			<p>
				Si un médico enfrenta una demanda por un error durante una cirugía que
				causó daño a un paciente, el seguro de mala praxis cubre los costos de
				defensa legal y las indemnizaciones si se declara responsabilidad.
			</p>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.mala-praxis-page {
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

.card-text,
ul {
	font-size: 1rem;
	color: #666;
	margin-bottom: 15px;
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
