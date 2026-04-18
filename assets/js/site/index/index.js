// Modern CV Generator with i18n Support
// ==========================================

// Translations
const translations = {
    es: {
        title: "Generador de CV Profesional",
        subtitle: "Crea tu currículum vitae moderno y profesional en minutos",
        formTitle: "Ingresa tus datos",
        formSubtitle: "Completa todos los campos para generar tu CV",
        name: "Nombre Completo",
        address: "Dirección",
        email: "Correo Electrónico",
        phone: "Teléfono",
        website: "Página Web / LinkedIn",
        languages: "Idiomas",
        experience: "Experiencia Laboral",
        education: "Educación",
        skills: "Habilidades",
        certifications: "Certificaciones",
        summary: "Perfil Profesional",
        clear: "Limpiar",
        generate: "Generar CV",
        footer: "Hecho con pasión para profesionales como tú",
        contact: "Contacto",
        profile: "Perfil",
        delete: "Eliminar",
        confirmDelete: "¿Estás seguro de que quieres borrar este CV?",
        fillFields: "Por favor completa todos los campos",
        placeholderLanguages: "Ej: Español, Inglés, Francés",
        placeholderExperience: "Ej: Desarrollador Web en Empresa X, 2020-2023",
        placeholderEducation: "Ej: Licenciatura en Sistemas, Universidad Y",
        placeholderSkills: "Ej: JavaScript, Python, Diseño UI/UX",
        placeholderCertifications: "Ej: AWS Certified, Google Analytics",
        placeholderSummary: "Describe brevemente tu perfil profesional..."
    },
    en: {
        title: "Professional CV Generator",
        subtitle: "Create your modern and professional resume in minutes",
        formTitle: "Enter Your Information",
        formSubtitle: "Fill in all fields to generate your CV",
        name: "Full Name",
        address: "Address",
        email: "Email Address",
        phone: "Phone Number",
        website: "Website / LinkedIn",
        languages: "Languages",
        experience: "Work Experience",
        education: "Education",
        skills: "Skills",
        certifications: "Certifications",
        summary: "Professional Profile",
        clear: "Clear",
        generate: "Generate CV",
        footer: "Made with passion for professionals like you",
        contact: "Contact",
        profile: "Profile",
        delete: "Delete",
        confirmDelete: "Are you sure you want to delete this CV?",
        fillFields: "Please fill in all fields",
        placeholderLanguages: "E.g: Spanish, English, French",
        placeholderExperience: "E.g: Web Developer at Company X, 2020-2023",
        placeholderEducation: "E.g: Bachelor's in Computer Science, University Y",
        placeholderSkills: "E.g: JavaScript, Python, UI/UX Design",
        placeholderCertifications: "E.g: AWS Certified, Google Analytics",
        placeholderSummary: "Briefly describe your professional profile..."
    }
};

// Current language
let currentLang = 'es';

// DOM Elements
const elements = {
    nombre: document.getElementById("nombre"),
    direccion: document.getElementById("direccion"),
    correo: document.getElementById("correo"),
    telefono: document.getElementById("telefono"),
    pagina: document.getElementById("pagina"),
    idiomas: document.getElementById("idiomas"),
    empleos: document.getElementById("empleos"),
    educacion: document.getElementById("educacion"),
    skill: document.getElementById("skill"),
    certificaciones: document.getElementById("certificaciones"),
    resumen: document.getElementById("resumen"),
    cvContainer: document.getElementById("cv-container")
};

// Initialize language toggle
function initLanguageToggle() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update placeholders
    elements.idiomas.placeholder = t.placeholderLanguages;
    elements.empleos.placeholder = t.placeholderExperience;
    elements.educacion.placeholder = t.placeholderEducation;
    elements.skill.placeholder = t.placeholderSkills;
    elements.certificaciones.placeholder = t.placeholderCertifications;
    elements.resumen.placeholder = t.placeholderSummary;
    
    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Get input values
function getValues() {
    return {
        nombre: elements.nombre.value.trim(),
        direccion: elements.direccion.value.trim(),
        correo: elements.correo.value.trim(),
        telefono: elements.telefono.value.trim(),
        pagina: elements.pagina.value.trim(),
        idiomas: elements.idiomas.value.trim(),
        empleos: elements.empleos.value.trim(),
        educacion: elements.educacion.value.trim(),
        skill: elements.skill.value.trim(),
        certificaciones: elements.certificaciones.value.trim(),
        resumen: elements.resumen.value.trim()
    };
}

// Validate inputs
function validate() {
    const values = getValues();
    let isValid = true;
    const t = translations[currentLang];
    
    // Only validate form input fields, not container elements
    const inputKeys = ['nombre', 'direccion', 'correo', 'telefono', 'pagina', 'idiomas', 'empleos', 'educacion', 'skill', 'certificaciones', 'resumen'];
    
    inputKeys.forEach(key => {
        const element = elements[key];
        const value = values[key];
        
        if (!value || value === "") {
            element.classList.add("error-feo");
            element.classList.remove("buen-input");
            isValid = false;
        } else {
            element.classList.remove("error-feo");
            element.classList.add("buen-input");
        }
    });
    
    if (!isValid) {
        alert(t.fillFields);
    }
    
    return isValid;
}

// Clear form
function Cls() {
    Object.values(elements).forEach(element => {
        if (element && element.tagName !== 'DIV') {
            element.value = "";
            element.classList.remove("buen-input", "error-feo");
        }
    });
    
    elements.nombre.focus();
}

// Parse comma-separated values
function parseList(text) {
    return text.split(',').map(item => item.trim()).filter(item => item.length > 0);
}

// Create CV
function Crear_CV() {
    const t = translations[currentLang];
    
    if (!validate()) {
        return;
    }
    
    const values = getValues();
    
    // Create CV card
    const cvCard = document.createElement('div');
    cvCard.className = 'col-12 col-lg-8 mx-auto';
    cvCard.innerHTML = `
        <div class="cv-card">
            <div class="cv-header">
                <h2 class="cv-name">${escapeHtml(values.nombre)}</h2>
                <p class="cv-title">${currentLang === 'es' ? 'Profesional' : 'Professional'}</p>
            </div>
            <div class="cv-body">
                <div class="cv-sidebar">
                    <div class="cv-section">
                        <h3 class="cv-section-title">
                            <i class="bi bi-person-lines-fill"></i>
                            ${t.contact}
                        </h3>
                        <div class="cv-contact-list">
                            <div class="cv-contact-item">
                                <i class="bi bi-geo-alt-fill"></i>
                                <span>${escapeHtml(values.direccion)}</span>
                            </div>
                            <div class="cv-contact-item">
                                <i class="bi bi-envelope-fill"></i>
                                <span>${escapeHtml(values.correo)}</span>
                            </div>
                            <div class="cv-contact-item">
                                <i class="bi bi-phone-fill"></i>
                                <span>${escapeHtml(values.telefono)}</span>
                            </div>
                            ${values.pagina ? `
                            <div class="cv-contact-item">
                                <i class="bi bi-globe"></i>
                                <span>${escapeHtml(values.pagina)}</span>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    
                    <div class="cv-section">
                        <h3 class="cv-section-title">
                            <i class="bi bi-translate"></i>
                            ${t.languages}
                        </h3>
                        <ul class="cv-list">
                            ${parseList(values.idiomas).map(lang => `
                                <li class="cv-list-item">${escapeHtml(lang)}</li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="cv-section">
                        <h3 class="cv-section-title">
                            <i class="bi bi-lightning-charge-fill"></i>
                            ${t.skills}
                        </h3>
                        <ul class="cv-list">
                            ${parseList(values.skill).map(skill => `
                                <li class="cv-list-item">${escapeHtml(skill)}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="cv-main">
                    <div class="cv-section">
                        <h3 class="cv-section-title">
                            <i class="bi bi-file-person"></i>
                            ${t.summary}
                        </h3>
                        <div class="cv-summary">
                            ${escapeHtml(values.resumen)}
                        </div>
                    </div>
                    
                    <div class="cv-section">
                        <h3 class="cv-section-title">
                            <i class="bi bi-briefcase-fill"></i>
                            ${t.experience}
                        </h3>
                        <ul class="cv-list">
                            ${parseList(values.empleos).map(job => `
                                <li class="cv-list-item">${escapeHtml(job)}</li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="cv-section">
                        <h3 class="cv-section-title">
                            <i class="bi bi-mortarboard-fill"></i>
                            ${t.education}
                        </h3>
                        <ul class="cv-list">
                            ${parseList(values.educacion).map(edu => `
                                <li class="cv-list-item">${escapeHtml(edu)}</li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="cv-section">
                        <h3 class="cv-section-title">
                            <i class="bi bi-award-fill"></i>
                            ${t.certifications}
                        </h3>
                        <ul class="cv-list">
                            ${parseList(values.certificaciones).map(cert => `
                                <li class="cv-list-item">${escapeHtml(cert)}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            <button class="btn-delete" onclick="deleteCV(this)">
                <i class="bi bi-trash-fill"></i>
                ${t.delete}
            </button>
        </div>
    `;
    
    elements.cvContainer.appendChild(cvCard);
    Cls();
    
    // Scroll to CV
    cvCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Delete CV
function deleteCV(button) {
    const t = translations[currentLang];
    
    if (confirm(t.confirmDelete)) {
        const cvCard = button.closest('.col-12');
        cvCard.style.opacity = '0';
        cvCard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            cvCard.remove();
        }, 300);
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    setLanguage('es');
});
