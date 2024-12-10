<template>
	<div class="bicicletas-page container my-5">
		<h1 class="text-center mb-4">Seguro de Bicicletas</h1>

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
					<button type="submit" class="btn btn-primary w-100">
						Solicitar Cotización
					</button>
				</div>
			</form>
		</section>

		<!-- Información sobre el Seguro de Bicicletas -->
		<section id="informacion" class="mb-5">
			<h2 class="mb-4">Información sobre el Seguro de Bicicletas</h2>
			<p>
				Este seguro cubre la bicicleta del asegurado frente a diversos riesgos
				como robo, daño accidental o vandalismo.
			</p>

			<div class="row">
				<!-- Tarjeta: Cobertura Básica -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-lock"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Básica</h5>
							<p>
								Robo total, daño accidental, y cobertura por responsabilidad
								civil en caso de causar daños a terceros.
							</p>
						</div>
					</div>
				</div>

				<!-- Tarjeta: Coberturas Adicionales -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-tools"></i>
							</div>
							<h5 class="card-title text-center">Coberturas Adicionales</h5>
							<p>
								Daños a la bicicleta durante el transporte y asistencia mecánica
								en el lugar del siniestro.
							</p>
						</div>
					</div>
				</div>
			</div>
			<h3>Ejemplo</h3>
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
			// Obtener la fecha y hora actual
			const now = new Date();
			const year = now.getFullYear();
			const month = now.getMonth() + 1;
			const day = now.getDate();
			const hours = now.getHours();
			const minutes = now.getMinutes();

			// Crear los datos para enviar al App Script
			const data = {
				HOJA: "Leads", // Nombre de la hoja en Google Sheets
				PRODUCTO: "Bicicletas", // Producto específico para esta solicitud
				FECHA: now.toLocaleDateString(),
				AÑO: year,
				MES: month,
				DIA: day,
				"HH:MM": `${hours}:${minutes < 10 ? "0" + minutes : minutes}`,
				...this.quoteData,
			};

			// Utilizar un proxy para evitar problemas de CORS
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
.bicicletas-page {
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
	font-size: 2.5rem;
	color: #003366;
	margin-bottom: 15px;
}

.card-title {
	font-size: 1.3rem;
	font-weight: bold;
	color: #003366;
	text-align: center;
}

h2 {
	font-size: 1.8rem;
	color: #003366;
}

h3 {
	margin-top: 20px;
	color: #003366;
}

ul {
	list-style-type: disc;
	margin-left: 20px;
}
</style>
