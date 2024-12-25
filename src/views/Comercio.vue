<template>
	<div class="fleet-page">
		<!-- Imagen Encabezado -->
		<div class="image-header">
			<img
				:src="getServiceImage('comercio.PNG')"
				alt="Comercio Image"
				class="header-image"
			/>
		</div>

		<!-- Información sobre el Seguro -->
		<section id="informacion" class="additional-info container my-5">
			<h2 class="section-title mb-4">Protección Integral para tu Comercio</h2>
			<p>
				Este seguro está diseñado para proteger tanto la estructura física del
				comercio como su contenido, incluyendo inventario y maquinaria. Además,
				cubre la responsabilidad civil frente a terceros.
			</p>

			<!-- Tarjetas de Cobertura -->
			<div class="row">
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-fire coverage-icon"></i>
							<h5 class="card-title mb-0">Cobertura Básica</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<p class="card-text">
								Incluye protección contra incendio, robo, daños por agua,
								vandalismo y responsabilidad civil.
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-hand-holding-usd coverage-icon"></i>
							<h5 class="card-title mb-0">Cobertura Adicional</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<p class="card-text">
								Incluye además una cobertura por pérdida de ingresos debido a la
								interrupción de la actividad comercial.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Cotizador Web -->
			<section id="cotizador" class="cotizador-section container my-5">
				<h2 class="section-title mb-4">
					Dejanos tus datos y empezá a sentirte seguro
				</h2>
				<form @submit.prevent="submitQuote" class="row g-3 p-4 form-background">
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
						<label for="actividad" class="form-label">Actividad</label>
						<input
							type="text"
							id="actividad"
							v-model="quoteData.actividad"
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
						<button type="submit" class="btn btn-custom w-100">
							Solicitar Cotización
						</button>
					</div>
				</form>
			</section>

			<h3 class="section-title mb-4">Ejemplo de Cobertura</h3>
			<p>
				Si tu tienda sufre daños por un incendio, el seguro cubrirá tanto la
				reparación de la estructura como el reemplazo del inventario dañado.
			</p>
		</section>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			quoteData: {
				nombre: "",
				razonSocial: "",
				actividad: "",
				telefono: "",
				email: "",
			},
		};
	},
	methods: {
		submitQuote() {
			const now = new Date();
			const data = {
				HOJA: "Leads",
				PRODUCTO: "IntegralComercio",
				FECHA: now.toLocaleDateString(),
				AÑO: now.getFullYear(),
				MES: now.getMonth() + 1,
				DIA: now.getDate(),
				"HH:MM": `${now.getHours()}:${now.getMinutes()}`,
				...this.quoteData,
			};

			const proxyUrl = "https://cors-anywhere.herokuapp.com/";
			const googleScriptUrl =
				"https://script.google.com/macros/s/AKfycbzQINUw9bE3dBw5bslOSO8CZS9vklSpFw-pOYA6iPwSwfRfBhkRp0z5RTvUIE22O2Q5/exec";

			axios
				.post(proxyUrl + googleScriptUrl, new URLSearchParams(data))
				.then(() =>
					alert("Cotización solicitada y datos enviados a Google Sheets")
				)
				.catch(() => alert("Error al enviar la cotización"));
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
.header-image {
	width: 100%;
	height: 300px;
	object-fit: cover;
	object-position: 50% 0%;
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

.text-orange {
	color: #ff6600;
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
