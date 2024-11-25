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
					<label for="telefono" class="form-label">Teléfono de Contacto</label>
					<input
						type="tel"
						id="telefono"
						v-model="quoteData.telefono"
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
				<div class="col-md-6">
					<label for="sumaAsegurada" class="form-label">Suma a Asegurar</label>
					<input
						type="range"
						id="sumaAsegurada"
						v-model="quoteData.sumaAsegurada"
						class="form-range custom-range"
						min="300000"
						max="1200000"
						step="100000"
					/>
					<div class="text-center mt-2">
						<span
							>Suma a Asegurar: ${{
								formatNumber(quoteData.sumaAsegurada)
							}}</span
						>
					</div>
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
			<h2 class="mb-4">Protección para tu Celular</h2>
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
								<li>Robo, daño por tentativa</li>
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
			<h3>Documentación a presentar para denunciar un robo</h3>
			<ul>
				<li>Certificado de denuncia policial hecho en la comisaría</li>
				<li>
					Alguna constancia de preexistencia del celular (factura, caja IMEI,
					etc.)
				</li>
				<li>Denuncia de robo en tu compañía telefónica</li>
				<li>Constancia de bloqueo del IMEI ante el ENACOM</li>
			</ul>
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
				telefono: "",
				marca: "",
				modelo: "",
				sumaAsegurada: 300000,
			},
		};
	},
	methods: {
		submitQuote() {
			alert("Cotización solicitada");
		},
		formatNumber(value) {
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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

/* Mejoras en el input range */
input[type="range"] {
	width: 100%;
	-webkit-appearance: none;
	appearance: none;
	height: 10px;
	background: #ccc;
	border-radius: 5px;
	outline: none;
	opacity: 0.9;
	transition: opacity 0.2s;
}

input[type="range"]::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 25px;
	height: 25px;
	background: #005399;
	cursor: pointer;
	border-radius: 50%;
}

input[type="range"]::-moz-range-thumb {
	width: 25px;
	height: 25px;
	background: #005399;
	cursor: pointer;
	border-radius: 50%;
}
</style>
