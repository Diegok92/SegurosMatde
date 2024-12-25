<template>
	<div class="fleet-page">
		<!-- Imagen Encabezado -->
		<div class="image-header">
			<img
				:src="getServiceImage('Art.PNG')"
				alt="ART Image"
				class="header-image"
			/>
		</div>

		<!-- Información sobre ART y Accidentes Personales -->
		<section id="informacion" class="additional-info container my-5">
			<h2 class="section-title mb-4">Información sobre A.R.T.</h2>
			<p>
				Ya sea que trabajes en relación de dependencia o de manera autónoma, es
				imprescindible que cuentes con un seguro de accidentes. La ART debe ser
				contratada por empleadores que cuentan con empleados en relación de
				dependencia. La misma se encarga de reparar los daños económicos en
				casos de accidentes de trabajo o enfermedades profesionales que sufran
				los trabajadores durante su jornada laboral o bien en el trayecto de ida
				o regreso a su hogar o trabajo, se lo denomina accidente in itinere.
			</p>
			<p>
				Estar cubierto por una ART es obligatorio en una relación de trabajo
				formal, mientras que un seguro de Accidentes Personales se dirige a
				quienes trabajan de manera independiente y no cuentan con empleados en
				relación de dependencia.
			</p>

			<div class="row">
				<!-- Tarjeta: Seguro ART -->
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-briefcase-medical coverage-icon"></i>
							<h5 class="card-title mb-0">ART</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body d-flex flex-column">
							<p class="card-text">
								El seguro ART es obligatorio y cubre a los empleados de una
								empresa en caso de accidentes laborales o enfermedades
								profesionales.
							</p>
							<ul>
								<li>
									<strong>Cobertura básica:</strong> Gastos médicos,
									farmacéuticos, prótesis, rehabilitación y salario durante la
									incapacidad temporal o permanente.
								</li>
								<li>
									<strong>Coberturas adicionales:</strong> Servicios de
									prevención de riesgos en el trabajo y capacitaciones.
								</li>
								<li>
									<strong>Ejemplo:</strong> Un empleado que sufre una lesión en
									el trabajo recibe tratamiento médico y su salario durante el
									tiempo que no puede trabajar.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta: Seguro de Accidentes de Trabajo (ART) para Personal Doméstico -->
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-home coverage-icon"></i>
							<h5 class="card-title mb-0">ART - Personal Doméstico</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body d-flex flex-column">
							<p class="card-text">
								El seguro de Accidentes de Trabajo (ART) para personal doméstico
								es obligatorio y protege tanto a empleadores como a trabajadores
								del hogar.
							</p>
							<ul>
								<li>
									<strong>Cobertura básica:</strong> Asistencia médica,
									farmacéutica, hospitalaria, prótesis, rehabilitación, y pago
									de salarios durante la incapacidad temporal o permanente.
								</li>
								<li>
									<strong>Coberturas adicionales:</strong> Muerte o invalidez, y
									gastos derivados de traslados médicos.
								</li>
								<li>
									<strong>Ejemplo:</strong> Si un empleado doméstico sufre una
									caída durante su jornada laboral, el ART cubre los gastos
									médicos y el salario durante el tiempo de recuperación.
								</li>
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
				<form @submit.prevent="submitQuote" class="row g-3 p-4 form-background">
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
						<label for="cuit" class="form-label">C.U.I.T.</label>
						<input
							type="text"
							id="cuit"
							v-model="quoteData.cuit"
							class="form-control"
							required
						/>
					</div>
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
						<label for="email" class="form-label">Correo Electrónico</label>
						<input
							type="email"
							id="email"
							v-model="quoteData.email"
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
						<label for="planART" class="form-label">Plan/es buscados</label>
						<select
							id="planART"
							v-model="quoteData.planes"
							class="form-control"
							required
						>
							<option value="" disabled>Seleccione una opción</option>
							<option value="A.R.T.">A.R.T.</option>
							<option value="A.R.T. Domestico">A.R.T. Doméstico</option>
							<option value="A.R.T. y A.R.T. Doméstico">
								A.R.T. y A.R.T. Doméstico
							</option>
						</select>
					</div>
					<div class="col-12">
						<button type="submit" class="btn btn-custom w-100">
							Solicitar Cotización
						</button>
					</div>
				</form>
			</section>

			<h2 class="section-title mb-4">
				Cobertura de Riesgos de Trabajo para Casas Particulares
			</h2>
			<p>
				La cobertura de riesgos del trabajo para personal de casas particulares
				es idéntica a la cobertura que posee cualquier otro trabajador en casos
				de accidente de trabajo o enfermedad profesional:
			</p>
			<ul>
				<li>
					Prestación dineraria mensual en período de incapacidad laboral
					temporaria
				</li>
				<li>
					Indemnización en los casos de disminución de la capacidad laborativa
				</li>
				<li>Prestación dineraria por gran invalidez de corresponder</li>
				<li>Asistencia médica y farmacéutica</li>
				<li>Prótesis y ortopedia, rehabilitación</li>
				<li>Recalificación profesional</li>
				<li>Servicio funerario en los casos de fallecimiento</li>
			</ul>
			<h3 class="section-title mb-4">Nuestro Objetivo</h3>
			<p>
				Nuestro objetivo es asesorarte para que elijas la mejor compañía que
				ofrezca una cobertura integral para proteger a tus empleados frente a
				accidentes laborales o enfermedades profesionales, cumpliendo con la
				legislación vigente.
			</p>
			<p>
				Trabajamos con las mejores aseguradoras de ART en el mercado, basándonos
				en su calidad de servicio, experiencia y capacidad de brindar soluciones
				eficaces en la gestión de riesgos laborales.
			</p>

			<h3 class="section-title mb-4">Nuestros Servicios</h3>
			<ul>
				<li>Asignación de un ejecutivo de cuentas para tu empresa</li>
				<li>Gestión de reintegros de ILT</li>
				<li>Seguimiento de siniestros</li>
				<li>Análisis de cuentas corrientes y gestiones de planes de pago</li>
				<li>
					Emisión de certificados de cobertura con y sin cláusula de no
					repetición
				</li>
			</ul>
		</section>

		<!-- Socios Estratégicos -->
		<section class="services-summary container my-5">
			<h2 class="section-title mb-5">Socios Estratégicos</h2>
			<div class="row">
				<img
					v-for="(logo, index) in partnerLogos"
					:key="index"
					:src="logo"
					:alt="'Logo ' + (index + 1)"
					class="partner-logo col-md-4 mb-4"
				/>
			</div>
		</section>

		<!-- Preguntas Frecuentes -->
		<section id="preguntas-frecuentes" class="faq-section container my-5">
			<h2 class="section-title mb-4 text-center">Preguntas Frecuentes</h2>
			<div v-for="(faq, index) in faqs" :key="index" class="faq-item mb-3">
				<h5 @click="toggleFaq(index)" class="faq-question">
					<i
						:class="faq.open ? 'fas fa-chevron-down' : 'fas fa-chevron-right'"
						class="mr-2"
					></i>
					{{ faq.question }}
				</h5>
				<p v-if="faq.open" class="faq-answer">{{ faq.answer }}</p>
			</div>
		</section>
	</div>
</template>

<script>
import axios from "axios";
import provinciaLogo from "../assets/images/Logos/ProvinciaArt.jpg";
import expertaLogo from "../assets/images/Logos/ExpertaArt.jpg";
import prevencionLogo from "../assets/images/Logos/PrevencionSancorArt.jpg";
import federacionLogo from "../assets/images/Logos/PatronalArt.png";
import omintLogo from "../assets/images/Logos/OmintArt.jpg";
import smgLogo from "../assets/images/Logos/SmgArt.svg";
import berkleyLogo from "../assets/images/Logos/BerkleyArt.jpg";
import andinaLogo from "../assets/images/Logos/AndinaArt.jpg";
import galenoLogo from "../assets/images/Logos/GalenoArt.jpg";
import faqs from "../faqs/art.js";

export default {
	data() {
		return {
			quoteData: {
				razonSocial: "",
				cuit: "",
				nombre: "",
				email: "",
				telefono: "",
				planes: "",
			},
			partnerLogos: [
				provinciaLogo,
				expertaLogo,
				prevencionLogo,
				federacionLogo,
				omintLogo,
				smgLogo,
				berkleyLogo,
				andinaLogo,
				galenoLogo,
			],
			faqs: faqs,
		};
	},
	methods: {
		submitQuote() {
			const now = new Date();
			const data = {
				HOJA: "Leads",
				PRODUCTO: "ART",
				FECHA: now.toLocaleDateString(),
				AÑO: now.getFullYear(),
				MES: now.getMonth() + 1,
				DIA: now.getDate(),
				"HH:MM": `${now.getHours()}:${now.getMinutes()}`,
				razonSocial: this.quoteData.razonSocial,
				cuit: this.quoteData.cuit,
				nombre: this.quoteData.nombre,
				email: this.quoteData.email,
				telefono: this.quoteData.telefono,
				planART: this.quoteData.planes,
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
		toggleFaq(index) {
			this.faqs[index].open = !this.faqs[index].open;
		},
	},
};
</script>

<style scoped>
.header-image {
	width: 100%;
	height: 300px;
	object-fit: cover;
	object-position: 50% 30%;
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

.partner-logo {
	width: 100%;
	max-width: 200px;
	height: auto;
	object-fit: contain;
}

.faq-question {
	cursor: pointer;
	font-weight: bold;
	color: #003366;
}

.faq-answer {
	color: #666;
	margin-top: 5px;
}
</style>
