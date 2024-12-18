<template>
	<div class="bicicletas-page">
		<!-- Imagen Encabezado -->
		<div class="image-header">
			<img
				:src="getServiceImage('Bici.PNG')"
				alt="Seguro de Bicicletas"
				class="header-image"
			/>
		</div>

		<!-- Cotizador Web -->
		<section id="cotizador" class="cotizador-section container my-5">
			<h2 class="section-title mb-4">Solicita tu Cotización</h2>
			<form @submit.prevent="submitQuote" class="row g-3 p-4 form-background">
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
					<label for="marcaBici" class="form-label">Marca</label>
					<select
						id="marcaBici"
						v-model="quoteData.marcaBici"
						class="form-control"
						required
					>
						<option value="" disabled>Seleccione una opción</option>
						<option value="Aurora">Aurora</option>
						<option value="Cannondale">Cannondale</option>
						<option value="Giant">Giant</option>
						<option value="Merida">Merida</option>
						<option value="Olmo">Olmo</option>
						<option value="Scott">Scott</option>
						<option value="Specialized">Specialized</option>
						<option value="Trek">Trek</option>
						<option value="Vairo">Vairo</option>
						<option value="Venzo">Venzo</option>
						<option value="Otro">Otro</option>
					</select>
				</div>
				<div class="col-md-6">
					<label for="modeloBici" class="form-label">Modelo</label>
					<input
						type="text"
						id="modeloBici"
						v-model="quoteData.modeloBici"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="sumaAsegurada" class="form-label">Suma Asegurada</label>
					<input
						type="number"
						id="sumaAsegurada"
						v-model="quoteData.sumaAsegurada"
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

		<!-- Información sobre el Seguro de Bicicletas -->
		<section id="informacion" class="additional-info container my-5">
			<h2 class="section-title mb-4">Protección para tu Bicicleta</h2>
			<p>
				El seguro cubre tu bicicleta frente a riesgos como robo, daños
				accidentales y vandalismo, brindándote tranquilidad y seguridad.
			</p>

			<div class="row">
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-lock coverage-icon"></i>
							<h5 class="card-title mb-0">Cobertura Básica</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<p>
								Robo total, daño accidental y cobertura por responsabilidad
								civil en caso de causar daños a terceros.
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-tools coverage-icon"></i>
							<h5 class="card-title mb-0">Coberturas Adicionales</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<p>
								Cobertura por daños durante el transporte y asistencia mecánica
								en el lugar del siniestro.
							</p>
						</div>
					</div>
				</div>
			</div>

			<h3 class="section-title mb-4">Ejemplo</h3>
			<p>
				Si tu bicicleta es robada mientras está estacionada en la vía pública,
				el seguro cubrirá el costo de reposición.
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
				nombre: "",
				marcaBici: "",
				modeloBici: "",
				email: "",
				telefono: "",
				sumaAsegurada: "",
			},
		};
	},
	methods: {
		submitQuote() {
			const now = new Date();
			const data = {
				HOJA: "Leads",
				PRODUCTO: "Bicicletas",
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
