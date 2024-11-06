<template>
	<div class="transport-page container my-5">
		<h1 class="text-center mb-4">Seguro de Transporte de Mercancías</h1>

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
					<label for="contacto" class="form-label">Nombre de Contacto</label>
					<input
						type="text"
						id="contacto"
						v-model="quoteData.contacto"
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
					<label for="tipoMercaderia" class="form-label"
						>Tipo de Mercadería a Transportar</label
					>
					<input
						type="text"
						id="tipoMercaderia"
						v-model="quoteData.tipoMercaderia"
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

		<!-- Información sobre Transporte de Mercancías -->
		<section id="informacion" class="mb-5">
			<h4>Cobertura Básica</h4>
			<p>
				Ampara: choque, vuelco, desbarrancamiento o descarrilamiento del
				vehículo transportador, derrumbe, caída de árboles o postes, incendio,
				explosión, rayo, huracán, ciclón, tornado, inundación, aluvión o alud,
				hechos de huelga y lock-out o motín, o tumulto popular, incluidos los de
				terrorismo, siempre que éstos se produzcan con motivo y en ocasión de
				los referidos acontecimientos, y descomposturas de cámara frigorífica a
				consecuencia de siniestro cubierto por accidentes.
			</p>

			<h4>Coberturas Adicionales</h4>
			<ul>
				<li>Eximición de Responsabilidad al Transportista</li>
				<li>Descompostura de Maquinaria Frigorífica</li>
				<li>Extensión de cobertura (desde o hacia) países limítrofes</li>
				<li>Robo</li>
				<li>
					Carga y Descarga: Daños y/o pérdidas durante operaciones de carga o
					descarga
				</li>
				<li>
					Mojadura: Daños y/o pérdidas por mojadura con vehículos
					transportadores debidamente protegidos
				</li>
				<li>Hurto y Falta de entrega</li>
				<li>Robo durante las operaciones de carga y descarga</li>
				<li>
					Daños a etiquetas y embalajes: Re etiquetado y reacondicionamiento
				</li>
				<li>
					Marcas: Eliminación de marcas o inscripciones según lo solicite el
					Asegurado
				</li>
				<li>Cláusula para artículos que forman juego y/o conjuntos</li>
				<li>Cláusula para maquinarias (reparación y/o reemplazo)</li>
				<li>Rotura: Daños por golpes o caídas durante el transporte</li>
				<li>Contaminación: Daños por contaminación</li>
				<li>Derrame: Daños y/o pérdidas por derrame</li>
				<li>
					Contacto con otra carga: Daños por contacto con otra carga
					transportada
				</li>
			</ul>

			<p class="mt-4">
				Nuestro equipo tiene como objetivo resolver, en un lapso de 72 horas,
				cualquier siniestro que pueda sufrir tu mercadería durante su
				transporte. Puerta a puerta.
			</p>
			<section id="informacion-adicional" class="mb-5">
				<h3>Ejemplo de Cobertura</h3>
				<p>
					Si una empresa transporta mercancías en un camión y este sufre un
					accidente, el seguro cubrirá la pérdida de las mercancías dañadas o
					destruidas.
				</p>
			</section>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			quoteData: {
				razonSocial: "",
				cuit: "",
				provincia: "",
				localidad: "",
				contacto: "",
				email: "",
				telefono: "",
				origen: "",
				destino: "",
				vigencia: "",
				tipoMercaderia: "",
				sumaAsegurada: "",
				tipoTransporte: "",
				modalidad: "",
				observaciones: "",
			},
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
.transport-page {
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

h3,
h4 {
	margin-top: 20px;
	color: #003366;
}

ul {
	list-style-type: disc;
	margin-left: 20px;
}
</style>
