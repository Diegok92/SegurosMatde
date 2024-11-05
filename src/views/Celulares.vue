<template>
	<div class="celulares-page container my-5">
		<h1 class="text-center mb-4">Seguro de Celulares</h1>

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
					<label for="email" class="form-label">Email</label>
					<input
						type="email"
						id="email"
						v-model="quoteData.email"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="marca" class="form-label">Marca</label>
					<select
						id="marca"
						v-model="quoteData.marca"
						class="form-control"
						required
					>
						<option value="" disabled>Seleccione una opción</option>
						<option value="Apple">Apple</option>
						<option value="Huawei">Huawei</option>
						<option value="LG">LG</option>
						<option value="Motorola">Motorola</option>
						<option value="Nokia">Nokia</option>
						<option value="OnePlus">OnePlus</option>
						<option value="Realme">Realme</option>
						<option value="Samsung">Samsung</option>
						<option value="Xiaomi">Xiaomi</option>
						<option value="ZTE">ZTE</option>
						<option value="Otro">Otro</option>
					</select>
				</div>

				<div class="col-md-6">
					<label for="modelo" class="form-label">Modelo</label>
					<input
						type="text"
						id="modelo"
						v-model="quoteData.modelo"
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

		<!-- Información sobre el Seguro de Celulares -->
		<section id="informacion" class="mb-5">
			<h2 class="mb-4">Protección para tu Smartphone</h2>
			<p>
				El seguro de celulares cubre el dispositivo frente a robo, daños
				accidentales o problemas técnicos. Es ideal para proteger smartphones,
				que suelen tener un valor significativo.
			</p>

			<div class="row">
				<!-- Tarjeta: Cobertura Básica -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-shield-alt"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Básica</h5>
							<p class="card-text">Incluye protección ante:</p>
							<ul>
								<li>Robo</li>
								<li>Daños accidentales (pantalla rota, inmersión en agua)</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta: Coberturas Adicionales -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-globe"></i>
							</div>
							<h5 class="card-title text-center">Coberturas Adicionales</h5>
							<p class="card-text">Esta cobertura incluye la básica más:</p>
							<ul>
								<li>Cobertura para uso en el extranjero</li>
								<li>Fallas técnicas fuera de la garantía</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<h3>Ejemplo de Cobertura</h3>
			<p>
				Si tu teléfono cae y se rompe la pantalla, el seguro cubrirá los costos
				de reparación.
			</p>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			quoteData: {
				nombre: "",
				email: "",
				marca: "",
				modelo: "",
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
.celulares-page {
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

.btn-primary {
	background-color: #003366;
	border: none;
	color: white;
	transition: background-color 0.3s;
}

.btn-primary:hover {
	background-color: #005399;
}
</style>
