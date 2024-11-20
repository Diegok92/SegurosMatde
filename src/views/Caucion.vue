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

		<section id="informacion" class="mb-5">
			<h2 class="mb-4">Ofrecemos:</h2>

			<div class="row">
				<!-- Tarjeta 1: Garantías para obras o servicios públicos y privados -->
				<div class="col-md-4 mb-4" data-aos="fade-up">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-tools"></i>
							</div>
							<h5 class="card-title text-center">Obras y Servicios Públicos</h5>
							<ul class="card-content">
								<li>Mantenimiento de la oferta.</li>
								<li>Ejecución de contrato / garantía de adjudicación.</li>
								<li>Sustitución de fondos de reparos.</li>
								<li>Anticipos por acopio o financieros.</li>
								<li>Tenencia de materiales.</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta 2: Garantías IATA -->
				<div class="col-md-4 mb-4" data-aos="fade-up">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-plane"></i>
							</div>
							<h5 class="card-title text-center">Garantías IATA</h5>
							<p class="card-content">
								Garantías solicitadas por la Asociación Internacional de
								Transporte Aéreo (IATA) para agencias de viajes y carga.
							</p>
							<ul class="card-content">
								<li>Para agencias de carga IATA</li>
								<li>Para agencias de viaje IATA</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta 3: Garantías Aduaneras -->
				<div class="col-md-4 mb-4" data-aos="fade-up">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-warehouse"></i>
							</div>
							<h5 class="card-title text-center">Garantías Aduaneras</h5>
							<p class="card-content">
								Instrumentos financieros para asegurar el pago de impuestos y
								aranceles en operaciones aduaneras.
							</p>
							<ul class="card-content">
								<li>Falta de documentación.</li>
								<li>Importación y exportación temporal.</li>
								<li>Operadores portuarios y depósitos fiscales.</li>
								<li>Sumario contencioso y recurso administrativo.</li>
								<li>Otros.</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta 4: Garantía de actividad o profesión -->
				<div class="col-md-4 mb-4" data-aos="fade-up">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-briefcase"></i>
							</div>
							<h5 class="card-title text-center">Garantía de Profesión</h5>
							<p class="card-content">
								Garantizan el pago de multas y protección al consumidor en caso
								de incumplimiento profesional.
							</p>
							<ul class="card-content">
								<li>Directores y gerentes.</li>
								<li>Agentes de lotería, martilleros, corredores.</li>
								<li>
									Agencias de seguridad y talleres de verificación técnica.
								</li>
								<li>Operadores de GNC y distribuidoras de combustibles.</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta 5: Garantías Judiciales -->
				<div class="col-md-4 mb-4" data-aos="fade-up">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-gavel"></i>
							</div>
							<h5 class="card-title text-center">Garantías Judiciales</h5>
							<p class="card-content">
								Se utilizan en contratos de concesión otorgados por entidades
								para operar o desarrollar servicios públicos.
							</p>
						</div>
					</div>
				</div>

				<!-- Tarjeta 6: Garantías de Concesiones -->
				<div class="col-md-4 mb-4" data-aos="fade-up">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-handshake"></i>
							</div>
							<h5 class="card-title text-center">Garantías de Concesiones</h5>
							<p class="card-content">
								Para empresas que operan, desarrollan o mantienen
								infraestructura o servicios públicos por concesión.
							</p>
						</div>
					</div>
				</div>

				<!-- Tarjeta 7: Garantías de cumplimiento de turismo estudiantil -->
				<div class="col-md-4 mb-4" data-aos="fade-up">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-graduation-cap"></i>
							</div>
							<h5 class="card-title text-center">Turismo Estudiantil</h5>
							<p class="card-content">
								Garantiza la prestación de servicios básicos contratados por
								agencias de turismo estudiantil.
							</p>
						</div>
					</div>
				</div>

				<!-- Tarjeta 8: Garantía de alquiler -->
				<div class="col-md-4 mb-4" data-aos="fade-up">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-home"></i>
							</div>
							<h5 class="card-title text-center">Garantía de Alquiler</h5>
							<p class="card-content">
								Garantiza el pago del alquiler al propietario del inmueble.
							</p>
						</div>
					</div>
				</div>

				<!-- Tarjeta 9: Garantía del Cumplimiento de Obligaciones -->
				<div class="col-md-4 mb-4" data-aos="fade-up">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-check-circle"></i>
							</div>
							<h5 class="card-title text-center">
								Cumplimiento de Obligaciones
							</h5>
							<p class="card-content">
								Garantiza el cumplimiento de obligaciones contractuales,
								indemnizando en caso de incumplimiento.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Nueva Sección de Información Adicional -->
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
export default {
	data() {
		return {
			formData: {
				nombre: "",
				razonSocial: "",
				telefono: "",
				email: "",
			},
		};
	},
	methods: {
		submitForm() {
			alert("Cotización solicitada con éxito");
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
