<template>
	<div class="home">
		<HeroSection />

		<!-- Resumen de Servicios -->
		<section class="services-summary container my-4">
			<h2 class="services-title text-center mb-5">
				Conocé Todos Nuestros Seguros
			</h2>
			<div class="row">
				<div
					class="col-md-4 mb-4"
					data-aos="fade-up"
					v-for="service in services"
					:key="service.title"
				>
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container">
								<i :class="service.icon"></i>
							</div>
							<h5 class="card-title">{{ service.title }}</h5>
							<p class="card-text">{{ service.description }}</p>
							<router-link :to="service.link" class="btn btn-primary"
								>Más Información</router-link
							>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Sección de Socios Estratégicos -->
		<PartnersSection />
	</div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import PartnersSection from "../components/PartnersSection.vue";

export default {
	components: {
		HeroSection,
		PartnersSection,
	},
	data() {
		return {
			services: [
				{
					title: "Flotas de Autos",
					description:
						"Cobertura integral para flotas de vehículos comerciales, adaptada a las necesidades de cada empresa.",
					link: "/flotas",
					icon: "fas fa-car",
				},
				{
					title: "A.R.T. / Accidentes Personales",
					description:
						"Cobertura para empleadores y trabajadores, incluyendo accidentes de trabajo y enfermedades profesionales.",
					link: "/art",
					icon: "fas fa-briefcase-medical",
				},
				{
					title: "Integral de Comercio",
					description:
						"Protección para la estructura física del comercio, inventario y responsabilidad civil.",
					link: "/comercio",
					icon: "fas fa-store",
				},
				{
					title: "Transporte de Mercancías",
					description:
						"Cobertura para la carga durante el transporte terrestre, marítimo o aéreo. Coberturas básicas y adicionales disponibles.",
					link: "/transport",
					icon: "fas fa-truck",
				},
				{
					title: "Caución",
					description:
						"Garantías para el cumplimiento de obligaciones contractuales y demandas judiciales.",
					link: "/caucion",
					icon: "fas fa-shield-alt",
				},
				{
					title: "Combinado Familiar",
					description:
						"Protección para la vivienda y sus bienes frente a diversos riesgos como incendios y robos.",
					link: "/combinado-familiar",
					icon: "fas fa-home",
				},
				{
					title: "Notebooks",
					description:
						"Protección contra robo o daños accidentales para notebooks y computadoras portátiles.",
					link: "/notebooks",
					icon: "fas fa-laptop",
				},
				{
					title: "Celulares",
					description:
						"Cobertura contra el robo, daños accidentales y fallas técnicas de dispositivos móviles.",
					link: "/celulares",
					icon: "fas fa-mobile-alt",
				},
				{
					title: "Integral de Consorcio",
					description:
						"Protección para edificios en régimen de propiedad horizontal, incluyendo áreas comunes y responsabilidad civil.",
					link: "/consorcio",
					icon: "fas fa-building",
				},
				{
					title: "Mala Praxis",
					description:
						"Cobertura para profesionales que enfrentan demandas por errores profesionales.",
					link: "/mala-praxis",
					icon: "fas fa-user-md",
				},
				{
					title: "Todo Riesgo Operativo",
					description:
						"Cobertura integral para empresas, protegiendo contra daños materiales y pérdidas económicas.",
					link: "/todo-riesgo-operativo",
					icon: "fas fa-industry",
				},
				{
					title: "Bicicletas",
					description:
						"Cobertura contra robo, daños accidentales, y responsabilidad civil para bicicletas.",
					link: "/bicicletas",
					icon: "fas fa-bicycle",
				},
			],
		};
	},
};
</script>

<style scoped>
.home {
	width: 100%;
}

.services-summary {
	padding: 30px 0;
}

.services-title {
	font-size: 2rem;
	font-weight: bold;
	color: #003366;
	text-transform: uppercase;
	text-shadow: 1px 1px 3px rgba(0, 51, 102, 0.3);
	position: relative;
}

.services-title::after {
	content: "";
	display: block;
	width: 60px;
	height: 4px;
	background-color: #003366;
	margin: 8px auto 0;
	border-radius: 2px;
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
	font-size: 1.3rem;
	font-weight: bold;
	color: #003366;
}

.card-text {
	font-size: 1rem;
	color: #666;
	margin-bottom: 15px;
}

.btn-primary {
	background-color: #003366;
	border: none;
	color: white;
	transition: background-color 0.3s;
}

.btn-primary:hover {
	background-color: #005399;
}
</style>
