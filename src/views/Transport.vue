<template>
	<div class="fleet-page">
		<!-- Imagen Encabezado -->
		<div class="image-header">
			<img
				:src="getServiceImage('TrnspMerc.PNG')"
				alt="Transporte de Mercancías Image"
				class="header-image"
			/>
		</div>

		<!-- Cotizador Web -->
		<section id="cotizador" class="cotizador-section container my-5">
			<h2 class="section-title mb-4">Cotizador Web</h2>
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
					<label for="nombre" class="form-label">Nombre de Contacto</label>
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
					<button type="submit" class="btn btn-custom w-100">
						Solicitar Cotización
					</button>
				</div>
			</form>
		</section>

		<!-- Información sobre Transporte de Mercancías -->
		<section id="informacion" class="additional-info container my-5">
			<h2 class="section-title mb-4">Cobertura Básica</h2>
			<p>
				Ampara: choque, vuelco, desbarrancamiento o descarrilamiento del
				vehículo transportador, derrumbe, caída de árboles o postes, incendio,
				explosión, rayo, huracán, ciclón, tornado, inundación, aluvión o alud,
				hechos de huelga y lock-out o motín, o tumulto popular, incluidos los de
				terrorismo, siempre que éstos se produzcan con motivo y en ocasión de
				los referidos acontecimientos, y descomposturas de cámara frigorífica a
				consecuencia de siniestro cubierto por accidentes.
			</p>

			<h2 class="section-title mb-4">Coberturas Adicionales</h2>
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

			<h3 class="section-title mb-4">Ejemplo de Cobertura</h3>
			<p>
				Si una empresa transporta mercancías en un camión y este sufre un
				accidente, el seguro cubrirá la pérdida de las mercancías dañadas o
				destruidas.
			</p>
		</section>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			quoteData: {
				razonSocial: "",
				cuit: "",
				nombre: "",
				email: "",
				telefono: "",
				tipoMercaderia: "",
			},
		};
	},
	methods: {
		submitQuote() {
			const now = new Date();
			const data = {
				HOJA: "Leads",
				PRODUCTO: "Transporte",
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

.btn-custom {
	background-color: #ff6600;
	color: #fff;
	transition: background-color 0.3s;
}

.btn-custom:hover {
	background-color: #d94e00;
}

ul {
	list-style-type: disc;
	margin-left: 20px;
}
</style>
