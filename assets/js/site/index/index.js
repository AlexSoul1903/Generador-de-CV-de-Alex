const input_nombre = document.getElementById("nombre");

const input_direccion = document.getElementById("direccion");
const input_correo = document.getElementById("correo");

const input_telefono = document.getElementById("telefono");
const input_pag_web = document.getElementById("pagina");

const input_idiomas = document.getElementById("idiomas");

const input_empleos = document.getElementById("empleos");
const input_educacion = document.getElementById("educacion");

const input_skill = document.getElementById("skill");
const input_certificaciones = document.getElementById("certificaciones");
const input_resumen = document.getElementById("resumen");

function Crear_CV() {

    if (validar()) {

        alert("Todo nitido");
    } else {

        alert("Debe llenar todos los campos");

    }


}


function Cls() {

    input_nombre.value = "";
    input_nombre.classList.remove("buen-input");
    input_nombre.classList.remove("error-feo");
    input_nombre.focus();

    input_direccion.value = "";
    input_direccion.classList.remove("buen-input");
    input_direccion.classList.remove("error-feo");



    input_correo.value = "";
    input_correo.classList.remove("buen-input");
    input_correo.classList.remove("error-feo");

    input_telefono.value = "";
    input_telefono.classList.remove("buen-input");
    input_telefono.classList.remove("error-feo");

    input_pag_web.value = "";
    input_pag_web.classList.remove("buen-input");
    input_pag_web.classList.remove("error-feo");

    input_idiomas.value = "";
    input_idiomas.classList.remove("buen-input");
    input_idiomas.classList.remove("error-feo");

    input_empleos.value = "";
    input_empleos.classList.remove("buen-input");
    input_empleos.classList.remove("error-feo");

    input_educacion.value = "";
    input_educacion.classList.remove("buen-input");
    input_educacion.classList.remove("error-feo");


    input_skill.value = "";
    input_skill.classList.remove("buen-input");
    input_skill.classList.remove("error-feo");

    input_certificaciones.value = "";
    input_certificaciones.classList.remove("buen-input");
    input_certificaciones.classList.remove("error-feo");

    input_resumen.value = "";
    input_resumen.classList.remove("buen-input");
    input_resumen.classList.remove("error-feo");


}

function validar() {

    let esvalido = true;

    const valor_nombre = input_nombre.value;

    const valor_direccion = input_direccion.value;


    const valor_correo = input_correo.value;

    const valor_telefono = input_telefono.value;


    const valor_pag_web = input_pag_web.value;


    const valor_idiomas = input_idiomas.value;

    const valor_empleos = input_empleos.value;


    const valor_educacion = input_educacion.value;

    const valor_skill = input_skill.value;



    const valor_certificaciones = input_certificaciones.value;


    const valor_resumen = input_resumen.value;



    if (valor_nombre == "" || valor_nombre == null || valor_nombre == undefined) {

        input_nombre.classList.add("error-feo");
        input_nombre.classList.remove("buen-input");
        esvalido = false;
    } else {

        input_nombre.classList.remove("error-feo");
        input_nombre.classList.add("buen-input");
    }

    if (valor_direccion == "" || valor_direccion == null || valor_direccion == undefined) {
        esvalido = false;
        input_direccion.classList.add("error-feo");
        input_direccion.classList.remove("buen-input");
    } else {

        input_direccion.classList.remove("error-feo");
        input_direccion.classList.add("buen-input");
    }

    if (valor_correo == "" || valor_correo == null || valor_correo == undefined) {
        esvalido = false;
        input_correo.classList.add("error-feo");
        input_correo.classList.remove("buen-input");
    } else {

        input_correo.classList.remove("error-feo");
        input_correo.classList.add("buen-input");
    }

    if (valor_telefono == "" || valor_telefono == null || valor_telefono == undefined) {
        esvalido = false;
        input_telefono.classList.add("error-feo");
        input_telefono.classList.remove("buen-input");
    } else {

        input_telefono.classList.remove("error-feo");
        input_telefono.classList.add("buen-input");
    }

    if (valor_pag_web == "" || valor_pag_web == null || valor_pag_web == undefined) {
        esvalido = false;
        input_pag_web.classList.add("error-feo");
        input_pag_web.classList.remove("buen-input");
    } else {

        input_pag_web.classList.remove("error-feo");
        input_pag_web.classList.add("buen-input");
    }


    if (valor_idiomas == "" || valor_idiomas == null || valor_idiomas == undefined) {
        esvalido = false;
        input_idiomas.classList.add("error-feo");
        input_idiomas.classList.remove("buen-input");
    } else {

        input_idiomas.classList.remove("error-feo");
        input_idiomas.classList.add("buen-input");
    }

    if (valor_empleos == "" || valor_empleos == null || valor_empleos == undefined) {
        esvalido = false;
        input_empleos.classList.add("error-feo");
        input_empleos.classList.remove("buen-input");
    } else {

        input_empleos.classList.remove("error-feo");
        input_empleos.classList.add("buen-input");
    }

    if (valor_educacion == "" || valor_educacion == null || valor_educacion == undefined) {
        esvalido = false;
        input_educacion.classList.add("error-feo");
        input_educacion.classList.remove("buen-input");
    } else {

        input_educacion.classList.remove("error-feo");
        input_educacion.classList.add("buen-input");
    }

    if (valor_skill == "" || valor_skill == null || valor_skill == undefined) {
        esvalido = false;
        input_skill.classList.add("error-feo");
        input_skill.classList.remove("buen-input");
    } else {

        input_skill.classList.remove("error-feo");
        input_skill.classList.add("buen-input");
    }

    if (valor_certificaciones == "" || valor_certificaciones == null || valor_certificaciones == undefined) {
        esvalido = false;
        input_certificaciones.classList.add("error-feo");
        input_certificaciones.classList.remove("buen-input");
    } else {

        input_certificaciones.classList.remove("error-feo");
        input_certificaciones.classList.add("buen-input");
    }

    if (valor_resumen == "" || valor_resumen == null || valor_resumen == undefined) {
        esvalido = false;
        input_resumen.classList.add("error-feo");
        input_resumen.classList.remove("buen-input");
    } else {

        input_resumen.classList.remove("error-feo");
        input_resumen.classList.add("buen-input");
    }
    return esvalido;

}