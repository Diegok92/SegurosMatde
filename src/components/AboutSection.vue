<template>
	<div class="services-page container my-5">
		<!-- Sección Acerca de Nosotros -->
		<section class="about-us-section my-5 py-5 text-center">
			<div class="about-container p-4">
				<h2 class="mb-4 section-title">Acerca de Nosotros</h2>
				<p class="lead mb-4">
					En Matde, creemos que la protección es la base para construir un
					futuro seguro y lleno de posibilidades. Desde nuestro inicio, hemos
					trabajado con el firme compromiso de ofrecer soluciones confiables y
					adaptadas a las necesidades de nuestros clientes.
				</p>
				<p class="mb-4">
					Nuestra misión es brindarte tranquilidad. Nos especializamos en
					diseñar productos y servicios que protegen lo que más valoras: tu
					vida, tu familia, tu patrimonio y tus proyectos. Sabemos que cada
					cliente es único, por eso creamos planes a medida, garantizando que
					siempre tengas el respaldo que necesitas.
				</p>
				<h3 class="mb-3">¿Quiénes somos?</h3>
				<p class="mb-3">
					Somos una empresa sólida y cercana, con años de experiencia en el
					sector asegurador. Nos distingue nuestro enfoque humano, basado en la
					confianza, la transparencia y la innovación. Contamos con un equipo de
					expertos comprometidos en asesorarte y acompañarte en cada paso, para
					que tomes las mejores decisiones de protección.
				</p>
				<h3 class="mb-3">¿Qué nos hace diferentes?</h3>
				<ul class="list-unstyled">
					<li class="mb-3">
						<strong>Trayectoria confiable:</strong> Nuestra experiencia nos
						permite ofrecer servicios de calidad que respaldan tu bienestar y tu
						patrimonio.
					</li>
					<li class="mb-3">
						<strong>Innovación constante:</strong> Incorporamos las mejores
						herramientas tecnológicas para simplificar procesos y brindarte
						soluciones modernas.
					</li>
					<li class="mb-3">
						<strong>Atención personalizada:</strong> Escuchamos tus necesidades
						y diseñamos coberturas que se adaptan a tus objetivos y estilo de
						vida.
					</li>
					<li class="mb-3">
						<strong>Compromiso contigo:</strong> Estamos contigo en los momentos
						más importantes, trabajando para resolver tus problemas con rapidez
						y eficacia.
					</li>
				</ul>
				<h3 class="mb-3">Nuestra Visión</h3>
				<p>
					Queremos ser tu aliado estratégico en seguros, proporcionando
					tranquilidad y estabilidad, para que vivas cada día sin
					preocupaciones.
				</p>
			</div>
		</section>

		<!-- Sección Por Qué Elegirnos -->
		<section class="why-choose-us-section my-5">
			<h2 class="text-center mb-5 section-title">¿Por qué elegirnos?</h2>
			<div class="row justify-content-center">
				<div
					class="col-lg-4 col-md-6 col-sm-12 mb-4"
					v-for="reason in reasonsToChooseUs"
					:key="reason.title"
				>
					<div class="card h-100 shadow-sm border-0 reason-card">
						<div class="card-body text-center">
							<div class="icon-container mb-3">
								<i :class="reason.icon" class="reason-icon"></i>
							</div>
							<h4 class="card-title">{{ reason.title }}</h4>
							<p class="card-text">{{ reason.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Sección de Contacto -->
		<section class="contact-section text-center py-5">
			<h2 class="mb-4 section-title">¡Hablemos!</h2>
			<p class="mb-4 lead">
				Estamos aquí para ayudarte a proteger lo que más valoras. Contáctanos
				hoy mismo y encuentra la cobertura perfecta para ti o tu empresa.
			</p>
			<ul class="list-unstyled contact-info">
				<li class="mb-3"><strong>Teléfono:</strong> [Número de contacto]</li>
				<li class="mb-3"><strong>Email:</strong> [Correo electrónico]</li>
				<li class="mb-3"><strong>Dirección:</strong> [Ubicación física]</li>
				<li><strong>Sitio web:</strong> [Enlace al sitio]</li>
			</ul>
			<p class="mt-4 font-weight-bold highlight">
				Tu tranquilidad es nuestro compromiso. ¡Confiá en nosotros!
			</p>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			serviceCategories: [
				{
					title: "Seguros para empresas",
					icon: "fas fa-building",
					services: [
						{
							name: "Seguros de Responsabilidad Civil",
							description:
								"Protege a tu empresa frente a reclamaciones legales por daños a terceros.",
						},
						{
							name: "Seguros Patrimoniales",
							description:
								"Cobertura contra pérdidas o daños a los bienes de tu empresa.",
						},
						{
							name: "Seguros para Empleados",
							description:
								"Cuidamos de tu equipo con opciones de seguros de vida, salud y accidentes.",
						},
					],
				},
				{
					title: "Seguros para personas",
					icon: "fas fa-user",
					services: [
						{
							name: "Seguros de Vida",
							description:
								"Protege a tus seres queridos con cobertura diseñada para garantizar su estabilidad económica en caso de imprevistos.",
						},
						{
							name: "Seguros de Salud",
							description:
								"Acceso a una red médica de calidad para que cuides de tu bienestar y el de tu familia.",
						},
						{
							name: "Seguros de Automóvil",
							description:
								"Cobertura integral para garantizar tu seguridad y la de tu vehículo frente a accidentes, robos y otros imprevistos en la carretera.",
						},
						{
							name: "Seguros de Hogar",
							description:
								"Resguarda tu patrimonio frente a robos, desastres naturales y accidentes.",
						},
					],
				},
				{
					title: "Seguros especializados",
					icon: "fas fa-shield-alt",
					services: [
						{
							name: "Seguros de Viajes",
							description:
								"Tranquilidad en cada destino con coberturas de asistencia médica, cancelaciones y más.",
						},
						{
							name: "Seguros para Mascotas",
							description:
								"Protección para los miembros peludos de la familia.",
						},
						{
							name: "Seguros Agrícolas",
							description:
								"Soluciones diseñadas para proteger tu actividad agrícola y tus cultivos.",
						},
					],
				},
			],
			reasonsToChooseUs: [
				{
					title: "Atención personalizada",
					icon: "fas fa-headset",
					description:
						"Nos enfocamos en entender tus necesidades y en brindarte soluciones a medida.",
				},
				{
					title: "Rapidez y confianza",
					icon: "fas fa-bolt",
					description:
						"Procesos simplificados y asistencia inmediata cuando más lo necesitas.",
				},
				{
					title: "Experiencia comprobada",
					icon: "fas fa-thumbs-up",
					description:
						"Años de trayectoria respaldan la calidad de nuestros servicios.",
				},
			],
		};
	},
};
</script>

<style scoped>
.services-page {
	padding-top: 20px;
}

.section-title {
	font-size: 2.5rem;
	color: #003366;
	text-transform: uppercase;
	margin-bottom: 20px;
}

.intro-section p {
	font-size: 1.2rem;
	color: #444;
}

.services-section .card,
.why-choose-us-section .card {
	border: none;
	border-radius: 15px;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.services-section .card:hover,
.why-choose-us-section .card:hover {
	transform: translateY(-10px);
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.card-title {
	font-size: 1.5rem;
	font-weight: bold;
	color: #003366;
}

.service-icon,
.reason-icon {
	font-size: 3rem;
	color: #ff6600;
}

.about-us-section {
	padding: 30px;
	background-color: #f8f9fa;
	border-radius: 15px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.contact-section {
	background-color: #003366;
	color: #ffffff;
	padding: 40px;
	border-radius: 15px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.contact-info li {
	font-size: 1.2rem;
}

.highlight {
	font-size: 1.4rem;
	color: #ffcc00;
}

h3,
h4 {
	font-size: 1.8rem;
	color: #003366;
}
</style>
