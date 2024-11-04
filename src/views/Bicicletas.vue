<template>
    <div class="bicicletas-page container my-5">
        <h1 class="text-center mb-4">Seguro de Bicicletas</h1>

        <!-- Cotizador Web -->
        <section id="cotizador" class="cotizador-section mb-5">
            <h2 class="mb-4">Cotizador Web</h2>
            <form @submit.prevent="submitQuote" class="row g-3">
                <div class="col-md-6">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" id="nombre" v-model="quoteData.nombre" class="form-control" required />
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" v-model="quoteData.nombre" class="form-control" required />
                </div>
                <div class="col-md-6">
                    <label for="marca" class="form-label">Marca</label>
                    <select id="marca" v-model="quoteData.marca" class="form-control" required>
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
                    <label for="marcaModelo" class="form-label">Modelo</label>
                    <input type="text" id="marcaModelo" v-model="quoteData.marcaModelo" class="form-control" required />
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary w-100">Solicitar Cotización</button>
                </div>
            </form>
        </section>

        <!-- Información sobre el Seguro de Bicicletas -->
        <section id="informacion" class="mb-5">
            <h2 class="mb-4">Información sobre el Seguro de Bicicletas</h2>
            <p>
                Este seguro cubre la bicicleta del asegurado frente a diversos riesgos como robo, daño accidental o
                vandalismo.
            </p>
            <ul>
                <li><strong>Cobertura básica:</strong> Robo total, daño accidental, y cobertura por responsabilidad
                    civil en caso de causar daños a terceros.</li>
                <li><strong>Coberturas adicionales:</strong> Daños a la bicicleta durante el transporte y asistencia
                    mecánica en el lugar del siniestro.</li>
                <li><strong>Ejemplo:</strong> Si tu bicicleta es robada mientras está estacionada en la vía pública, el
                    seguro cubrirá el costo de reposición.</li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quoteData: {
                nombre: '',
                marca: '',
                tipoBicicleta: '',
                marcaModelo: '',
                email: '',
            },
        };
    },
    methods: {
        submitQuote() {
            alert('Cotización solicitada');
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
