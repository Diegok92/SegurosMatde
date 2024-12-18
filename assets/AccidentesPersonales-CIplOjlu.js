import{_ as m,a as v,b as u,c as p,d as g,e as b,f as _,g as f,h as P,i as q,j,k as T,l as D,m as H,n as x,o as y,p as e,w as S,q as i,v as d,r as C,s as n,t as I}from"./index-ClHuDfWr.js";const w={data(){return{quoteData:{profesion:"",cantidadPersonas:"",condicionIva:"",email:"",telefono:""}}},methods:{submitQuote(){const t=new Date,a={HOJA:"Leads",PRODUCTO:"AccidentesPersonales",FECHA:t.toLocaleDateString(),AÑO:t.getFullYear(),MES:t.getMonth()+1,DIA:t.getDate(),"HH:MM":`${t.getHours()}:${t.getMinutes()}`,...this.quoteData};v.post("https://cors-anywhere.herokuapp.com/"+"https://script.google.com/macros/s/AKfycbzQINUw9bE3dBw5bslOSO8CZS9vklSpFw-pOYA6iPwSwfRfBhkRp0z5RTvUIE22O2Q5/exec",new URLSearchParams(a)).then(()=>alert("Cotización solicitada y datos enviados a Google Sheets")).catch(()=>alert("Error al enviar la cotización"))},getServiceImage(t){return new URL(Object.assign({"../assets/images/imgTarjetasHome/AP.png":u,"../assets/images/imgTarjetasHome/Art.PNG":p,"../assets/images/imgTarjetasHome/Bici.PNG":g,"../assets/images/imgTarjetasHome/Caucion.jpeg":b,"../assets/images/imgTarjetasHome/Celu.PNG":_,"../assets/images/imgTarjetasHome/Consorcio.PNG":f,"../assets/images/imgTarjetasHome/Flotas.PNG":P,"../assets/images/imgTarjetasHome/MalaPraxis.jpeg":q,"../assets/images/imgTarjetasHome/Note.PNG":j,"../assets/images/imgTarjetasHome/TRO.PNG":T,"../assets/images/imgTarjetasHome/TrnspMerc.PNG":D,"../assets/images/imgTarjetasHome/comercio.PNG":H,"../assets/images/imgTarjetasHome/familiar.PNG":x})[`../assets/images/imgTarjetasHome/${t}`],import.meta.url).href}}},A={class:"fleet-page"},N={class:"image-header"},U=["src"],z={id:"cotizador",class:"cotizador-section container my-5"},E={class:"col-md-6"},h={class:"col-md-6"},G={class:"col-md-6"},M={class:"col-md-6"},R={class:"col-md-6"};function O(t,a,r,c,o,l){return I(),y("div",A,[e("div",N,[e("img",{src:l.getServiceImage("AP.png"),alt:"Accidentes Personales Image",class:"header-image"},null,8,U)]),e("section",z,[a[13]||(a[13]=e("h2",{class:"section-title mb-4"}," Dejanos tus datos y empezá a sentirte asegurado ",-1)),e("form",{onSubmit:a[5]||(a[5]=S((...s)=>l.submitQuote&&l.submitQuote(...s),["prevent"])),class:"row g-3 p-4 form-background"},[e("div",E,[a[6]||(a[6]=e("label",{for:"profesion",class:"form-label"},"Profesión",-1)),i(e("input",{type:"text",id:"profesion","onUpdate:modelValue":a[0]||(a[0]=s=>o.quoteData.profesion=s),class:"form-control",required:""},null,512),[[d,o.quoteData.profesion]])]),e("div",h,[a[7]||(a[7]=e("label",{for:"cantidadPersonas",class:"form-label"},"Cantidad de personas a cubrir",-1)),i(e("input",{type:"number",id:"cantidadPersonas","onUpdate:modelValue":a[1]||(a[1]=s=>o.quoteData.cantidadPersonas=s),class:"form-control",required:""},null,512),[[d,o.quoteData.cantidadPersonas]])]),e("div",G,[a[9]||(a[9]=e("label",{for:"condicionIva",class:"form-label"},"Condición de I.V.A.",-1)),i(e("select",{id:"condicionIva","onUpdate:modelValue":a[2]||(a[2]=s=>o.quoteData.condicionIva=s),class:"form-control",required:""},a[8]||(a[8]=[n('<option value="" disabled data-v-7d59c17d>Selecciona una opción</option><option value="Exento" data-v-7d59c17d>Exento</option><option value="Consumidor Final" data-v-7d59c17d>Consumidor Final</option><option value="Responsable Inscripto" data-v-7d59c17d>Responsable Inscripto</option><option value="No Categorizado" data-v-7d59c17d>No Categorizado</option><option value="Resp. Monotributo" data-v-7d59c17d>Resp. Monotributo</option>',6)]),512),[[C,o.quoteData.condicionIva]])]),e("div",M,[a[10]||(a[10]=e("label",{for:"email",class:"form-label"},"Email",-1)),i(e("input",{type:"email",id:"email","onUpdate:modelValue":a[3]||(a[3]=s=>o.quoteData.email=s),class:"form-control",required:""},null,512),[[d,o.quoteData.email]])]),e("div",R,[a[11]||(a[11]=e("label",{for:"telefono",class:"form-label"},"Teléfono",-1)),i(e("input",{type:"number",id:"telefono","onUpdate:modelValue":a[4]||(a[4]=s=>o.quoteData.telefono=s),class:"form-control",required:""},null,512),[[d,o.quoteData.telefono]])]),a[12]||(a[12]=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-custom w-100"}," Solicitar Cotización ")],-1))],32)]),a[14]||(a[14]=n('<section id="informacion" class="additional-info container my-5" data-v-7d59c17d><h2 class="section-title mb-4" data-v-7d59c17d> Protección contra Accidentes Personales </h2><p data-v-7d59c17d> Este seguro está diseñado para ofrecer una cobertura completa en caso de accidentes personales que puedan resultar en lesiones, invalidez o fallecimiento. Es ideal para personas que desean una protección adicional ante imprevistos. </p><p data-v-7d59c17d> El Seguro de Accidentes Personales se adapta a tus necesidades, ante cualquier accidente que puedas tener, ya sea realizando tus actividades laborales + in itinere o bien durante las 24 horas los 365 días del año. </p><div class="row" data-v-7d59c17d><div class="col-md-6 mb-4" data-v-7d59c17d><div class="card h-100 d-flex flex-column card-no-border" data-v-7d59c17d><div class="d-flex align-items-center" data-v-7d59c17d><i class="fas fa-user-shield coverage-icon" data-v-7d59c17d></i><h5 class="card-title mb-0" data-v-7d59c17d>Cobertura Básica</h5></div><div class="divider" data-v-7d59c17d></div><div class="card-body" data-v-7d59c17d><ul data-v-7d59c17d><li data-v-7d59c17d>Gastos médicos</li><li data-v-7d59c17d>Incapacidad temporal o permanente</li><li data-v-7d59c17d>Indemnización por fallecimiento</li></ul></div></div></div><div class="col-md-6 mb-4" data-v-7d59c17d><div class="card h-100 d-flex flex-column card-no-border" data-v-7d59c17d><div class="d-flex align-items-center" data-v-7d59c17d><i class="fas fa-medkit coverage-icon" data-v-7d59c17d></i><h5 class="card-title mb-0" data-v-7d59c17d>Coberturas Adicionales</h5></div><div class="divider" data-v-7d59c17d></div><div class="card-body" data-v-7d59c17d><ul data-v-7d59c17d><li data-v-7d59c17d>Tratamientos médicos prolongados</li><li data-v-7d59c17d>Rehabilitación</li></ul></div></div></div></div></section><section id="informacion-adicional" class="container my-5" data-v-7d59c17d><h3 class="section-title mb-4" data-v-7d59c17d>Ejemplo de Cobertura</h3><p data-v-7d59c17d> Un seguro de accidentes personales cubre el tratamiento médico y la pérdida de ingresos si sufres un accidente que te impide trabajar durante varios meses. </p></section>',2))])}const V=m(w,[["render",O],["__scopeId","data-v-7d59c17d"]]);export{V as default};