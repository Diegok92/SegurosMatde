<template>
	<div class="fleet-page">
		<!-- Imagen Encabezado -->
		<div class="image-header">
			<img
				:src="getServiceImage('Caucion.jpeg')"
				alt="Seguro de Caución Image"
				class="header-image"
			/>
		</div>

		<!-- Cotizador Web -->
		<section id="cotizador" class="cotizador-section container my-5">
			<h2 class="section-title mb-4">Solicita tu Cotización</h2>
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
					<button type="submit" class="btn btn-custom w-100">
						Solicitar Cotización
					</button>
				</div>
			</form>
		</section>

		<!-- Información sobre Seguro de Caución -->
		<section id="informacion" class="additional-info container my-5">
			<h2 class="section-title mb-4">Ofrecemos:</h2>
			<div class="row">
				<div v-for="(card, index) in cards" :key="index" class="col-md-4 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i :class="card.icon" class="coverage-icon"></i>
							<h5 class="card-title mb-0">{{ card.title }}</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<p v-if="card.description">{{ card.description }}</p>
							<ul v-if="card.list">
								<li v-for="(item, i) in card.list" :key="i">{{ item }}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Información Adicional -->
		<section id="informacion-adicional" class="container my-5">
			<h3 class="section-title mb-4">Ejemplo de Cobertura</h3>
			<p>
				Si una empresa contratista no termina una obra según el contrato, el
				beneficiario del seguro de caución recibirá una compensación económica.
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
				actividad: "",
				telefono: "",
				email: "",
			},
			cards: [
				{
					icon: "fas fa-briefcase",
					title: "Garantía de Profesión",
					description:
						"Garantizan el pago de multas y protección al consumidor en caso de incumplimiento profesional.",
					list: [
						"Directores y gerentes",
						"Agentes de lotería, martilleros, corredores",
						"Agencias de seguridad y talleres de verificación técnica",
						"Operadores de GNC y distribuidoras de combustibles",
					],
				},
				{
					icon: "fas fa-warehouse",
					title: "Garantías Aduaneras",
					description:
						"Instrumentos financieros para asegurar el pago de impuestos y aranceles en operaciones aduaneras.",
					list: [
						"Falta de documentación",
						"Importación y exportación temporal",
						"Operadores portuarios y depósitos fiscales",
						"Sumario contencioso y recurso administrativo",
						"Otros",
					],
				},
				{
					icon: "fas fa-tools",
					title: "Obras y Servicios Públicos",
					list: [
						"Mantenimiento de la oferta",
						"Ejecución de contrato / garantía de adjudicación",
						"Sustitución de fondos de reparos",
						"Anticipos por acopio o financieros",
						"Tenencia de materiales",
					],
				},
				{
					icon: "fas fa-plane",
					title: "Garantías IATA",
					description:
						"Garantías solicitadas por la Asociación Internacional de Transporte Aéreo (IATA) para agencias de viajes y carga.",
					list: ["Para agencias de carga IATA", "Para agencias de viaje IATA"],
				},
				{
					icon: "fas fa-gavel",
					title: "Garantías Judiciales",
					description:
						"Se utilizan en contratos de concesión otorgados por entidades para operar o desarrollar servicios públicos.",
				},
				{
					icon: "fas fa-handshake",
					title: "Garantías de Concesiones",
					description:
						"Para empresas que operan, desarrollan o mantienen infraestructura o servicios públicos por concesión.",
				},
				{
					icon: "fas fa-graduation-cap",
					title: "Turismo Estudiantil",
					description:
						"Garantiza la prestación de servicios básicos contratados por agencias de turismo estudiantil.",
				},
				{
					icon: "fas fa-home",
					title: "Garantía de Alquiler",
					description:
						"Garantiza el pago del alquiler al propietario del inmueble.",
				},
				{
					icon: "fas fa-check-circle",
					title: "Cumplimiento de Obligaciones",
					description:
						"Garantiza el cumplimiento de obligaciones contractuales, indemnizando en caso de incumplimiento.",
				},
			],
		};
	},
	methods: {
		submitForm() {
			const now = new Date();
			const data = {
				HOJA: "Leads",
				PRODUCTO: "Caucion",
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

.btn-custom {
	background-color: #ff6600;
	color: #fff;
	transition: background-color 0.3s;
}

.btn-custom:hover {
	background-color: #d94e00;
}
</style>
