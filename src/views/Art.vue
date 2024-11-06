<template>
	<div class="art-page container my-5">
		<h1 class="text-center mb-4">A.R.T.</h1>

		<!-- Cotizador Web -->
		<section id="cotizador" class="cotizador-section mb-5">
			<h2 class="mb-4">Cotizador Web</h2>
			<form @submit.prevent="submitQuote" class="row g-3">
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
					<label for="masaSalarial" class="form-label">Masa Salarial</label>
					<input
						type="number"
						id="masaSalarial"
						v-model="quoteData.masaSalarial"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="capitas" class="form-label">Capitas</label>
					<input
						type="number"
						id="capitas"
						v-model="quoteData.capitas"
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
					<label for="marca" class="form-label">Plan</label>
					<select
						id="marca"
						v-model="quoteData.marca"
						class="form-control"
						required
					>
						<option value="" disabled>Seleccione un plan</option>
						<option value="Aurora">ART</option>
						<option value="Cannondale">Accidente Personales</option>
					</select>
				</div>
				<div class="col-12">
					<button type="submit" class="btn btn-primary w-100">
						Solicitar Cotización
					</button>
				</div>
			</form>
		</section>

		<!-- Información sobre ART y Accidentes Personales -->
		<section id="informacion" class="mb-5">
			<h2 class="mb-4">Información sobre A.R.T.</h2>
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
				<!-- Tarjeta: Riesgo de Accidentes Personales -->
				<div class="col-md-4 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container">
								<i class="fas fa-ambulance"></i>
							</div>
							<h5 class="card-title text-center">Accidentes Personales</h5>
							<p class="card-text">
								Este seguro cubre al asegurado en caso de que sufra un accidente
								que le cause lesiones, invalidez o muerte.
							</p>
							<ul>
								<li>
									<strong>Cobertura básica:</strong> Gastos médicos, incapacidad
									temporal o permanente, e indemnización por fallecimiento.
								</li>
								<li>
									<strong>Coberturas adicionales:</strong> Cobertura para
									tratamientos médicos prolongados o rehabilitación.
								</li>
								<li>
									<strong>Ejemplo:</strong> Un seguro de accidentes personales
									cubre el tratamiento médico y la pérdida de ingresos si sufres
									un accidente que te impide trabajar durante varios meses.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta: Seguro ART -->
				<div class="col-md-4 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container">
								<i class="fas fa-briefcase-medical"></i>
							</div>
							<h5 class="card-title text-center">ART</h5>
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
				<div class="col-md-4 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container">
								<i class="fas fa-home"></i>
							</div>
							<h5 class="card-title text-center">ART - Personal Doméstico</h5>
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
			<h3>Cobertura de Riesgos de Trabajo para Casas Particulares</h3>
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

			<h3>Nuestro Objetivo</h3>
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

			<h3>Nuestros Servicios</h3>
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

			<h3>Socios Estratégicos</h3>
			<br />
			<div class="partners-grid">
				<img
					v-for="(logo, index) in partnerLogos"
					:key="index"
					:src="logo"
					:alt="'Logo ' + (index + 1)"
					class="partner-logo"
				/>
			</div>

			<h3>Preguntas Frecuentes</h3>
			<p>
				Puedes encontrar respuestas a las preguntas más frecuentes sobre ART en
				el siguiente enlace:
				<a
					href="https://www.prevencionart.com.ar/preguntas-frecuentes?perfil=AsesorLaboral"
					target="_blank"
					>Preguntas Frecuentes sobre ART</a
				>.
			</p>
		</section>
	</div>
</template>

<script>
import provinciaLogo from "../assets/images/provincia_logo.png";
import expertaLogo from "../assets/images/experta_logo.png";
import prevencionLogo from "../assets/images/prevencion_logo.png";
import federacionLogo from "../assets/images/federacion_patronal_logo.png";
import omintLogo from "../assets/images/omint_logo.png";
import smgLogo from "../assets/images/smg_logo.png";
import berkleyLogo from "../assets/images/berkley_logo.png";
import andinaLogo from "../assets/images/andina_logo.png";
import galenoLogo from "../assets/images/galeno_logo.png";

export default {
	data() {
		return {
			quoteData: {
				razonSocial: "",
				cuit: "",
				actividad: "",
				masaSalarial: "",
				capitas: "",
				email: "",
				telefono: "",
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
		};
	},
	methods: {
		submitQuote() {
			alert("Cotización solicitada");
		},
	},
};
</script>

<style scoped>
.art-page {
	padding-top: 20px;
}

.cotizador-section form {
	background-color: #f8f9fa;
	padding: 20px;
	border-radius: 10px;
}

h2 {
	font-size: 1.8rem;
	color: #003366;
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
	text-align: center;
	font-size: 2.5rem;
	color: #003366;
	margin-bottom: 15px;
}

.card-title {
	font-size: 1.4rem;
	font-weight: bold;
	color: #003366;
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

.partner-logo {
	width: 100%;
	max-width: 200px;
	height: auto;
	object-fit: contain;
}
</style>
