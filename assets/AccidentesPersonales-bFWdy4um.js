import{_ as m,a as u,b as v,c as p,d as f,e as g,f as b,g as _,h as j,i as P,j as T,k as q,l as x,m as H,n as C,o as y,p as D,q as I,r as a,s as r,w as A,t as l,v as n,u as S,x as w}from"./index-Dptb1rD0.js";const z={data(){return{quoteData:{profesion:"",cantidadPersonas:"",condicionIva:"",email:"",telefono:""}}},methods:{scrollToForm(){document.getElementById("cotizador").scrollIntoView({behavior:"smooth"})},submitQuote(){const t=new Date,e={HOJA:"Leads",PRODUCTO:"AccidentesPersonales",FECHA:t.toLocaleDateString(),AÑO:t.getFullYear(),MES:t.getMonth()+1,DIA:t.getDate(),"HH:MM":`${t.getHours()}:${t.getMinutes()}`,...this.quoteData};u.post("https://cors-anywhere.herokuapp.com/"+"https://script.google.com/macros/s/AKfycbzQINUw9bE3dBw5bslOSO8CZS9vklSpFw-pOYA6iPwSwfRfBhkRp0z5RTvUIE22O2Q5/exec",new URLSearchParams(e)).then(()=>alert("Cotización solicitada y datos enviados a Google Sheets")).catch(()=>alert("Error al enviar la cotización"))},getServiceImage(t){return new URL(Object.assign({"../assets/images/imgTarjetasHome/AP.jpg":v,"../assets/images/imgTarjetasHome/Art.PNG":p,"../assets/images/imgTarjetasHome/Art.jpg":f,"../assets/images/imgTarjetasHome/Bici.PNG":g,"../assets/images/imgTarjetasHome/Caucion.jpeg":b,"../assets/images/imgTarjetasHome/Celu.PNG":_,"../assets/images/imgTarjetasHome/Consorcio.PNG":j,"../assets/images/imgTarjetasHome/Flotas.PNG":P,"../assets/images/imgTarjetasHome/MalaPraxis.jpeg":T,"../assets/images/imgTarjetasHome/Note.PNG":q,"../assets/images/imgTarjetasHome/TRO.PNG":x,"../assets/images/imgTarjetasHome/TrnspMerc.PNG":H,"../assets/images/imgTarjetasHome/comercio.jpg":C,"../assets/images/imgTarjetasHome/edificio.jpg":y,"../assets/images/imgTarjetasHome/familiar.PNG":D})[`../assets/images/imgTarjetasHome/${t}`],import.meta.url).href}}},N={class:"fleet-page"},U={class:"header-container d-flex align-items-center"},E={class:"header-text"},M={class:"header-image"},R=["src"],G={id:"cotizador",class:"cotizador-section container my-5"},O={class:"col-md-6"},h={class:"col-md-6"},k={class:"col-md-6"},F={class:"col-md-6"},V={class:"col-md-6"};function B(t,e,d,c,o,i){return w(),I("div",N,[a("div",U,[a("div",E,[e[7]||(e[7]=a("h1",null,"Accidentes Personales",-1)),e[8]||(e[8]=a("p",null," Cobertura para lesiones, invalidez o fallecimiento causados por accidentes. ",-1)),a("button",{onClick:e[0]||(e[0]=(...s)=>i.scrollToForm&&i.scrollToForm(...s)),class:"btn btn-custom"}," Contactanos! ")]),a("div",M,[a("img",{src:i.getServiceImage("AP.jpg"),alt:"Accidentes Personales Image"},null,8,R)])]),e[17]||(e[17]=r('<section id="informacion" class="additional-info container my-5" data-v-46763fc9><h2 class="section-title mb-4" data-v-46763fc9> Protección contra Accidentes Personales </h2><p data-v-46763fc9> Este seguro está diseñado para ofrecer una cobertura completa en caso de accidentes personales que puedan resultar en lesiones, invalidez o fallecimiento. Es ideal para personas que desean una protección adicional ante imprevistos. </p><p data-v-46763fc9> El Seguro de Accidentes Personales se adapta a tus necesidades, ante cualquier accidente que puedas tener, ya sea realizando tus actividades laborales + in itinere o bien durante las 24 horas los 365 días del año. </p><div class="row" data-v-46763fc9><div class="col-md-6 mb-4" data-v-46763fc9><div class="card h-100 d-flex flex-column card-no-border" data-v-46763fc9><div class="d-flex align-items-center" data-v-46763fc9><i class="fas fa-user-shield coverage-icon" data-v-46763fc9></i><h5 class="card-title mb-0" data-v-46763fc9>Cobertura Básica</h5></div><div class="divider" data-v-46763fc9></div><div class="card-body" data-v-46763fc9><ul data-v-46763fc9><li data-v-46763fc9>Gastos médicos</li><li data-v-46763fc9>Incapacidad temporal o permanente</li><li data-v-46763fc9>Indemnización por fallecimiento</li></ul></div></div></div><div class="col-md-6 mb-4" data-v-46763fc9><div class="card h-100 d-flex flex-column card-no-border" data-v-46763fc9><div class="d-flex align-items-center" data-v-46763fc9><i class="fas fa-medkit coverage-icon" data-v-46763fc9></i><h5 class="card-title mb-0" data-v-46763fc9>Coberturas Adicionales</h5></div><div class="divider" data-v-46763fc9></div><div class="card-body" data-v-46763fc9><ul data-v-46763fc9><li data-v-46763fc9>Tratamientos médicos prolongados</li><li data-v-46763fc9>Rehabilitación</li></ul></div></div></div></div></section>',1)),a("section",G,[e[16]||(e[16]=a("h2",{class:"section-title mb-4"}," Dejanos tus datos y empezá a sentirte seguro ",-1)),a("form",{onSubmit:e[6]||(e[6]=A((...s)=>i.submitQuote&&i.submitQuote(...s),["prevent"])),class:"row g-3 p-4 form-background"},[a("div",O,[e[9]||(e[9]=a("label",{for:"profesion",class:"form-label"},"Profesión",-1)),l(a("input",{type:"text",id:"profesion","onUpdate:modelValue":e[1]||(e[1]=s=>o.quoteData.profesion=s),class:"form-control",required:""},null,512),[[n,o.quoteData.profesion]])]),a("div",h,[e[10]||(e[10]=a("label",{for:"cantidadPersonas",class:"form-label"},"Cantidad de personas a cubrir",-1)),l(a("input",{type:"number",id:"cantidadPersonas","onUpdate:modelValue":e[2]||(e[2]=s=>o.quoteData.cantidadPersonas=s),class:"form-control",required:""},null,512),[[n,o.quoteData.cantidadPersonas]])]),a("div",k,[e[12]||(e[12]=a("label",{for:"condicionIva",class:"form-label"},"Condición de I.V.A.",-1)),l(a("select",{id:"condicionIva","onUpdate:modelValue":e[3]||(e[3]=s=>o.quoteData.condicionIva=s),class:"form-control",required:""},e[11]||(e[11]=[r('<option value="" disabled data-v-46763fc9>Selecciona una opción</option><option value="Exento" data-v-46763fc9>Exento</option><option value="Consumidor Final" data-v-46763fc9>Consumidor Final</option><option value="Responsable Inscripto" data-v-46763fc9>Responsable Inscripto</option><option value="No Categorizado" data-v-46763fc9>No Categorizado</option><option value="Resp. Monotributo" data-v-46763fc9>Resp. Monotributo</option>',6)]),512),[[S,o.quoteData.condicionIva]])]),a("div",F,[e[13]||(e[13]=a("label",{for:"email",class:"form-label"},"Email",-1)),l(a("input",{type:"email",id:"email","onUpdate:modelValue":e[4]||(e[4]=s=>o.quoteData.email=s),class:"form-control",required:""},null,512),[[n,o.quoteData.email]])]),a("div",V,[e[14]||(e[14]=a("label",{for:"telefono",class:"form-label"},"Teléfono",-1)),l(a("input",{type:"number",id:"telefono","onUpdate:modelValue":e[5]||(e[5]=s=>o.quoteData.telefono=s),class:"form-control",required:""},null,512),[[n,o.quoteData.telefono]])]),e[15]||(e[15]=a("div",{class:"col-12"},[a("button",{type:"submit",class:"btn btn-custom w-100"}," Solicitar Cotización ")],-1))],32)]),e[18]||(e[18]=a("section",{id:"informacion-adicional",class:"container my-5"},[a("h3",{class:"section-title mb-4"},"Ejemplo de Cobertura"),a("p",null," Un seguro de accidentes personales cubre el tratamiento médico y la pérdida de ingresos si sufres un accidente que te impide trabajar durante varios meses. ")],-1))])}const L=m(z,[["render",B],["__scopeId","data-v-46763fc9"]]);export{L as default};
