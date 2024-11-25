<template>
	<section id="partners" class="container my-5" data-aos="fade-right">
		<h2 class="text-center mb-4">Socios Estratégicos</h2>
		<div class="row justify-content-center">
			<div
				v-for="(logo, index) in partnersLogos"
				:key="index"
				class="col-6 col-md-3 mb-4 text-center"
			>
				<img
					:src="logo"
					:alt="'Logo ' + (index + 1)"
					class="img-fluid partner-logo"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import AndinaArt from "../assets/images/Logos/AndinaArt.jpg";
import BerkleyArt from "../assets/images/Logos/BerkleyArt.jpg";
import ExpertaArt from "../assets/images/Logos/ExpertaArt.jpg";
import GalenoArtJpg from "../assets/images/Logos/GalenoArt.jpg";
import GalenoArtPng from "../assets/images/Logos/GalenoArt.png";
import OmintArt from "../assets/images/Logos/OmintArt.jpg";
import PatronalArt from "../assets/images/Logos/PatronalArt.png";
import PrevencionSancorArt from "../assets/images/Logos/PrevencionSancorArt.jpg";
import ProvinciaArt from "../assets/images/Logos/ProvinciaArt.jpg";
import SmgArt from "../assets/images/Logos/SmgArt.svg";

export default {
	data() {
		return {
			partnersLogos: [
				AndinaArt,
				BerkleyArt,
				ExpertaArt,
				GalenoArtJpg,
				GalenoArtPng,
				OmintArt,
				PatronalArt,
				PrevencionSancorArt,
				ProvinciaArt,
				SmgArt,
			],
		};
	},
};
</script>

<style scoped>
#partners {
	padding: 50px 0;
}

.partner-logo {
	max-width: 150px; /* Ajusta el tamaño según sea necesario */
	height: auto;
	object-fit: contain;
	transition: transform 0.3s ease;
}

.partner-logo:hover {
	transform: scale(1.1); /* Efecto de hover para resaltar los logos */
}
</style>
