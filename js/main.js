


//  con este codigo abrimos y cerramos la navegacion en celulares

addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton")

    boton.addEventListener("click", () => {
                console.log("funciona")
                const menu = document.getElementById("menu")
                menu.classList.toggle("show")
                
            }
                ) 
         
    const icono = document.querySelector(".img_menu1")
    
    
    icono.addEventListener("click", ()=>  {
        console.log("hola");
    })
})

//  con este codigo abrimos y cerramos la navegacion en celulares



const templates={
    // dentro de ese "inicio" esta el HTML que aparece cuando seleccionamos inicio en la barra de navegacion
    inicio:`
        <div id="inicio" class="active">
            <h2>Productos:</h2>  
            <ul v-for="i in recetas">
                <li> <h3>{{i.nombre}}</h3>
                    <br><img v-bind:src="i.foto"><br>
                    <p>Detalles: {{i.detalles}}</p>
                    <p>Beneficios: {{i.beneficios}}</p>    
                </li>
            </ul>
        </div>`,

    mieles:`
        <div id="mieles" class="mieles active">
            <ul v-for="i in miel" class="mieles__ul">
                <li class="mieles__ul-li"> 

                    <div class="mieles__ul-li-div-1">
                        <img v-bind:src="i.foto" class="mieles__ul-li-div-img">
                        <h3 class="mieles__ul-li-div-h3 especial__mieles-h3"> {{i.tipoDeMiel}} </h3>
                    </div>

                    <div class="mieles__ul-li-div-2">
                        <h3 class="mieles__ul-li-div-h3" > {{i.tipoDeMiel}} </h3>
                        <p class="mieles__ul-li-div-p" > {{i.detalleDeMiel}} </p>
                    </div>
 
                 </li>
            </ul>
        </div>`,
    contact:`
        <div id="contact" class="container active">
            <h2>Contacto</h2>
            <p>Envíame tus sugerenciasde recetas a mi correo: <a :href=  ' "mailto:"+mail'   >{{mail}}</a></p>       
        </div>`,
    about:`
        <div id="about" class="container active">
            <h2> A cerca nosotros </h2>
            <br>
            <img v-bind:src="imagen"   >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
        </div>`,
    location:`
        <div id="location" class="container active">         
            <h2>Sucursales</h2>
            <table>
                <tr>
                    <th>Local</th>
                    <th>Direccion</th>
                    <th>Ubicacion</th>
                    <th>Mapa</th>
                </tr>
                <tr v-for="elemento in locales">
                    <td>{{elemento.nombre}}</td>
                    <td>{{elemento.direccion}}</td>
                    <td><a v-bind:href="elemento.link"> </a></td>
                    <td><iframe id="mapasi" v-bind:src="elemento.iframe"  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><td>
                </tr>

            </table>
        </div>`,
    registration:`
    <form action="" class="formulario" id="formulario">
            <div class="formulario_grupo" id="grupo_nombre">
                <label for="nombre" class="formulario_label">Nombre y apellido</label>
                <div class="formulario_grupo_input">
                    <input type="text" class="formulario_input" name="nombre" id="nombre" placeholder="Horacio Perez">
                    <i class="formulario_validacion material-symbols-outlined">
                        close
                        </i>
                </div>
                <p class="formulario_input_error">El nombre y apellido tiene que ser de 4 a 16 digitos y solo puede contener letras y espacios</p>
            </div>
            <!-- Email -->
               <div class="formulario_grupo" id="grupo_email">
                   <label for="email" class="formulario_label">Email</label>
                   <div class="formulario_grupo_input">
                       <input type="email" class="formulario_input" name="email" id="email" placeholder="horacioperez@email.com">
                       <i class="formulario_validacion material-symbols-outlined">
                           close
                           </i>
                   </div>
                   <p class="formulario_input_error">El Email solo puede contener letras, numeros, puntos y guion bajo</p>
               </div>
               <!-- Telefono -->
               <div class="formulario_grupo" id="grupo_telefono">
                   <label for="telefono" class="formulario_label">Telefono</label>
                   <div class="formulario_grupo_input">
                       <input type="tel" class="formulario_input" name="telefono" id="telefono" placeholder="1146578394">
                       <i class="formulario_validacion material-symbols-outlined">
                           close
                           </i>
                   </div>
                   <p class="formulario_input_error">El telefono solo puede tener numeros y un maximo de 12 digitos</p>
               </div>
   
   
           <!-- contraseña -->
               <div class="formulario_grupo" id="grupo_password">
                   <label for="password" class="formulario_label">Contraseña</label>
                   <div class="formulario_grupo_input">
                       <input type="password" class="formulario_input" name="password" id="password">
                       <i class="formulario_validacion material-symbols-outlined">
                           close
                           </i>
                   </div>
                   <p class="formulario_input_error">La contraseña debe ser de 4 a 12 digitos</p>
               </div>
   
               
           <!-- Confirmar contraseña -->
           <div class="formulario_grupo" id="grupo_confirmar_password">
               <label for="confirmar_password" class="formulario_label">Confirmar contraseña</label>
               <div class="formulario_grupo_input">
                   <input type="password" class="formulario_input" name="confirmar_password" id="confirmar_password">
                   <i class="formulario_validacion material-symbols-outlined">
                       close
                       </i>
               </div>
               <p class="formulario_input_error">Las contraseñas tienen que ser iguales</p>
           </div>
   
       <!-- condiciones -->
           <div class="formulario_grupo formulario_grupo_terminos" id="formulario_terminos">
               <label class="formulario_label">
                   <input class="formulario_checkbox" type="checkbox" name="terminos" id="terminos">
                   Acepto los terminos y condiciones
               </label>
           </div>
   
           <!-- mensaje de error -->
           <div class="formulario_mensaje" id="formulario_mensaje">
               <i class="formulario_p_boton material-symbols-outlined">
                   error
                   </i>
                   <b>Error:</b> Por favor rellene el formulario correctamente.
           </div>
   
           <!-- mensaje de confirmacion -->
           <div class="formulario_grupo formulario_div_boton">
               <button type="submit" class="formulario_boton">Enviar</button>
               <p class="formulario_texto_exito" id="formulario_texto_exito">formulario enviado de manera correcta</p>
           </div>
    </form>

            `,
    delivery:`
        <div id="delivery" class="container active">
            <h2>Delivery</h2>
            <table class="table">
                <thead class="thead-dark">
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                </thead>
                <tr v-for="elemento in bebidas">
                    <td>{{elemento.nombre}}</td>
                    <td>{{elemento.categoria}}</td>
                    <td>{{elemento.precio}}</td>
                </tr>
            </table>
        </div>`
}

const app=new Vue({
    el:"#app",
    data: {
        view : 'inicio',
    },
    components: {
        // dentro de este inicio estan los datos que llamamos con el v-for que creamos en el contenido que va en el HTML
        inicio: {
            data:function () {      
                return { 
                    recetas:[  
                        {nombre:"Yerba Mate Kalena",
                        beneficios:"Actúa como un poderoso antioxidante, estimula el sistema nervioso de forma natural, aumenta la capacidad de concentración, mejora la resistencia a la fatiga física y mental, funciona como diurético y laxante suave.",
                        detalles:"Establecimiento San Demetrio es un emprendimiento familiar que desde el año 1977 produce Yerba Mate y Té Kalena. Elaboramos artesanalmente productos agroecológicos de noble sabor y excelente calidad, certificado libre de gluten y garantizando la particularidad de no producir acidez. Además, Yerba Mate Kalena permanece en el sistema tradicional de secado Barbacuá y estacionamiento natural por 12 meses, asegurando a los consumidores el verdadero sabor del mate. Además, desde el año 2001, producimos, fraccionamos y distribuimos Azúcar Mascabo BA-LA-JU.",
                        // foto:"/dietetica_gara/imagenes/producto-1.jpg"        
                        },
                        {nombre:"Te Inti Zen",
                        beneficios:"Cada taza de Inti Zen tiene atributos detoxificantes, relajantes, digestivas, energizante o revitalizantes. Su compromiso es crear infusiones ricas, que promuevan el bienestar y la salud.",
                        detalles:"nti Zen es un té gourmet que combina energía del nuevo continente latinoamericano a través de sus flores, frutos y especias",
                        // foto:"/dietetica_gara/imagenes/te_inti_zen.webp"    
                        },
                        {nombre:"Celienergy",
                        beneficios:"Los alfajores de Celienergy son riquísimos y aptos para celíacos! NO CONTIENEN TACC, ideales para darse un gusto en cualquier momento del día",
                        detalles:"Galletita (harina de nuez, harina de arroz, almidon de maíz, azúcar, huevo, aceite de girasol, goma xántica (ESP), polvo de hornear, dulce de leche (leche entera, azúcar, glucosa, esencia vainilla, (ARO), sorbato de potasio (CONS), agar (EST), bicarbonato de sodio (AC REG), baño de reposteria fantasia blanco.",
                        // foto:"/dietetica_gara/imagenes/celienergy.jpg"    
                        },
                        {nombre:"Leche de Almendras Pampa Vida",
                        beneficios:"Ofrece el 30 % de la cantidad de calcio diaria recomendada, reduciendo su riesgo de artritis y osteoporosis.",
                        detalles:"Bebida a base de almendras, con fuente de vitaminas A, B3, B5, B6, fortificada con calcio y vitamina B12. Libre de gluten. Perfecta para utilizar en preparaciones frías o calientes. Lista para compartir.",
                        // foto:"/dietetica_gara/imagenes/leche.jpg"    
                        }
                    ],           
                }
            },
            props: [],  //parametros
            template: templates.inicio
        },
        mieles:{
                data:function() {
                    return{
                        miel:[{
                            tipoDeMiel:"Atamisky",
                            detalleDeMiel:"Miel de color intermedio, aroma penetrante y sabor intenso. Ubicacion: Monte Nativo noroeste Argentino ",
                            foto:"imagenes/mieles/atamisky.jpg"
                            },
                            {
                            tipoDeMiel:"Algarrobo",
                            detalleDeMiel:"La miel de Algarrobo se caracteriza por su sabor sumamente suave y su color claro, el cual al solidificar se torna totalmente blanca. Ubicacion: Monte nativo ",
                            foto:"imagenes/mieles/algarrobo.jpg"
                            },
                            {
                            tipoDeMiel:"Chilca",
                            detalleDeMiel:"Es una miel de color claro, aroma y sabor intenso. Presenta la particularidad de cristalizar rápidamente, puede contener un porcentaje un tanto mayor de humedad en su composición. Ubicacion: Centro norte de la provincia del Chaco (General San Martin) ",
                            foto:"imagenes/mieles/chilca.jpg"
                            },
                            {
                            tipoDeMiel:"Garabato",
                            detalleDeMiel:"Esta miel proviene de la flor del garabato. Las abejas realizan una miel, a partir de esta flor, semioscura y liviana, ideal para endulzar infusiones y lácteos. ",
                            foto:"imagenes/mieles/garabato.jpg"
                            },
                            {
                            tipoDeMiel:"Jarilla",
                            detalleDeMiel:"sus hojas tienen propiedades beneficiosas antioxidantes, antiinflamatorias, antimicrobianas e inmunomoduladoras, además de aportar vitaminas y minerales ",
                            foto:"imagenes/mieles/jarilla.jpg"
                            },
                            {
                            tipoDeMiel:"Juda",
                            detalleDeMiel:"Es excelente en Hierro para las Anemias. ",
                            foto:"imagenes/mieles/juda.jpg"
                            },
                            {
                            tipoDeMiel:"Mistol",
                            detalleDeMiel:"Son mieles de color claro (amarillas) de cristalización lenta.Presentan un sabor fuerte y aroma intenso. Ubicacion: Monte Nativo",
                            foto:"imagenes/mieles/mistol.jpg"
                            },
                            {
                            tipoDeMiel:"Multiflora",
                            detalleDeMiel:"Este tipo de miel se produce con el néctar de diferentes flores de las cuales recolectan las abejas. Se caracteriza por tener un color y sabor más homogéneo. Es decir de un color ambar, y su aroma es mas neutral sin ninguna predominacia.",
                            foto:"imagenes/mieles/multiflora.jpg"
                            },
                            {
                            tipoDeMiel:"Palo amarillo",
                            detalleDeMiel:"Regulador Hepático y Hormonal natural. Posee propiedades antioxidantes. Favorece la eliminación de toxinas del cuerpo ",
                            foto:"imagenes/mieles/palo_amarillo.jpg"
                            },
                            {
                            tipoDeMiel:"Poleo",
                            detalleDeMiel:"Miel que presenta un color ámbar brillante, destacando por aroma y sabor muy intenso, de características marcadamente químicas y florales. Es una miel de cristalización media.",
                            foto:"imagenes/mieles/poleo.jpg"
                            },
                            {
                            tipoDeMiel:"Quebracho",
                            detalleDeMiel:"Aroma floral-frutado, cálidas y frescas con un tono a regaliz gusto dulce, poco de astringencia. Consistencia líquida, cristalizan lentamente Color Ambar con tonalidades rojizas. Ubicacion: Oeste de la provincia de Formosa  ",
                            foto:"imagenes/mieles/quebracho_blanco.jpg"
                            },
                            {
                            tipoDeMiel:"Romero",
                            detalleDeMiel:"Se trata de una miel de consistencia sólida. Tiene una cristalización variable dependiendo de las partículas de polen que la acompañen, aunque suele ser rápida, con cristales finos y angulosos. ",
                            foto:"imagenes/mieles/romero.jpg"
                            },
                            {
                            tipoDeMiel:"Tintitaco",
                            detalleDeMiel:"Es Energizante natural. Favorece el correcto funcionamiento del Sistema Circulatorio.",
                            foto:"imagenes/mieles/tintitaco.jpg"
                            }

                        ]

                    }
                },
            props: [],  //parametros
            template: templates.mieles
        },
        contact: {
            data: function () {
                return {
                    mail:"ejemplo@gmail.com",
                }
            },

            
            props: [],
            template: templates.contact
        } ,
        location: {
            data:function () {
                return {
                    
                    locales:[
                        {nombre:"Sucursal once",
                        direccion:"Rivadavia 150 - CABA",
                        link:"https://www.google.com.ar/maps/place/Federico+Lacroze+2702,+B1703BDL+Jos%C3%A9+Ingenieros,+Provincia+de+Buenos+Aires/@-34.621942,-58.5354241,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc81fc874d681:0x3f7ca31814a9bdf8!8m2!3d-34.621942!4d-58.53323",
                        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9409930954894!2d-58.40815704869058!3d-34.6056535803632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf2a00d73df%3A0xc90b4ce1a7523378!2sAv.%20Pueyrred%C3%B3n%20400%2C%20C1032ABQ%20CABA!5e0!3m2!1ses!2sar!4v1592865675943!5m2!1ses!2sar"   
                        },
                        {nombre:"Sucursal Colegiales",
                        direccion:"Federico Lacroze 2702 - CABA",
                        link:"https://www.google.com.ar/maps/place/Federico+Lacroze+2702,+B1703BDL+Jos%C3%A9+Ingenieros,+Provincia+de+Buenos+Aires/@-34.621942,-58.5354241,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc81fc874d681:0x3f7ca31814a9bdf8!8m2!3d-34.621942!4d-58.53323",
                        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9409930954894!2d-58.40815704869058!3d-34.6056535803632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf2a00d73df%3A0xc90b4ce1a7523378!2sAv.%20Pueyrred%C3%B3n%20400%2C%20C1032ABQ%20CABA!5e0!3m2!1ses!2sar!4v1592865675943!5m2!1ses!2sar"   
                        }   ,
                        {nombre:"Sucursal Chacarita",
                        direccion:"Federico Lacroze 3800 - CABA",
                        link:"https://www.google.com.ar/maps/place/Federico+Lacroze+2702,+B1703BDL+Jos%C3%A9+Ingenieros,+Provincia+de+Buenos+Aires/@-34.621942,-58.5354241,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc81fc874d681:0x3f7ca31814a9bdf8!8m2!3d-34.621942!4d-58.53323",
                        iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9409930954894!2d-58.40815704869058!3d-34.6056535803632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf2a00d73df%3A0xc90b4ce1a7523378!2sAv.%20Pueyrred%C3%B3n%20400%2C%20C1032ABQ%20CABA!5e0!3m2!1ses!2sar!4v1592865675943!5m2!1ses!2sar"   
                        }
                    ]
                }
            },
            props: [],
            template: templates.location
        } ,
        registration: {
            props: [],
            template: templates.registration
        },
        delivery: {
            data:function () {
                return {
                    bebidas:[
                        {
                            nombre:"Sprite",
                            precio: "120",
                            categoria: "gaseosa",
                            imagen:"https://st.depositphotos.com/2121815/4748/i/950/depositphotos_47482769-stock-photo-bottle-of-sprite-drink-isolated.jpg"
                        },
                        {
                            nombre:"coca cola",
                            precio:"125",
                            categoria:"gaseosa",
                            imagen:"https://st.depositphotos.com/1010050/4422/i/950/depositphotos_44227185-stock-photo-coca-cola-bottle.jpg"
                        }
                    ]  
                }
            },
            props: [],
            template: templates.delivery
        }
    }  
}) 

// este codigo lo tuve que crear para que cuando aprete en registrarse arranque a validar, sino lo intentaba de validar siempre y marcaba error.
document.querySelector(".registrarse").addEventListener("click",()=>{ 

// este codigo lo tuve que crear para que cuando aprete en registrarse arranque a validar, sino lo intentaba de validar siempre y marcaba error.


setTimeout(()=>{

    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
     // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,12}$/ // 7 a 14 numeros.
}


const campos = {
	nombre: false,
	password: false,
	email: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "confirmar_password":
			validarPassword2();
		break;
		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).textContent= "done";
		document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.remove('formulario_input_error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).textContent= "close";
		document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.add('formulario_input_error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword = document.getElementById('password');
	const inputConfirmar_Password = document.getElementById('confirmar_password');

	if(inputPassword.value !== inputConfirmar_Password.value){
		document.getElementById(`grupo_confirmar_password`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_confirmar_password`).classList.remove('formulario_grupo-correcto');
        document.querySelector(`#grupo_confirmar_password i`).textContent= "close";
		document.querySelector(`#grupo_confirmar_password .formulario_input_error`).classList.add('formulario_input_error-activo');
		campos["password"] = false;
	} else {
		document.getElementById(`grupo_confirmar_password`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_confirmar_password`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_confirmar_password i`).textContent= "done";
		document.querySelector(`#grupo_confirmar_password .formulario_input_error`).classList.remove('formulario_input_error-activo');
		campos["password"] = true;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


// validacion de campos:

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.password && campos.email && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario_texto_exito').classList.add('formulario_texto_exito-activo');
		setTimeout(() => {
			document.getElementById('formulario_texto_exito').classList.remove('formulario_texto_exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario_grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario_grupo-correcto');
		});
	} else {
		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
	}
});

}, 20 )

})