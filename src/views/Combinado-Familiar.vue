<template>
	<div class="family-combo-page container my-5">
		<h1 class="text-center mb-4">Seguro Combinado Familiar</h1>

		<!-- Formulario de Solicitud -->
		<section id="solicitud-formulario" class="mb-5">
			<h2 class="mb-4">Solicita tu Cotización</h2>
			<form @submit.prevent="submitForm" class="row g-3">
				<div class="col-md-6">
					<label for="nombre" class="form-label">Nombre</label>
					<input
						type="text"
						id="nombre"
						v-model="formData.nombre"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="razonSocial" class="form-label">Razón Social</label>
					<input
						type="text"
						id="razonSocial"
						v-model="formData.razonSocial"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="actividad" class="form-label">Actividad</label>
					<input
						type="text"
						id="actividad"
						v-model="formData.actividad"
						class="form-control"
						required
					/>
				</div>

				<div class="col-md-6">
					<label for="telefono" class="form-label">Teléfono</label>
					<input
						type="tel"
						id="telefono"
						v-model="formData.telefono"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="email" class="form-label">Email</label>
					<input
						type="email"
						id="email"
						v-model="formData.email"
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
			<h2 class="mb-4">Protección Integral para tu Hogar</h2>
			<p>
				El Seguro Combinado Familiar protege la vivienda y los bienes dentro de
				ella frente a una amplia gama de riesgos. Es una póliza integral
				diseñada para proteger tanto la estructura de la casa como el contenido
				de la misma.
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
							<p class="card-text">
								Incluye protección ante los siguientes riesgos:
							</p>
							<ul>
								<li>Incendio</li>
								<li>Robo</li>
								<li>Daños por agua</li>
								<li>Responsabilidad civil</li>
								<li>Fenómenos naturales</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta: Coberturas Adicionales -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-plus-circle"></i>
							</div>
							<h5 class="card-title text-center">Coberturas Adicionales</h5>
							<p class="card-text">
								Esta cobertura adicional incluye la cobertura básica más:
							</p>
							<ul>
								<li>
									Protección de objetos de valor (electrodomésticos, joyas)
								</li>
								<li>Daños a terceros por eventos que ocurran en la vivienda</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<h3>Ejemplo de Cobertura</h3>
			<p>
				Si tu casa sufre daños por una tormenta, el seguro combinado familiar
				cubre tanto las reparaciones como el reemplazo de los bienes afectados.
			</p>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			formData: {
				nombre: "",
				razonSocial: "",
				actividad: "",
				profesion: "",
				telefono: "",
				email: "",
			},
		};
	},
	methods: {
		submitForm() {
			alert("Cotización solicitada con éxito");
		},
	},
};
</script>

<style scoped>
.family-combo-page {
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
