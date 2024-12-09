<template>
	<div class="consorcio-page container my-5">
		<h1 class="text-center mb-4">Seguro de Consorcio</h1>

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
			<h2 class="mb-4">Protección Integral para tu Consorcio</h2>
			<p>
				El seguro de consorcio está diseñado para brindar protección completa
				para edificios y complejos residenciales, cubriendo riesgos como daños
				por incendios, responsabilidad civil, daños a terceros y más.
			</p>

			<!-- Tarjetas de Cobertura -->
			<div class="row">
				<!-- Tarjeta: Cobertura Básica -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-building"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Básica</h5>
							<ul class="card-text">
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

				<!-- Tarjeta: Cobertura Completa -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-shield-alt"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Completa</h5>
							<p class="card-text">
								Incluye además cobertura por rotura de cañerías, robo de bienes
								comunes y daños por eventos climáticos.
							</p>
						</div>
					</div>
				</div>
			</div>
			<h3>Ejemplo de Cobertura</h3>
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
			// Obtener la fecha y hora actuales
			const now = new Date();
			const year = now.getFullYear();
			const month = now.getMonth() + 1; // Los meses comienzan desde 0
			const day = now.getDate();
			const hours = now.getHours();
			const minutes = now.getMinutes();

			// Datos para enviar al App Script
			const data = {
				HOJA: "Leads",
				PRODUCTO: "SeguroConsorcio",
				FECHA: now.toLocaleDateString(),
				AÑO: year,
				MES: month,
				DIA: day,
				"HH:MM": `${hours}:${minutes < 10 ? "0" + minutes : minutes}`,
				nombre: this.quoteData.nombre,
				razonSocial: this.quoteData.razonSocial,
				telefono: this.quoteData.telefono,
				email: this.quoteData.email,
				cuit: "",
				planes: "",
				profesion: "",
				cantidadPersonas: "",
				condicionIva: "",
				actividad: "",
				tipoMercaderia: "",
				marcaBici: "",
				modeloBici: "",
				marcaNote: "",
				modeloNote: "",
				marcaCelu: "",
				modeloCelu: "",
				sumaAsegurada: "",
			};

			// URL del script de Google Apps
			const proxyUrl = "https://cors-anywhere.herokuapp.com/";
			const googleScriptUrl =
				"https://script.google.com/macros/s/AKfycbzQINUw9bE3dBw5bslOSO8CZS9vklSpFw-pOYA6iPwSwfRfBhkRp0z5RTvUIE22O2Q5/exec";

			axios
				.post(proxyUrl + googleScriptUrl, new URLSearchParams(data))
				.then((response) => {
					if (response.data.result === "success") {
						alert("Cotización solicitada y datos enviados a Google Sheets");
					} else {
						alert(
							"Error inesperado al enviar la cotización: " + response.data.error
						);
					}
				})
				.catch((error) => {
					console.error("Error al enviar datos:", error);
					alert("Error al enviar la cotización");
				});
		},
	},
};
</script>

<style scoped>
.consorcio-page {
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

h3 {
	margin-top: 20px;
	color: #003366;
}

ul {
	list-style-type: disc;
	margin-left: 20px;
}
</style>
