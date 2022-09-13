//  con este codigo abrimos y cerramos la navegacion en celulares

addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton")

    boton.addEventListener("click", () => {
                const menu = document.getElementById("menu")
                menu.classList.toggle("show")
                
            }
                ) 
         
    const icono = document.querySelector(".img_menu1")
    
    
    icono.addEventListener("click", ()=>  {
        console.log("hola");
    })
})






const templates={
    // dentro de ese "inicio" esta el HTML que aparece cuando seleccionamos inicio en la barra de navegacion
    inicio:`
    <div class="main__div">

    <div class="container-slider">
            <div class="slider" id="slider">

                    <div class="slider__section">
                            <img src="imagenes/Local/exterior_dia.jpg" alt="local exterior" class="slider__img">
                    </div>
            
                    <div class="slider__section">
                            <img src="imagenes/Local/interior1_dia.jpg" alt="local interior 1" class="slider__img">
                    </div>
                    <div class="slider__section">
                            <img src="imagenes/Local/itenrior2_dia.jpg" alt="local interior 2" class="slider__img">
                    </div>

                    <div class="slider__section">
                            <img src="imagenes/Local/interior3_dia.jpg" alt="local interior 3" class="slider__img">
                    </div>
            </div>
                    <div class="slider__btn slider__btn--right" id="btn-right">&#62;</div>

                    <div class="slider__btn slider__btn--left" id="btn-left">&#60;
                    </div>
    </div>
    



    <div class="main__div-div">
            <div class="main__div-div-1">
                    <h2>
                            Frutos secos
                    </h2>
                    <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa, facilis nobis sit numquam, impedit possimus suscipit dolor distinctio quaerat laborum ut omnis nemo odit accusamus, atque ex. Rerum, dicta?
                    </p>
            </div>
            <div class="container__slider-otros" >
                    <div class="main__div-div-2" id="main__div-div-2">
                            <div class="div-2__slider">
                                    <img src="imagenes/Local/interior3_dia.jpg" alt="local interior 3" class="slider__img-otros">
                            </div>
                            <div class="div-2__slider">
                                    <img src="imagenes/Local/interior1_dia.jpg" alt="local interior 3" class="slider__img-otros">
                            </div>
                            <div class="div-2__slider">
                                    <img src="imagenes/Local/itenrior2_dia.jpg" alt="local interior 3" class="slider__img-otros">
                            </div>
                            <div class="div-2__slider">
                                    <img src="imagenes/Local/interior3_dia.jpg" alt="local interior 3" class="slider__img-otros">
                            </div>
                    </div>
            </div>
    </div>




    <div class="main__div-div">
            <div class="main__div-div-1">
                    <h2>
                            Mieles
                    </h2>
                    <p>
                            Mieles traidas de cordoba, "mieles el arbol"
                    </p>
            </div>
            <div class="container__slider-otros-2" >
                    <div class="main__div-div-2-2" id="main__div-div-2-2">
                            <div class="div-2__slider-2">
                                    <img src="imagenes/mieles/algarrobo.jpg" alt="local interior 3" class="slider__img-otros-2">
                            </div>
                            <div class="div-2__slider-2">
                                    <img src="imagenes/mieles/atamisky.jpg" alt="local interior 3" class="slider__img-otros-2">
                            </div>
                            <div class="div-2__slider-2">
                                    <img src="imagenes/mieles/chilca.jpg" alt="local interior 3" class="slider__img-otros-2">
                            </div>
                            <div class="div-2__slider-2">
                                    <img src="imagenes/mieles/garabato.jpg" alt="local interior 3" class="slider__img-otros-2">
                            </div>
                    </div>
            </div>
    </div>




    <div class="main__div-div">
            <div class="main__div-div-1">
                    <h2>
                            Frutos secos
                    </h2>
                    <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa, facilis nobis sit numquam, impedit possimus suscipit dolor distinctio quaerat laborum ut omnis nemo odit accusamus, atque ex. Rerum, dicta?
                    </p>
            </div>
            <div class="container__slider-otros-3" >
                    <div class="main__div-div-2-3" id="main__div-div-2-3">
                            <div class="div-2__slider-3">
                                    <img src="imagenes/Local/interior3_dia.jpg" alt="local interior 3" class="slider__img-otros-3">
                            </div>
                            <div class="div-2__slider-3">
                                    <img src="imagenes/Local/interior1_dia.jpg" alt="local interior 3" class="slider__img-otros-3">
                            </div>
                            <div class="div-2__slider-3">
                                    <img src="imagenes/Local/itenrior2_dia.jpg" alt="local interior 3" class="slider__img-otros-3">
                            </div>
                            <div class="div-2__slider-3">
                                    <img src="imagenes/Local/interior3_dia.jpg" alt="local interior 3" class="slider__img-otros-3">
                            </div>
                    </div>
            </div>
    </div>





</div> `,

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

            `
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
                        foto:"imagenes/local/exterior_dia.jpg"        
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
        registration: {
            props: [],
            template: templates.registration
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


//  con este codigo cambiamos el tema a oscuro


addEventListener("DOMContentLoaded", () => {
    const moon = document.getElementById('nav__moon')

    const body=document.getElementById("app")

    const header=document.querySelector(".header")

    const main=document.querySelector(".main")

    const footer=document.querySelector(".footer")

    const sun=document.getElementById("nav__sun")

    const documento=document



    sun.addEventListener("click", () => {
                sun.classList.toggle("nav__theme-dark-sun")
                moon.classList.toggle("nav__theme-dark-moon")
                document.documentElement.style.setProperty("--color-1", "rgb(37, 37, 37)");
                document.documentElement.style.setProperty("--color-2", " rgb(68, 68, 68)");
                document.documentElement.style.setProperty("--color-5", "white");
            }) 

    moon.addEventListener("click", () => {
                sun.classList.toggle("nav__theme-dark-sun")
                moon.classList.toggle("nav__theme-dark-moon")
                document.documentElement.style.setProperty("--color-1", "#E0D8B0");
                document.documentElement.style.setProperty("--color-2", "#FCFFE7");
                document.documentElement.style.setProperty("--color-5", "black");
                } ) 
                
})

//  con este codigo cambiamos el tema a oscuro





// slider con el otro youtuber https://www.youtube.com/watch?v=WI0aCIEYXvw&t=61s&ab_channel=J%26GProyectosWeb


const slider=document.getElementById("slider")
let sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length -1]
const btnLeft= document.getElementById("btn-left")
const btnRight= document.getElementById("btn-right")

slider.insertAdjacentElement("afterbegin", sliderSectionLast)
const moverDerecha= ()=>{
    let sliderSectionFirst=document.querySelectorAll(".slider__section")[0]
    slider.style.marginLeft = "-200%"
    slider.style.transition= "all 0.5s"
    setTimeout(()=>{
        slider.style.transition= "none"
        slider.insertAdjacentElement("beforeend", sliderSectionFirst)
        slider.style.marginLeft= "-100%"
    },500);
}
const moverIzquierda= ()=>{
    let sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length -1]
    let sliderSectionFirst=document.querySelectorAll(".slider__section")[0]
    slider.style.marginLeft = "0%"
    slider.style.transition= "all 0.5s"
    setTimeout(()=>{
        slider.style.transition= "none"
        slider.insertAdjacentElement("afterbegin", sliderSectionLast)
        slider.style.marginLeft= "-100%"
    },500);
}
btnRight.addEventListener("click",()=>{
    moverDerecha()
})
btnLeft.addEventListener("click",()=>{
    moverIzquierda()
})
setInterval(()=>{
    moverDerecha()
},5000)
// slider con el otro youtuber

const sliderOtros=document.getElementById("main__div-div-2")
let sliderSectionOtros = document.querySelectorAll(".div-2__slider")
let sliderSectionOtrosLast = sliderSectionOtros[sliderSectionOtros.length -1]


sliderOtros.insertAdjacentElement("afterbegin", sliderSectionOtrosLast)

const moverDerechaOtros= ()=>{
    let sliderSectionOtrosFirst=document.querySelectorAll(".div-2__slider")[0]
    sliderOtros.style.marginLeft = "-200%"
    sliderOtros.style.transition= "all 0.5s"
    setTimeout(()=>{
        sliderOtros.style.transition= "none"
        sliderOtros.insertAdjacentElement("beforeend", sliderSectionOtrosFirst)
        sliderOtros.style.marginLeft= "-100%"
    },500);
}
setInterval(()=>{
    moverDerechaOtros()
},5000)



const sliderOtros_2=document.getElementById("main__div-div-2-2")
let sliderSectionOtros_2 = document.querySelectorAll(".div-2__slider-2")
let sliderSectionOtrosLast_2 = sliderSectionOtros_2[sliderSectionOtros_2.length -1]


sliderOtros_2.insertAdjacentElement("afterbegin", sliderSectionOtrosLast_2)

const moverDerechaOtros_2= ()=>{
    let sliderSectionOtrosFirst_2=document.querySelectorAll(".div-2__slider-2")[0]
    sliderOtros_2.style.marginLeft = "-200%"
    sliderOtros_2.style.transition= "all 0.5s"
    setTimeout(()=>{
        sliderOtros_2.style.transition= "none"
        sliderOtros_2.insertAdjacentElement("beforeend", sliderSectionOtrosFirst_2)
        sliderOtros_2.style.marginLeft= "-100%"
    },500);
}
setInterval(()=>{
    moverDerechaOtros_2()
},5000)





const sliderOtros_3=document.getElementById("main__div-div-2-3")
let sliderSectionOtros_3 = document.querySelectorAll(".div-2__slider-3")
let sliderSectionOtrosLast_3 = sliderSectionOtros_3[sliderSectionOtros_3.length -1]


sliderOtros_3.insertAdjacentElement("afterbegin", sliderSectionOtrosLast_3)

const moverDerechaOtros_3= ()=>{
    let sliderSectionOtrosFirst_3=document.querySelectorAll(".div-2__slider-3")[0]
    sliderOtros_3.style.marginLeft = "-200%"
    sliderOtros_3.style.transition= "all 0.5s"
    setTimeout(()=>{
        sliderOtros_3.style.transition= "none"
        sliderOtros_3.insertAdjacentElement("beforeend", sliderSectionOtrosFirst_3)
        sliderOtros_3.style.marginLeft= "-100%"
    },500);
}
setInterval(()=>{
    moverDerechaOtros_3()
},5000)