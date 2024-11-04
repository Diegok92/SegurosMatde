<template>
    <section id="contact" class="container my-5 animate__animated animate__fadeIn">
        <h2 class="text-center mb-4">Contacto</h2>
        <div class="row justify-content-center">
            <div class="col-md-6 text-center">
                <img :src="contactImage" alt="Contacto" class="img-fluid mb-3" />
                <p>Para más información, contacta a nuestros agentes especializados. Estamos aquí para ayudarte.</p>
                <form @submit.prevent="submitForm" class="text-start">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" id="name" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo Electrónico</label>
                        <input type="email" id="email" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="subject" class="form-label">Asunto</label>
                        <input type="text" id="subject" class="form-control" required />
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Mensaje</label>
                        <textarea id="message" class="form-control" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Enviar</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import contactImage from '../assets/images/contact_image.jpg';

export default {
    data() {
        return {
            contactImage
        };
    },
    methods: {
        submitForm() {
            alert('Formulario enviado');
        }
    }
};
</script>

<style scoped>
#contact {
    padding: 50px 0;
}

img {
    border-radius: 10px;
}
</style>
