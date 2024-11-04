<template>
    <div class="celulares-page container my-5">
        <h1 class="text-center mb-4">Seguro de Celulares</h1>

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
                        <option value="Apple">Apple</option>
                        <option value="Huawei">Huawei</option>
                        <option value="LG">LG</option>
                        <option value="Motorola">Motorola</option>
                        <option value="Nokia">Nokia</option>
                        <option value="OnePlus">OnePlus</option>
                        <option value="Realme">Realme</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Xiaomi">Xiaomi</option>
                        <option value="ZTE">ZTE</option>
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

        <!-- Información sobre el Seguro de Celulares -->
        <section id="informacion" class="mb-5">
            <h2 class="mb-4">Protección para tu Smartphone</h2>
            <p>
                El seguro de celulares cubre el dispositivo frente a robo, daños accidentales o problemas técnicos. Es
                ideal para proteger smartphones, que suelen tener un valor significativo.
            </p>

            <h3>Cobertura Básica</h3>
            <p>
                Robo y daños accidentales (pantalla rota, inmersión en agua).
            </p>

            <h3>Coberturas Adicionales</h3>
            <ul>
                <li>Cobertura para uso en el extranjero</li>
                <li>Fallas técnicas fuera de la garantía</li>
            </ul>

            <h3>Ejemplo de Cobertura</h3>
            <p>
                Si tu teléfono cae y se rompe la pantalla, el seguro cubrirá los costos de reparación.
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
.celulares-page {
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
