<template>
	<div class="fleet-page">
		<!-- Imagen Encabezado -->
		<div class="image-header">
			<img
				:src="getServiceImage('Flotas.PNG')"
				alt="Flotas Image"
				class="header-image"
			/>
		</div>

		<!-- Cotizador Web -->
		<section id="cotizador" class="cotizador-section container my-5">
			<h2 class="section-title mb-4">Cotizador Web</h2>
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
				<div class="col-md-6">
					<label for="cantidadVehiculos" class="form-label"
						>Cantidad de Vehículos</label
					>
					<select
						id="cantidadVehiculos"
						v-model="quoteData.cantidadVehiculos"
						class="form-control"
						required
					>
						<option value="" disabled>Seleccione una opción</option>
						<option value="5">Hasta 5</option>
						<option value="10">Hasta 10</option>
						<option value="20">Hasta 20</option>
						<option value="50">Hasta 50</option>
						<option value="100">Hasta 100</option>
						<option value="300">Hasta 300</option>
					</select>
				</div>
				<div class="col-12">
					<button type="submit" class="btn btn-custom w-100">Contactar</button>
				</div>
			</form>
		</section>

		<!-- Coberturas Disponibles -->
		<section class="services-summary container my-5">
			<h2 class="section-title mb-5">Coberturas Disponibles</h2>
			<div class="row">
				<div
					class="col-md-4 mb-4"
					data-aos="fade-up"
					v-for="coverage in coverages"
					:key="coverage.title"
				>
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i :class="coverage.icon" class="coverage-icon"></i>
							<h5 class="card-title mb-0">{{ coverage.title }}</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body d-flex flex-column">
							<p class="card-text">{{ coverage.description }}</p>
							<p><strong>Cobertura:</strong> {{ coverage.coverage }}</p>
							<p><strong>Ejemplo:</strong> {{ coverage.example }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Más Información -->
		<section id="informacion" class="additional-info container my-5">
			<h2 class="section-title mb-4">Más Información</h2>

			<div class="mb-4" data-aos="fade-up">
				<h3 class="text-orange">Asistencia Legal</h3>
				<p>
					Algunas pólizas incluyen asistencia legal y defensa judicial en caso
					de que enfrentes demandas por un accidente en el que estés
					involucrado. Esto cubre los costos de representación legal y te
					asesora en los procedimientos judiciales.
				</p>
			</div>

			<div class="mb-4" data-aos="fade-up">
				<h3 class="text-orange">
					Cobertura de Accidentes Personales para el Conductor
				</h3>
				<p>
					Además de proteger el auto y a terceros, puedes optar por incluir una
					cobertura que cubra los gastos médicos, hospitalarios o incluso
					compensaciones por invalidez o fallecimiento del conductor.
				</p>
				<ul>
					<li>
						<strong>Cobertura: </strong>Gastos médicos por lesiones, invalidez o
						fallecimiento del conductor en caso de accidente.
					</li>
					<li>
						<strong>Ejemplo: </strong>En caso de accidente, esta cobertura te
						brinda asistencia médica y puede ofrecer compensaciones en caso de
						invalidez.
					</li>
				</ul>
			</div>

			<div data-aos="fade-up">
				<h3 class="text-orange">Seguro para Robo Parcial</h3>
				<p>Protege contra el robo de partes y accesorios del vehículo.</p>
				<ul>
					<li>
						<strong>Cobertura: </strong>Robo de partes del vehículo (llantas,
						espejos, pantalla, etc.)
					</li>
					<li>
						<strong>Ejemplo: </strong>Si te roban alguna parte del vehículo,
						este seguro cubrirá los gastos incluidos los daños al vehículo si
						los hubiera.
					</li>
				</ul>
			</div>
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
				cantidadVehiculos: "",
			},
			coverages: [
				{
					title: "Resp. Civil Obligatoria",
					description:
						"Cobertura mínima exigida por ley. Protege ante daños materiales o lesiones a terceros en un accidente.",
					coverage: "Daños a terceros (bienes y personas).",
					example: "Cubre los costos del vehículo de la otra persona.",
					icon: "fas fa-car-crash",
				},
				{
					title: "Terceros Completo",
					description:
						"Amplía la cobertura básica e incluye protección contra incendio y robo total.",
					coverage: "Daños a terceros, incendio parcial/total y robo total.",
					example:
						"Si el vehículo es robado o se incendia, la póliza cubrirá los costos de reposición o reparación.",
					icon: "fas fa-shield-alt",
				},
				{
					title: "Terceros Completo con Granizo",
					description:
						"Incluye protección contra daños por fenómenos climáticos como el granizo.",
					coverage: "Daños a terceros más daños por granizo.",
					example: "Cubre daños parciales y totales causados por granizo.",
					icon: "fas fa-cloud-showers-heavy",
				},
				{
					title: "Todo Riesgo con Franquicia",
					description: "Protección completa, incluye todas las anteriores.",
					coverage:
						"Daños propios y a terceros. Parciales y totales, incluyendo inclemencias del clima.",
					example: "Repara tu auto y el de terceros involucrados.",
					icon: "fas fa-hand-holding-usd",
				},
			],
		};
	},
	methods: {
		submitQuote() {
			const now = new Date();
			const data = {
				HOJA: "Leads",
				PRODUCTO: "FlotaAutos",
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
	height: 200px;
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
