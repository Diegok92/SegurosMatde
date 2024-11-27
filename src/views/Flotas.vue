<template>
	<div class="fleet-page container my-5">
		<h1 class="text-center mb-4">Seguro para Flotas de Vehículos</h1>

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
					<button type="submit" class="btn btn-primary w-100">Contactar</button>
				</div>
			</form>
		</section>

		<section id="informacion" class="mb-5">
			<h2 class="text-center mb-5">Coberturas Disponibles</h2>

			<div class="row">
				<!-- Tarjetas de Coberturas -->
				<div
					class="col-md-4 mb-4"
					data-aos="fade-up"
					v-for="coverage in coverages"
					:key="coverage.title"
				>
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container">
								<i :class="coverage.icon"></i>
							</div>
							<h5 class="card-title">{{ coverage.title }}</h5>
							<p class="card-text">{{ coverage.description }}</p>
							<p><strong>Cobertura:</strong> {{ coverage.coverage }}</p>
							<p><strong>Ejemplo:</strong> {{ coverage.example }}</p>
						</div>
					</div>
				</div>
			</div>

			<h2 class="text-center mt-5">Más Información</h2>

			<!-- Asistencia Legal -->
			<div data-aos="fade-up" class="additional-info mt-4">
				<h3>Asistencia Legal</h3>
				<p>
					Algunas pólizas incluyen asistencia legal y defensa judicial en caso
					de que enfrentes demandas por un accidente en el que estés
					involucrado. Esto cubre los costos de representación legal y te
					asesora en los procedimientos judiciales.
				</p>
			</div>

			<!-- Cobertura de Accidentes Personales para el Conductor -->
			<div data-aos="fade-up" class="additional-info">
				<h3>Cobertura de Accidentes Personales para el Conductor</h3>
				<p>
					Además de proteger el auto y a terceros, puedes optar por incluir una
					cobertura que cubra los gastos médicos, hospitalarios o incluso
					compensaciones por invalidez o fallecimiento del conductor.
				</p>
				<ul>
					<li>
						<strong>Cobertura:</strong> Gastos médicos por lesiones, invalidez o
						fallecimiento del conductor en caso de accidente.
					</li>
					<li>
						<strong>Ejemplo:</strong> Si sufres un accidente que te cause
						lesiones, esta cobertura te brinda asistencia médica y puede ofrecer
						compensaciones en casos de invalidez.
					</li>
				</ul>
			</div>

			<!-- Seguro para Robo Parcial -->
			<div data-aos="fade-up" class="additional-info">
				<h3>Seguro para Robo Parcial</h3>
				<p>
					Si bien algunas pólizas cubren solo el robo total del vehículo, esta
					cobertura adicional se enfoca en el robo parcial, cubriendo partes o
					accesorios del vehículo, como ruedas, espejos, o equipamiento
					especial.
				</p>
				<ul>
					<li>
						<strong>Cobertura:</strong> Robo de partes del vehículo (llantas,
						espejos, equipo de audio, etc.).
					</li>
					<li>
						<strong>Ejemplo:</strong> Si te roban una rueda o el estéreo del
						auto, el seguro cubrirá la reposición de esos elementos robados.
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
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
			tiposVehiculos: [
				"Auto",
				"Motos",
				"Camionetas",
				"Camiones",
				"Colectivos",
				"Cuatriciclos",
			],
			coverages: [
				{
					title: "Responsabilidad Civil Obligatoria",
					description:
						"Cobertura mínima exigida por ley. Protege ante daños materiales o lesiones a terceros en un accidente.",
					coverage: "Daños a terceros (bienes y personas).",
					example:
						"Cubre los costos de reparación del vehículo de otra persona si causas un accidente.",
					icon: "fas fa-car-crash",
				},
				{
					title: "Seguro de Terceros Completo",
					description:
						"Amplía la cobertura básica e incluye protección contra incendio y robo total del vehículo.",
					coverage: "Daños a terceros, incendio parcial/total, y robo total.",
					example:
						"Si tu vehículo es robado o se incendia, la póliza cubrirá los costos de reposición o reparación.",
					icon: "fas fa-shield-alt",
				},
				{
					title: "Seguro Contra Terceros Completo con Granizo",
					description:
						"Incluye protección contra daños causados por fenómenos climáticos como granizo.",
					coverage:
						"Todo lo que cubre el seguro de terceros completo, más daños por granizo.",
					example:
						"Si una tormenta de granizo daña tu auto, el seguro cubrirá las reparaciones necesarias.",
					icon: "fas fa-cloud-showers-heavy",
				},
				{
					title: "Seguro Todo Riesgo con Franquicia",
					description:
						"Protección completa, incluyendo daños propios, con una franquicia a cubrir en caso de siniestro.",
					coverage:
						"Daños a terceros, robo total o parcial, incendio, daños propios y fenómenos naturales.",
					example:
						"Cubre los costos de reparación de tu auto, descontando la franquicia acordada, si eres responsable del accidente.",
					icon: "fas fa-hand-holding-usd",
				},
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
.fleet-page {
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

h2 {
	font-size: 1.8rem;
	color: #003366;
}

h3,
h4 {
	margin-top: 20px;
	color: #003366;
}

ul {
	list-style-type: disc;
	margin-left: 20px;
}

.additional-info {
	margin-top: 30px;
}
</style>
