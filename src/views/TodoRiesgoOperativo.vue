<template>
	<div class="todo-riesgo-page container my-5">
		<h1 class="text-center mb-4">Todo Riesgo Operativo</h1>

		<!-- Cotizador Web -->
		<section id="cotizador" class="cotizador-section mb-5">
			<h2 class="mb-4">Cotizador Web</h2>
			<form @submit.prevent="submitQuote" class="row g-3">
				<div class="col-md-6">
					<label for="nombre" class="form-label">Nombre</label>
					<input
						type="text"
						id="nombre"
						v-model="quoteData.nombre"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="razonSocial" class="form-label">Razón Social</label>
					<input
						type="text"
						id="razonSocial"
						v-model="quoteData.razonSocial"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="telefono" class="form-label">Teléfono</label>
					<input
						type="tel"
						id="telefono"
						v-model="quoteData.telefono"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="email" class="form-label">Email</label>
					<input
						type="email"
						id="email"
						v-model="quoteData.email"
						class="form-control"
						required
					/>
				</div>
				<div class="col-12">
					<button type="submit" class="btn btn-primary w-100">
						Solicitar Cotización
					</button>
				</div>
			</form>
		</section>

		<section id="informacion" class="mb-5">
			<h2 class="mb-4">
				Protección para Operaciones Comerciales e Industriales
			</h2>
			<p>
				El seguro de Todo Riesgo Operativo está diseñado para brindar una
				protección integral a las empresas, cubriendo daños materiales, pérdidas
				económicas y otros riesgos que puedan afectar las operaciones diarias.
			</p>

			<!-- Tarjetas de Cobertura -->
			<div class="row">
				<!-- Tarjeta: Cobertura Estándar -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-warehouse"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Estándar</h5>
							<p class="card-text">
								Esta cobertura incluye daños por incendio, robo y desastres
								naturales, así como responsabilidad civil para terceros.
							</p>
						</div>
					</div>
				</div>

				<!-- Tarjeta: Cobertura Completa -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-shield-alt"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Completa</h5>
							<p class="card-text">
								Además de la cobertura estándar, incluye protección contra
								pérdidas económicas por interrupción de actividades y daños a
								maquinaria.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			quoteData: {
				nombre: "",
				razonSocial: "",
				telefono: "",
				email: "",
			},
		};
	},
	methods: {
		submitQuote() {
			alert("Cotización solicitada");
		},
	},
};
</script>

<style scoped>
.todo-riesgo-page {
	padding-top: 20px;
}

.cotizador-section form {
	background-color: #f8f9fa;
	padding: 20px;
	border-radius: 10px;
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
}

h2 {
	font-size: 1.8rem;
	color: #003366;
}

ul {
	list-style-type: disc;
	margin-left: 20px;
}
</style>
