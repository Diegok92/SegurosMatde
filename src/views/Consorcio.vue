<template>
	<div class="fleet-page">
		<!-- Imagen Encabezado -->
		<div class="image-header">
			<img
				:src="getServiceImage('Consorcio.PNG')"
				alt="Consorcio Image"
				class="header-image"
			/>
		</div>

		<!-- Cotizador Web -->

		<!-- Información sobre el Seguro de Consorcio -->
		<section id="informacion" class="additional-info container my-5">
			<h2 class="section-title mb-4">Protección Integral para tu Consorcio</h2>
			<p>
				El seguro de consorcio está diseñado para brindar protección completa
				para edificios y complejos residenciales, cubriendo riesgos como daños
				por incendios, responsabilidad civil, daños a terceros y más.
			</p>

			<!-- Tarjetas de Cobertura -->
			<div class="row">
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-building coverage-icon"></i>
							<h5 class="card-title mb-0">Cobertura Básica</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<ul>
								<li>Incendio de edificio.</li>
								<li>Incendio y robo de bienes comunes del consorcio.</li>
								<li>Cobertura de cristales.</li>
								<li>Daños por agua.</li>
								<li>
									Plomería, gas, electricidad, cerrajería, cristales, las 24
									horas.
								</li>
								<li>
									Accidentes personales (encargado, ayudantes y copropietarios).
								</li>
								<li>Responsabilidad Civil.</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-shield-alt coverage-icon"></i>
							<h5 class="card-title mb-0">Cobertura Completa</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<p>
								Incluye además cobertura por rotura de cañerías, robo de bienes
								comunes y daños por eventos climáticos.
							</p>
						</div>
					</div>
				</div>
			</div>

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
				Si el edificio sufre daños debido a un evento climático, el seguro
				cubrirá los costos de reparación de las áreas comunes, así como los
				daños que puedan afectar a terceros.
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
				PRODUCTO: "SeguroConsorcio",
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
.image-header {
	width: 100%;
	overflow: hidden;
	position: relative;
}

.header-image {
	width: 100%;
	height: 400px;
	object-fit: cover;
	object-position: center;
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
