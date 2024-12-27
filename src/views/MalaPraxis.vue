<template>
	<div class="fleet-page">
		<!-- Imagen Encabezado -->
		<div class="image-header">
			<img
				:src="getServiceImage('MalaPraxis.jpeg')"
				alt="Seguro de Mala Praxis Image"
				class="header-image"
			/>
		</div>

		<!-- Información sobre Seguro de Mala Praxis -->
		<section id="informacion" class="additional-info container my-5">
			<h2 class="section-title mb-4">
				Información sobre Seguro de Mala Praxis
			</h2>
			<p>
				Este seguro está dirigido a profesionales de la salud, abogados,
				ingenieros, y otros que puedan enfrentar demandas por errores
				profesionales. Cubre las indemnizaciones que el asegurado deba pagar a
				terceros por daños causados por negligencia, errores u omisiones en el
				ejercicio de su profesión.
			</p>

			<div class="row">
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-balance-scale coverage-icon"></i>
							<h5 class="card-title mb-0">Cobertura Básica</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<ul>
								<li>Indemnizaciones por daños a terceros</li>
								<li>Gastos judiciales</li>
								<li>Honorarios legales</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-shield-alt coverage-icon"></i>
							<h5 class="card-title mb-0">Coberturas Adicionales</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<ul>
								<li>Cobertura para actos de negligencia grave</li>
								<li>Defensa ante tribunales de ética</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<!-- Cotizador Web -->
			<section id="cotizador" class="cotizador-section container my-5">
				<h2 class="section-title mb-4">
					Dejanos tus datos y empezá a sentirte seguro
				</h2>
				<form @submit.prevent="submitForm" class="row g-3 p-4 form-background">
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
						<label for="profesion" class="form-label">Profesión</label>
						<input
							type="text"
							id="profesion"
							v-model="formData.profesion"
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
						<button type="submit" class="btn btn-custom w-100">
							Solicitar Cotización
						</button>
					</div>
				</form>
			</section>

			<h3 class="section-title mb-4">Ejemplo</h3>
			<p>
				Si un médico enfrenta una demanda por un error durante una cirugía que
				causó daño a un paciente, el seguro de mala praxis cubre los costos de
				defensa legal y las indemnizaciones si se declara responsabilidad.
			</p>
		</section>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			formData: {
				nombre: "",
				razonSocial: "",
				profesion: "",
				telefono: "",
				email: "",
			},
		};
	},
	methods: {
		submitForm() {
			const now = new Date();
			const data = {
				HOJA: "Leads",
				PRODUCTO: "MalaPraxis",
				FECHA: now.toLocaleDateString(),
				AÑO: now.getFullYear(),
				MES: now.getMonth() + 1,
				DIA: now.getDate(),
				"HH:MM": `${now.getHours()}:${now.getMinutes()}`,
				...this.formData,
			};

			const proxyUrl = "https://cors-anywhere.herokuapp.com/";
			const googleScriptUrl =
				"https://script.google.com/macros/s/AKfycbzQINUw9bE3dBw5bslOSO8CZS9vklSpFw-pOYA6iPwSwfRfBhkRp0z5RTvUIE22O2Q5/exec";

			axios
				.post(proxyUrl + googleScriptUrl, new URLSearchParams(data))
				.then(() => alert("Cotización enviada correctamente. ¡Gracias!"))
				.catch(() =>
					alert("Error al enviar la cotización. Inténtalo de nuevo.")
				);
		},
		getServiceImage(imageName) {
			return new URL(
				`../assets/images/imgTarjetasHome/${imageName}`,
				import.meta.url
			).href;
		},
	},
};
</script>

<style scoped>
.image-header {
	width: 100%;
	overflow: hidden;
	position: relative;
}

.header-image {
	width: 100%;
	height: 400px;
	object-fit: cover;
	object-position: 50% 100%;
}

.section-title {
	font-size: 1.6rem;
	font-weight: bold;
	color: #003366;
	text-align: left;
}

.form-background {
	background-color: #f5f5f5;
	border-radius: 10px;
}

.card-no-border {
	border: none;
	box-shadow: none;
}

.card-title {
	color: #003366;
	font-weight: bold;
}

.coverage-icon {
	font-size: 1.5rem;
	color: #ff6600;
	margin-right: 10px;
}

.divider {
	height: 3px;
	background-color: #ff6600;
	margin: 10px 0;
	border: none;
}

.btn-custom {
	background-color: #ff6600;
	color: #fff;
	transition: background-color 0.3s;
}

.btn-custom:hover {
	background-color: #d94e00;
}
</style>
