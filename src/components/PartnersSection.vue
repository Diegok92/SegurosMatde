<template>
    <section id="partners" class="container my-5" data-aos="fade-right">
        <h2 class="text-center mb-4">Socios Estratégicos</h2>
        <div class="row justify-content-center">
            <div class="col-md-8 text-center">
                <img :src="partnersImage" alt="Partners" class="img-fluid" />
            </div>
        </div>
    </section>
</template>

<script>
import partnersImage from '../assets/images/partners_image.jpg';

export default {
    data() {
        return {
            partnersImage
        };
    }
};
</script>

<style scoped>
#partners {
    padding: 50px 0;
}
</style>
