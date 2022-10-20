const input_nombre = document.getElementById("nombre");

const input_direccion = document.getElementById("direccion");
const input_correo = document.getElementById("correo");

const input_telefono = document.getElementById("telefono");
const input_pag_web = document.getElementById("pagina");

let input_idiomas = document.getElementById("idiomas");
const input_empleos = document.getElementById("empleos");
const input_educacion = document.getElementById("educacion");

const input_skill = document.getElementById("skill");
const input_certificaciones = document.getElementById("certificaciones");
const input_resumen = document.getElementById("resumen");

function Crear_CV() {


    const nombreContacto = input_nombre.value;
    const nombreDireccion = input_direccion.value;

    const nombreTelefono = input_telefono.value;
    const nombrePagina = input_pag_web.value;

    const nombreIdiomas = input_idiomas.value;

    const nombreCorreo = input_correo.value;

    const nombreEmpleos = input_empleos.value;
    const nombreEducacion = input_educacion.value;

    const nombreSkill = input_skill.value;

    const nombreCertificacion = input_certificaciones.value;
    const resumen = input_resumen.value;

    const cvContainer = document.getElementById("cv-container");


    if (validar()) {

        const divrow = document.createElement("div");
        divrow.setAttribute("class", "col-12 col-sm-12 col-md-5 col-lg-6 mt-5 offset-md-3");

        const divPrincipal = document.createElement("div");
        divPrincipal.setAttribute("class", "card");

        const divHeader = document.createElement("div");
        divHeader.setAttribute("class", "card-header bg-black text-bg-primary");

        const h5TextHeader = document.createElement("h5");
        h5TextHeader.setAttribute("class", "text-left text-dark fw-bold");
        h5TextHeader.innerText = " ";

        const divRow2 = document.createElement("div");
        divRow2.setAttribute("class", "row");

        const divCardBody = document.createElement("div");
        divCardBody.setAttribute("class", "card-body bg-primary col-6");

        const divCard2 = document.createElement("div");
        divCard2.setAttribute("class", "card");

        const h5nomText = document.createElement("h5");
        h5nomText.setAttribute("class", "text-left text-dark fw-bold");
        h5nomText.innerText = '' + nombreContacto;

        const h5ContacText = document.createElement("h5");
        h5ContacText.setAttribute("class", "text-left text-primary fw-semibold");
        h5ContacText.innerText = "Contacto.";

        const ulDatosCont = document.createElement("ul");
        ulDatosCont.setAttribute("class", "list-group list-group-flush");

        const liDireccion = document.createElement("li");
        liDireccion.setAttribute("class", "list-group-item");
        liDireccion.innerText = "Direccion: " + nombreDireccion;

        const liTelefono = document.createElement("li");
        liTelefono.setAttribute("class", "list-group-item");
        liTelefono.innerText = "Telefono: " + nombreTelefono;

        const liCorreo = document.createElement("li");
        liCorreo.setAttribute("class", "list-group-item");
        liCorreo.innerText = "Correo: " + nombreCorreo;

        const liPagina = document.createElement("li");
        liPagina.setAttribute("class", "list-group-item");
        liPagina.innerText = "Pagina: " + nombrePagina;


        const h5Idiomas = document.createElement("h5");
        h5Idiomas.setAttribute("class", "text-left fw-semibold fw-semibold text-primary mt-4");
        h5Idiomas.innerText = "Idiomas.";

        const ulDatosIdioma = document.createElement("ul");
        ulDatosIdioma.setAttribute("class", "list-group list-group-flush");

        const divCardBody2 = document.createElement("div");
        divCardBody2.setAttribute("class", "card-body bg-secondary col-6");

        const divCard3 = document.createElement("div");
        divCard3.setAttribute("class", "card");

        const h5Resumen2 = document.createElement("h5");
        h5Resumen2.setAttribute("class", "text-left fw-semibold fw-semibold text-primary mt-4");
        h5Resumen2.innerText = "Resumen.";

        const h5ResumenEscri = document.createElement("h5");
        h5ResumenEscri.setAttribute("class", "text-left text-bg-light fw-light");
        h5ResumenEscri.innerText = "" + resumen;

        const h5Skill = document.createElement("h5");
        h5Skill.setAttribute("class", "text-left fw-semibold fw-semibold text-primary mt-4");
        h5Skill.innerText = "Skills.";

        const ulSkills = document.createElement("ul");
        ulSkills.setAttribute("class", "list-group list-group-flush");


        const h5Experiencia = document.createElement("h5");
        h5Experiencia.setAttribute("class", "text-left fw-semibold fw-semibold text-primary mt-4");
        h5Experiencia.innerText = "Experiencia.";

        const ulExperiencia = document.createElement("ul");
        ulExperiencia.setAttribute("class", "list-group list-group-flush");

        const h5Educacion = document.createElement("h5");
        h5Educacion.setAttribute("class", "text-left fw-semibold fw-semibold text-primary mt-4");
        h5Educacion.innerText = "Educación.";

        const ulEducacion = document.createElement("ul");
        ulEducacion.setAttribute("class", "list-group list-group-flush");

        const h5Certificaciones = document.createElement("h5");
        h5Certificaciones.setAttribute("class", "text-left fw-semibold fw-semibold text-primary mt-4");
        h5Certificaciones.innerText = "Certificaciones";

        const ulCertificaciones = document.createElement("ul");
        ulCertificaciones.setAttribute("class", "list-group list-group-flush");

        const eliminarBTN = document.createElement("button");
        eliminarBTN.setAttribute("class", "btn btn-danger float-end mt-2 mx-2");
        eliminarBTN.innerText = "Eliminar";
        eliminarBTN.addEventListener("click", function() {

            if (confirm("Estas seguros de que quieres borrar el CV?")) {

                cvContainer.removeChild(divrow);


            }

        });

        cvContainer.appendChild(divrow);
        divrow.appendChild(divPrincipal);
        divPrincipal.appendChild(divHeader);
        divHeader.appendChild(h5TextHeader);
        divPrincipal.appendChild(divRow2);
        divRow2.appendChild(divCardBody);
        divRow2.appendChild(divCardBody2);
        divCardBody.appendChild(divCard2);
        divCard2.appendChild(h5nomText);
        divCard2.appendChild(h5ContacText);
        divCard2.appendChild(ulDatosCont);
        ulDatosCont.appendChild(liDireccion);
        ulDatosCont.appendChild(liTelefono);
        ulDatosCont.appendChild(liCorreo);
        ulDatosCont.appendChild(liPagina);
        divCard2.appendChild(h5Idiomas);
        divCard2.appendChild(ulDatosIdioma);

        const Divisor_Idiomas = nombreIdiomas.split(",");

        const Divisor_Skills = nombreSkill.split(",");

        const Divisor_Experiencia = nombreEmpleos.split(",");
        const Divisor_Educacion = nombreEducacion.split(",");

        const Divisor_Certificaciones = nombreCertificacion.split(",");


        for (i = 0; i < Divisor_Idiomas.length; i++) {

            if (Divisor_Idiomas[i] != ",") {
                const liIdioma = document.createElement("li");
                liIdioma.setAttribute("class", "list-group-item");
                liIdioma.innerText = "" + Divisor_Idiomas[i];
                ulDatosIdioma.appendChild(liIdioma);
            }
        }
        divCardBody2.appendChild(divCard3);
        divCardBody2.appendChild(eliminarBTN);

        divCard3.appendChild(h5Resumen2);
        divCard3.appendChild(h5ResumenEscri);
        divCard3.appendChild(h5Skill);
        divCard3.appendChild(ulSkills);

        for (i = 0; i < Divisor_Skills.length; i++) {

            if (Divisor_Skills[i] != ",") {
                const liSkill = document.createElement("li");
                liSkill.setAttribute("class", "list-group-item");
                liSkill.innerText = "" + Divisor_Skills[i];
                ulSkills.appendChild(liSkill);
            }
        }

        divCard3.appendChild(h5Experiencia);
        divCard3.appendChild(ulExperiencia);

        for (i = 0; i < Divisor_Experiencia.length; i++) {

            if (Divisor_Experiencia[i] != ",") {
                const liExperiencia = document.createElement("li");
                liExperiencia.setAttribute("class", "list-group-item");
                liExperiencia.innerText = "" + Divisor_Experiencia[i];
                ulExperiencia.appendChild(liExperiencia);
            }
        }

        divCard3.appendChild(h5Educacion);
        divCard3.appendChild(ulEducacion);

        for (i = 0; i < Divisor_Educacion.length; i++) {

            if (Divisor_Educacion[i] != ",") {
                const liEducacion = document.createElement("li");
                liEducacion.setAttribute("class", "list-group-item");
                liEducacion.innerText = "" + Divisor_Educacion[i];
                ulEducacion.appendChild(liEducacion);
            }
        }



        divCard3.appendChild(h5Certificaciones);
        divCard3.appendChild(ulCertificaciones);
        for (i = 0; i < Divisor_Certificaciones.length; i++) {
            if (Divisor_Certificaciones[i] != ",") {
                const liCertificaciones = document.createElement("li");
                liCertificaciones.setAttribute("class", "list-group-item");
                liCertificaciones.innerText = "" + Divisor_Certificaciones[i];
                ulCertificaciones.appendChild(liCertificaciones);

            }
        }










        Cls();
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