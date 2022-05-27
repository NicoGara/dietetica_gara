

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
                <li>{{i.nombre}}
                    <br><img v-bind:src="i.foto"><br>
                    <p>Detalles: {{i.detalles}}</p>
                    <p>Beneficios: {{i.beneficios}}</p>    
                </li>
            </ul>
        </div>`,

    mieles:`
        <div id="mieles" class="mieles active">
            <ul v-for="i in miel">
            <li>{{i.tipoDeMiel}}
            <br>
                {{i.detalleDeMiel}}
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
        <div id="registration" class="container active">
            <div class="formulario">
                <h2>Registrarse</h2>
                <form action="show_data.html" target="_blank" >

                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="firstname" placeholder="Your name.."  ><br>
                    <label for="apodo">Apodo:</label>
                    <input type="text" id="apodo" name="nickname"  placeholder="Your nickname.." ><br>
                    
                    <label >Apellido:</label>
                    <input type="text" id="apellido" name="lastname"  placeholder="Your lastname.."><br>
            
                    <label for="direccion">Direccion:</label>
                    <input type="text" id="direccion" name="address"  placeholder="Your address.."><br>
            
                    <label for="contrasena">Contrasena:</label>
                    <input type="password" name="password" ><br>
            
                    <label for="mail">E-mail:</label>
                    <input type="email"  name="email" ><br>
            
                    <label for="Nacimiento">Fecha Nacimiento:</label>
                    <input type="date" id="start" name="birthday"
                    min="1900-01-01" max="2020-12-31">

                    <label for="cel">Celular:</label>
                    <input type="Celular"  name="celularl" ><br>
            
                    <p>Comentarios:</p>
                    <textarea name="comentario"rows=""   ></textarea>
        
                    <input type="submit" value="Enviar">
                    <br>
                    <br>
                    <br>
                    <br>
                </form> 
            </div>
        </div>`,
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
        </div>`,




}

var app=new Vue({
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
                            tipoDeMiel:"Miel de tilo",
                            detalleDeMiel:"La miel de tilo es de color claro, casi transparente, y su sabor es bastante dulce."
                            },
                            {
                            tipoDeMiel:"Miel floral",
                            detalleDeMiel:"También se la conoce como miel de prado o multifloral porque está hecha con el polen de diferentes especies de flores, según la zona en la que se encuentren las abejas y las colmenas. El aroma es fuerte y su sabor también."
                            },
                            {
                            tipoDeMiel:"Miel de acacia",
                            detalleDeMiel:"La miel de acacia tiene un color bastante ligero y el sabor es dulce. No se recomienda en niños menores de un año. De lo contrario se podría generar una patología conocida como el botulismo del lactante. Así lo evidencia un artículo publicado en Lakartidningen."
                            },
                            {
                            tipoDeMiel:"Miel de alforfón",
                            detalleDeMiel:"Este tipo de miel es la más oscura de todas y su sabor es un poco picante. A pesar de esto, sus propiedades son muy beneficiosas para la salud."
                            },
                            {
                            tipoDeMiel:"Miel de salvia",
                            detalleDeMiel:"La miel de salvia suele ser amarilla con algún matiz verde. Los beneficios que reporta para nuestra salud son muy importantes."
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