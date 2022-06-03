const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,12}$/ // 7 a 14 numeros.
}

console.dir(formulario)

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