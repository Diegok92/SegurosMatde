<template>
    <section class="hero animate__animated animate__fadeIn" data-aos="fade-in">
        <img :src="heroImage" alt="Hero Image" class="hero-image img-fluid" />
        <div class="hero-text">
            <h2 class="display-4">Protegemos lo que más valoras</h2>
            <p>Seguros para barcos, camiones y ART para empleados. Confianza y profesionalismo.</p>
        </div>
    </section>
</template>

<script>
import heroImage from '../assets/images/hero_image_matde.jpg';

export default {
    data() {
        return {
            heroImage
        };
    }
};
</script>

<style scoped>
.hero {
    position: relative;
    text-align: center;
    color: white;
    margin-top: 50px;
}

.hero-image {
    width: 100%;
    height: 70vh;
    object-fit: cover;
}

.hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
}

@media (max-width: 768px) {
    .hero-image {
        height: 40vh;
    }

    .hero-text h2 {
        font-size: 1.5rem;
    }

    .hero-text p {
        font-size: 1rem;
    }
}
</style>
