<template>
	<div class="caucion-page container my-5">
		<h1 class="text-center mb-4">Seguro de Caución</h1>

		<!-- Formulario de Cotización -->
		<section id="cotizacion-formulario" class="mb-5">
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

		<!-- Información sobre Seguro de Caución -->
		<section id="informacion" class="mb-5">
			<h2 class="mb-4">Ofrecemos:</h2>

			<div class="row">
				<!-- Todas las tarjetas -->
				<div
					v-for="(card, index) in cards"
					:key="index"
					class="col-md-4 mb-4"
					data-aos="fade-up"
				>
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i :class="card.icon"></i>
							</div>
							<h5 class="card-title text-center">{{ card.title }}</h5>
							<p class="card-content" v-if="card.description">
								{{ card.description }}
							</p>
							<ul v-if="card.list">
								<li v-for="(item, i) in card.list" :key="i">{{ item }}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Información Adicional -->
		<section id="informacion-adicional" class="mb-5">
			<h3>Ejemplo de Cobertura</h3>
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
			// Obtener fecha y hora actuales
			const now = new Date();
			const year = now.getFullYear();
			const month = now.getMonth() + 1;
			const day = now.getDate();
			const hours = now.getHours();
			const minutes = now.getMinutes();

			// Datos para enviar a Google Sheets
			const data = {
				HOJA: "Leads",
				PRODUCTO: "Caucion",
				FECHA: now.toLocaleDateString(),
				AÑO: year,
				MES: month,
				DIA: day,
				"HH:MM": `${hours}:${minutes < 10 ? "0" + minutes : minutes}`,
				...this.formData,
			};

			const proxyUrl = "https://cors-anywhere.herokuapp.com/";
			const googleScriptUrl =
				"https://script.google.com/macros/s/AKfycbzQINUw9bE3dBw5bslOSO8CZS9vklSpFw-pOYA6iPwSwfRfBhkRp0z5RTvUIE22O2Q5/exec";

			axios
				.post(proxyUrl + googleScriptUrl, new URLSearchParams(data))
				.then((response) => {
					if (response.data.result === "success") {
						alert("Cotización enviada correctamente. ¡Gracias!");
					} else {
						alert("Error al enviar la cotización: " + response.data.error);
					}
				})
				.catch((error) => {
					console.error("Error al enviar datos:", error);
					alert("Hubo un problema al enviar tu solicitud. Intenta nuevamente.");
				});
		},
	},
};
</script>

<style scoped>
.caucion-page {
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
	font-size: 1.4rem;
	font-weight: bold;
	color: #003366;
	text-align: center;
}

.card-content {
	text-align: left;
	color: #666;
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
