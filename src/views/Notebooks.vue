<template>
    <div class="notebook-page container my-5">
        <h1 class="text-center mb-4">Seguro de Notebooks</h1>

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
                    <input type="email" id="email" v-model="quoteData.email" class="form-control" required />
                </div>
                <div class="col-md-6">
                    <label for="marca" class="form-label">Marca</label>
                    <select id="marca" v-model="quoteData.marca" class="form-control" required>
                        <option value="" disabled>Seleccione una opción</option>
                        <option value="Acer">Acer</option>
                        <option value="Apple">Apple</option>
                        <option value="Asus">Asus</option>
                        <option value="Banghó">Banghó</option>
                        <option value="Dell">Dell</option>
                        <option value="HP">HP</option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="MSI">MSI</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Sony">Sony</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label for="modelo" class="form-label">Modelo</label>
                    <input type="text" id="modelo" v-model="quoteData.modelo" class="form-control" required />
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary w-100">Solicitar Cotización</button>
                </div>
            </form>
        </section>

        <!-- Información sobre el Seguro de Notebooks -->
        <section id="informacion" class="mb-5">
            <h2 class="mb-4">Protección Integral para tus Dispositivos Portátiles</h2>
            <p>
                Este seguro protege contra el robo o daño de notebooks y computadoras portátiles, garantizando que el
                asegurado no sufra pérdidas económicas por eventos inesperados.
            </p>

            <h3>Cobertura Básica</h3>
            <p>
                Robo, daños accidentales y, en algunos casos, averías o mal funcionamiento.
            </p>

            <h3>Coberturas Adicionales</h3>
            <ul>
                <li>Cobertura mundial para dispositivos utilizados en viajes</li>
                <li>Pérdida de datos</li>
            </ul>

            <h3>Ejemplo de Cobertura</h3>
            <p>
                Si tu notebook se daña por una caída accidental, el seguro cubrirá el costo de reparación o reposición.
            </p>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quoteData: {
                nombre: '',
                email: '',
                marca: '',
                modelo: '',
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
.notebook-page {
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
