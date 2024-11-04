import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Services from "./views/Services.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Art from "./views/ART.vue";
import Transport from "./views/Transport.vue";
import Caucion from "./views/Caucion.vue";
import Notebooks from "./views/Notebooks.vue";
import Celulares from "./views/Celulares.vue";
import Comercio from "./views/Comercio.vue";
import Consorcio from "./views/Consorcio.vue";
import Flotas from "./views/Flotas.vue";
import CombinadoFamiliar from "./views/Combinado-Familiar.vue";
import MalaPraxis from "./views/MalaPraxis.vue";
import TodoRiesgoOperativo from "./views/TodoRiesgoOperativo.vue";
import Bicicletas from "./views/Bicicletas.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/services",
		name: "Services",
		component: Services,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact,
	},
	{
		path: "/art",
		name: "ART",
		component: Art,
	},
	{
		path: "/transport",
		name: "Transport",
		component: Transport,
	},
	{
		path: "/caucion",
		name: "Caucion",
		component: Caucion,
	},
	{
		path: "/notebooks",
		name: "Notebooks",
		component: Notebooks,
	},
	{
		path: "/celulares",
		name: "Celulares",
		component: Celulares,
	},
	{
		path: "/comercio",
		name: "Comercio",
		component: Comercio,
	},
	{
		path: "/consorcio",
		name: "Consorcio",
		component: Consorcio,
	},
	{
		path: "/flotas",
		name: "Flotas",
		component: Flotas,
	},
	{
		path: "/combinado-familiar",
		name: "CombinadoFamiliar",
		component: CombinadoFamiliar,
	},
	{
		path: "/mala-praxis",
		name: "MalaPraxis",
		component: MalaPraxis,
	},
	{
		path: "/todo-riesgo-operativo",
		name: "TodoRiesgoOperativo",
		component: TodoRiesgoOperativo, // Nueva ruta
	},
	{
		path: "/bicicletas",
		name: "Bicicletas",
		component: Bicicletas, // Nueva ruta
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
