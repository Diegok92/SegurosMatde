<template>
	<div class="todo-riesgo-operativo-page container my-5">
		<h1 class="text-center mb-4">Seguro de Todo Riesgo Operativo</h1>

		<section id="informacion" class="mb-5">
			<h2 class="mb-4">Información sobre Seguro de Todo Riesgo Operativo</h2>
			<p>
				El Seguro de Todo Riesgo Operativo es una cobertura integral diseñada
				para empresas, especialmente aquellas que manejan grandes activos,
				equipos y maquinaria. Este seguro cubre prácticamente cualquier riesgo
				que pueda interrumpir la operación del negocio, proporcionando una
				protección amplia frente a daños materiales y pérdidas económicas
				derivadas de esos daños.
			</p>

			<div class="row">
				<!-- Tarjeta: Cobertura Básica -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-warehouse"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Básica</h5>
							<ul>
								<li>
									<strong>Daños materiales:</strong> Cubre el daño o pérdida
									física de bienes, como instalaciones, maquinarias, equipos y
									otros activos tangibles, causados por accidentes, incendios,
									explosiones, vandalismo, derrumbes, o fenómenos naturales.
								</li>
								<li>
									<strong>Incendios y explosiones:</strong> Protege contra los
									daños materiales provocados por fuego, explosiones o
									cortocircuitos eléctricos.
								</li>
								<li>
									<strong>Robo y vandalismo:</strong> Cubre los daños y pérdidas
									derivados del robo de bienes o equipos, así como actos de
									vandalismo.
								</li>
								<li>
									<strong>Fenómenos naturales:</strong> Daños ocasionados por
									tormentas, inundaciones, granizo, terremotos, etc.
								</li>
								<li>
									<strong>Daños por agua:</strong> Protege contra daños
									ocasionados por fugas, rotura de cañerías o sistemas de
									drenaje.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta: Coberturas Adicionales -->
				<div class="col-md-6 mb-4">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-shield-alt"></i>
							</div>
							<h5 class="card-title text-center">Coberturas Adicionales</h5>
							<ul>
								<li>
									<strong>Pérdida de ingresos:</strong> Cubre la pérdida de
									ingresos derivada de la interrupción de las operaciones debido
									a un siniestro cubierto.
								</li>
								<li>
									<strong>Daños a maquinaria y equipo:</strong> Cubre las
									averías o daños accidentales a maquinaria pesada, equipos
									especializados, o cualquier otro equipo esencial para la
									operación de la empresa.
								</li>
								<li>
									<strong>Interrupción de la cadena de suministro:</strong>
									Cubre las pérdidas económicas causadas por la interrupción en
									la entrega de insumos o materiales esenciales.
								</li>
								<li>
									<strong>Responsabilidad civil:</strong> Protege contra las
									reclamaciones de terceros por daños personales o materiales
									causados durante las operaciones de la empresa.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<h3>Exclusiones Comunes</h3>
			<ul>
				<li>
					<strong>Daños por desgaste normal:</strong> No cubre los daños por
					envejecimiento o desgaste natural.
				</li>
				<li>
					<strong>Negligencia grave o dolo:</strong> No cubre daños causados
					intencionadamente o por negligencia extrema.
				</li>
				<li>
					<strong>Conflictos laborales:</strong> Los daños derivados de huelgas
					o disturbios laborales suelen estar excluidos, a menos que se contrate
					cobertura específica.
				</li>
				<li>
					<strong>Guerras y actos de terrorismo:</strong> Los daños derivados de
					guerras o terrorismo suelen estar excluidos, salvo que se incluya
					cobertura adicional.
				</li>
			</ul>

			<h3>Ejemplo de Uso</h3>
			<p>
				Imagina que una fábrica de productos electrónicos sufre un incendio que
				afecta su planta de producción. El seguro de Todo Riesgo Operativo
				cubriría los costos de reparación de la estructura dañada, la reposición
				de la maquinaria afectada y, si se incluye en la póliza, la pérdida de
				ingresos mientras la fábrica está fuera de servicio. Además, si el
				incendio afectara a terceros, como un vecino o un proveedor, la
				cobertura de responsabilidad civil protegería a la empresa de las
				demandas.
			</p>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.todo-riesgo-operativo-page {
	padding-top: 20px;
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

ul {
	font-size: 1rem;
	color: #666;
	margin-bottom: 15px;
	padding-left: 20px;
}

h2 {
	font-size: 1.8rem;
	color: #003366;
}

h3 {
	margin-top: 20px;
	color: #003366;
}
</style>
