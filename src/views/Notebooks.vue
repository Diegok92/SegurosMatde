<template>
	<div class="notebook-page">
		<!-- Imagen de Encabezado -->
		<div class="image-header">
			<img
				:src="getServiceImage('Note.PNG')"
				alt="Seguro de Notebooks"
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
					<label for="marcaNote" class="form-label">Marca</label>
					<select
						id="marcaNote"
						v-model="quoteData.marcaNote"
						class="form-control"
						required
					>
						<option value="" disabled>Seleccione una opción</option>
						<option v-for="marca in marcas" :key="marca" :value="marca">
							{{ marca }}
						</option>
					</select>
				</div>
				<div class="col-md-6">
					<label for="modeloNote" class="form-label">Modelo</label>
					<input
						type="text"
						id="modeloNote"
						v-model="quoteData.modeloNote"
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

		<!-- Información sobre el Seguro de Notebooks -->
		<section id="informacion" class="additional-info container my-5">
			<h2 class="section-title mb-4">
				Protección Integral para tus Dispositivos Portátiles
			</h2>
			<p>
				El seguro de notebooks protege tus dispositivos contra el robo o daño,
				garantizando que no sufras pérdidas económicas por eventos inesperados.
			</p>
			<div class="row">
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-shield-alt coverage-icon"></i>
							<h5 class="card-title mb-0">Cobertura Básica</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<ul>
								<li>Robo</li>
								<li>Daños accidentales</li>
								<li>Averías o mal funcionamiento</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-globe coverage-icon"></i>
							<h5 class="card-title mb-0">Coberturas Adicionales</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<ul>
								<li>Cobertura mundial para dispositivos en viajes</li>
								<li>Pérdida de datos</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<h3 class="section-title mb-4">Ejemplo de Cobertura</h3>
			<p>
				Si tu notebook se daña por una caída accidental, el seguro cubrirá el
				costo de reparación o reposición.
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
				email: "",
				telefono: "",
				marcaNote: "",
				modeloNote: "",
				sumaAsegurada: "",
			},
			marcas: [
				"Acer",
				"Apple",
				"Asus",
				"Banghó",
				"Dell",
				"HP",
				"Lenovo",
				"MSI",
				"Samsung",
				"Sony",
				"Otro",
			],
		};
	},
	methods: {
		submitQuote() {
			const now = new Date();
			const data = {
				HOJA: "Leads",
				PRODUCTO: "Notebooks",
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
}

.form-background {
	background-color: #f5f5f5;
	border-radius: 10px;
}

.card-no-border {
	border: none;
	box-shadow: none;
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
