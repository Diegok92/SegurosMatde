<template>
	<div class="services">
		<ServicesSection />
		<ArtSection />
		<TransportSection />
		<FleetSection />
		<LiabilitySection />
	</div>
</template>

<script>
import ServicesSection from "../components/ServicesSection.vue";
import ArtSection from "../components/ArtSection.vue";
import TransportSection from "../components/TransportSection.vue";
import FleetSection from "../components/FleetSection.vue";
import LiabilitySection from "../components/LiabilitySection.vue";

export default {
	components: {
		ServicesSection,
		// ArtSection,
		// TransportSection,
		// FleetSection,
		// LiabilitySection,
	},
};
</script>
