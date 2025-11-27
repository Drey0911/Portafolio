// Datos de proyectos
const projectsData = {
    1: {
        title: "SpringMotors - Pagina Web de Concesionario",
        type: "backend",
        description: "Plataforma web para la gestion de un concesionario y todo su inventario, tanto vehiculos como repuestos, ademas de ser un inventario agil para el usuario, gestionando proveedores, fabricantes y clientes desde un panel de control exclusivo, manejando ademas un contexto de roles con su panel unico.",
        features: [
            "Registro y administración de Vehiculos y repuestos",
            "Catalogo con filtros para mejorar la busqueda",
            "Seguridad y control en el manejo de sesiones",
            "Gestion optima de proveedores, fabricantes y clientes",
            "Panel de control exclusivo para administradores",
            "Manejo de roles y permisos",
            "Interfaz amigable y responsiva"
        ],
        technologies: "Proyecto enfocado al desarrollo con SpringBoot y conexion a una base de datos PostgreSQL, utilizando Thymeleaf, HTML y CSS para la parte visual, JavaScript para mejorar la experiencia del usuario, contiene H2 console para pruebas y una conexion a Neon Database.",
        techTags: [
            { class: "tech-html", name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { class: "tech-css", name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { class: "tech-js", name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { class: "tech-spring", name: "SpringBoot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { class: "tech-java", name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { class: "tech-postgresql", name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
        ],
        repoLink: "https://github.com/Drey0911/APP-SpringMotors-Concesionario",
        repoLink2: "",
        mockupLink: "img/projects/project1/mockup.png",
        deployLink: "",
        images: ["project1/project1-1.png", "project1/project1-2.jpg","project1/project1-3.jpg","project1/project1-4.png","project1/project1-5.png","project1/project1-6.png","project1/project1-7.png"]
    },

    2: {
        title: "MediFast App para dispensación digital de insumos médicos",
        type: "fullstack",
        description: "Aplicacion movil Fullstack desarrollada para la agenda de recolecciones de medicamentos e insumos medicos, con un sistema de recordatorios automaticos via WhatsApp y un dashboard administrativo web para la gestion completa del dispensario medico, este proyecto fue creado, desarrollado y documentado para mi proyecto de grado Tecnológico.",
        features: [
            "Webcoskets para actualizacion en tiempo real",
            "Jobs programados para el envio automatico de recordatorios",
            "Servicio de mensajeria con WhatsApp Business API",
            "Dashboard administrativo web",
            "Gestion de medicamentos, sedes, usuarios, recolecciones, historiales y favoritos",
            "Interfaz amigable y responsiva",
            "ChatBOT Basico para disponibilidad, medicamentos y ayuda al usuario (Prototipo)"
        ],
        technologies: "Para este proyecto se utilizó Python con Flask para el desarrollo backend (Rutas, modelos y servicios), acompañado de librerias utiles para Websockets, Schedulers y jobs, Autenticación JWT, plantillas JINJA2 para el dashboard administrativo con un frontend en react native para el desarrollo movil siguiendo la arquitectura MVP (Modelo-vista-presentador), ademas de una base de datos relacional en MySQL, consumo y desarrollo de API REST y conexion con WhatsApp Business API para el envio de notificaciones y recordatorios automáticos.",
        techTags: [
            { class: "tech-python", name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { class: "tech-flask", name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
            { class: "tech-reactnative", name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { class: "tech-typescript", name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { class: "tech-mysql", name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
        ],
        repoLink: "https://github.com/Drey0911/TG-MediFast-Dispensario-BACKEND",
        repoLink2: "https://github.com/Drey0911/TG-MediFast-Dispensario-FRONTEND",
        mockupLink: "img/projects/project2/mockup.png",
        deployLink: "",
        images: ["project2/project2-1.png", "project2/project2-2.png","project2/project2-3.png","project2/project2-4.png","project2/project2-5.png","project2/project2-6.png","project2/project2-7.png"]
    },

    3: {
        title: "Football PRO - Proyecto de relaciones Spring",
        type: "backend",
        description: "Este proyecto es para el aprendizaje optimo de las relaciones con SpringBoot enfocado al mundo del futbol y la gestion de un club profesional, desarrollado para comprender mejor las relaciones Spring OneToOne, ManyToOne, ManyToMany, OneToMany.",
        features: [
            "Relaciones entre entidades",
            "CRUD completo para la gestion de cada entidad y sus relaciones",
            "Autenticación básica",
            "Interfaz amigable y responsiva",
        ],
        technologies: "Tecnologías utilizadas: HTML, CSS, JavaScript, SpringBoot, Java",
        techTags: [
            { class: "tech-html", name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { class: "tech-css", name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { class: "tech-js", name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { class: "tech-spring", name: "SpringBoot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { class: "tech-java", name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
        ],
        repoLink: "https://github.com/Drey0911/APP-Football-Pro",
        repoLink2: "",
        mockupLink: "img/projects/project3/mockup.png",
        deployLink: "",
        images: ["project3/project3-1.png", "project3/project3-2.png","project3/project3-3.png","project3/project3-4.png","project3/project3-5.png","project3/project3-6.png","project3/project3-7.png"]
    },

    4: {
        title: "SmartPets - App de citas veterinarias",
        type: "frontend",
        description: "Aplicación para el control, agenda y gestion de citas veterinarias y mascotas en tiempo real y al alcance de un dispositivo movil iOS o Android.",
        features: [
            "Agendamiento de citas e historial médico",
            "Gestion de mascotas y profesionales veterinarios",
            "Panel de control para administradores",
            "Interfaz amigable tanto en modo claro como oscuro independiente para cada usuario",
            "Notificaciones push",
            "Autenticacion y registro de usuarios",
        ],
        technologies: "Para este proyecto se utilizó el framework Flutter para desarrollo movil junto a sus diversas configuraciones unicas tanto para iOS como Android, cuenta con una conexion a Firebase haciendo uso del Storage para el almacenamiento de imagenes y el authentication para el registro y autenticacion de usuarios, ademas de una base de datos en tiempo real para el almacenamiento de datos.",
        techTags: [
            { class: "tech-flutter", name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
            { class: "tech-firebase", name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
        ],
        repoLink: "https://github.com/Drey0911/APP-Smart-Pets-Veterinaria",
        repoLink2: "",
        mockupLink: "img/projects/project4/mockup.jpg",
        deployLink: "",
        images: ["project4/project4-1.png", "project4/project4-2.png","project4/project4-3.png","project4/project4-4.png","project4/project4-5.png","project4/project4-6.png","project4/project4-7.png"]
    },

    5: {
        title: "INVDrey - Software para la gestión de inventarios",
        type: "backend",
        description: "Software basico para el control de productos, clientes, compras, ventas y proveedores dentro de un inventario digital, permitiendo la gestión y correcto almacenamiento de datos de cada modulo del inventario.",
        features: [
            "Control y gestión de productos, clientes, proveedores, usuarios y roles",
            "Control y gestión de compras y ventas relacionadas con productos, clientes y proveedores",
            "Manejo de roles y permisos",
            "Control de sesiones y autenticación de usuarios",
            "Interfaz amigable",
            "Sistema de Datatables para todo el inventario",
        ],
        technologies: "Para este proyecto se utilizó PHP para el desarrollo del backend, para el Frontend se utilizó HTML, CSS de la mano de su framewrok TailwindCSS, JavaScript para mejorar la experiencia del usuario, ademas de una base de datos MySQL para el almacenamiento de datos.",
        techTags: [
            { class: "tech-php", name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { class: "tech-js", name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { class: "tech-mysql", name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { class: "tech-css", name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
        ],
        repoLink: "https://github.com/Drey0911/Inventario-Y-Gestion-De-Productos",
        repoLink2: "",
        mockupLink: "img/projects/project5/mockup.png",
        deployLink: "",
        images: ["project5/project5-1.png", "project5/project5-2.png","project5/project5-3.png","project5/project5-4.png","project5/project5-5.png","project5/project5-6.png","project5/project5-7.png"]
    }
};

// Variables globales para controlar el carrusel
let carouselInterval;
let currentImageIndex = 0;
let totalImages = 0;

// Función para detener el carrusel
function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

// Función para iniciar el carrusel
function startCarousel(modalImages) {
    stopCarousel();
    
    carouselInterval = setInterval(() => {
        nextImage(modalImages);
    }, 4000);
}

// Función para cambiar a la siguiente imagen
function nextImage(modalImages) {
    modalImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    modalImages[currentImageIndex].classList.add('active');
    updateIndicators();
}

// Función para cambiar a la imagen anterior
function prevImage(modalImages) {
    modalImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    modalImages[currentImageIndex].classList.add('active');
    updateIndicators();
}

// Función para ir a una imagen específica
function goToImage(index, modalImages) {
    modalImages[currentImageIndex].classList.remove('active');
    currentImageIndex = index;
    modalImages[currentImageIndex].classList.add('active');
    updateIndicators();
}

// Función para actualizar los indicadores
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentImageIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Función para crear los indicadores del carrusel
function createIndicators(imageCount) {
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    indicatorsContainer.innerHTML = '';
    
    for (let i = 0; i < imageCount; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            const modalImages = document.querySelectorAll('.modal-images img');
            goToImage(i, modalImages);
            stopCarousel();
            startCarousel(modalImages);
        });
        indicatorsContainer.appendChild(indicator);
    }
}

// Función para inicializar los proyectos
function initProjects() {
    renderProjects('all');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterType = button.getAttribute('data-filter');
            renderProjects(filterType);
        });
    });
    
    setupModalListeners();
}

// Función para obtener el nombre del tipo en español
function getTypeName(type) {
    const typeNames = {
        'frontend': 'Frontend',
        'backend': 'Backend',
        'fullstack': 'Fullstack'
    };
    return typeNames[type] || type;
}

// Función para renderizar proyectos según el filtro
function renderProjects(filterType) {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    let filteredProjects = Object.entries(projectsData);
    
    if (filterType !== 'all') {
        filteredProjects = filteredProjects.filter(([id, project]) => project.type === filterType);
    }
    
    filteredProjects.forEach(([id, project]) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const imageUrl = `img/projects/project${id}/project${id}.png`;
        
        // Crear tags con logos en gris
        const techTagsHTML = project.techTags.map(tech => {
            return `<span class="${tech.class}">
                <img src="${tech.logo}" alt="${tech.name}" class="tech-logo-card">
                ${tech.name}
            </span>`;
        }).join('');
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${imageUrl}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <div class="project-tech">
                    ${techTagsHTML}
                </div>
                <button class="btn-view-more" data-project="${id}">
                    <span>Ver más detalles</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
    
    setupCardListeners();
}

// Función para configurar event listeners de las tarjetas
function setupCardListeners() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const btn = card.querySelector('.btn-view-more');
            if (btn) {
                openProjectModal(btn.getAttribute('data-project'));
            }
        });
    });
}

// Función para abrir el modal del proyecto
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    const projectModal = document.querySelector('.project-modal');
    const modalImages = document.querySelectorAll('.modal-images img');
    
    // Actualizar título y badge
    document.querySelector('.modal-title').textContent = project.title;
    const typeBadge = document.querySelector('.modal-type-badge');
    typeBadge.textContent = getTypeName(project.type);
    
    // Actualizar descripción
    document.querySelector('.description-text').textContent = project.description;
    
    // Actualizar características
    const featuresList = document.querySelector('.features-list');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Actualizar tecnologías
    document.querySelector('.technologies-text').textContent = project.technologies;
    
    // Actualizar tags de tecnología en el modal con logos a color
    const techTagsModal = document.querySelector('.tech-tags-modal');
    techTagsModal.innerHTML = '';
    project.techTags.forEach(tech => {
        const span = document.createElement('span');
        span.className = tech.class;
        span.innerHTML = `
            <img src="${tech.logo}" alt="${tech.name}" class="tech-logo-modal">
            ${tech.name}
        `;
        techTagsModal.appendChild(span);
    });
    
    // Crear botones dinámicamente según el tipo de proyecto
    const buttonsContainer = document.querySelector('.modal-project-buttons');
    buttonsContainer.innerHTML = '';
    
    // Determinar qué botones mostrar según el tipo
    if (project.type === 'fullstack') {
        // Fullstack: Frontend y Backend
        if (project.repoLink) {
            const btnBackend = document.createElement('a');
            btnBackend.href = project.repoLink;
            btnBackend.target = '_blank';
            btnBackend.className = 'btn-repository btn-repo-backend';
            btnBackend.innerHTML = '<i class="fab fa-github"></i><span>Backend</span>';
            buttonsContainer.appendChild(btnBackend);
        }
        
        if (project.repoLink2 && project.repoLink2.trim() !== '') {
            const btnFrontend = document.createElement('a');
            btnFrontend.href = project.repoLink2;
            btnFrontend.target = '_blank';
            btnFrontend.className = 'btn-repository btn-repo-frontend';
            btnFrontend.innerHTML = '<i class="fab fa-github"></i><span>Frontend</span>';
            buttonsContainer.appendChild(btnFrontend);
        }
    } else {
        // Frontend o Backend: solo un repositorio
        if (project.repoLink) {
            const btnRepo = document.createElement('a');
            btnRepo.href = project.repoLink;
            btnRepo.target = '_blank';
            btnRepo.className = 'btn-repository btn-repo-general';
            btnRepo.innerHTML = '<i class="fab fa-github"></i><span>Repositorio</span>';
            buttonsContainer.appendChild(btnRepo);
        }
    }
    
    // Botón de mockup (si existe)
    if (project.mockupLink && project.mockupLink.trim() !== '') {
        const btnMockup = document.createElement('a');
        btnMockup.href = project.mockupLink;
        btnMockup.target = '_blank';
        btnMockup.className = 'btn-repository btn-mockup';
        btnMockup.innerHTML = '<i class="fas fa-image"></i><span>Ver Mockup</span>';
        buttonsContainer.appendChild(btnMockup);
    }
    
    // Botón de despliegue (si existe)
    if (project.deployLink && project.deployLink.trim() !== '') {
        const btnDeploy = document.createElement('a');
        btnDeploy.href = project.deployLink;
        btnDeploy.target = '_blank';
        btnDeploy.className = 'btn-repository btn-deploy';
        btnDeploy.innerHTML = '<i class="fas fa-rocket"></i><span>Ver Despliegue</span>';
        buttonsContainer.appendChild(btnDeploy);
    }

    // Contar imágenes disponibles
    totalImages = project.images.filter(img => img).length;
    
    // Actualizar imágenes
    modalImages.forEach((img, index) => {
        if (project.images[index]) {
            img.src = `img/projects/${project.images[index]}`;
            img.alt = `${project.title} - Captura ${index + 1}`;
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
    
    // Crear indicadores
    createIndicators(totalImages);
    
    // Resetear el carrusel
    currentImageIndex = 0;
    modalImages.forEach(img => img.classList.remove('active'));
    if (modalImages[0]) modalImages[0].classList.add('active');
    
    // Iniciar carrusel solo si hay más de una imagen
    if (totalImages > 1) {
        startCarousel(modalImages);
    } else {
        stopCarousel();
    }
    
    // Mostrar modal
    projectModal.style.display = 'flex';
    setTimeout(() => {
        projectModal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
}

// Función para configurar event listeners del modal
function setupModalListeners() {
    const projectModal = document.querySelector('.project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    // Cerrar modal
    const closeModal = () => {
        projectModal.classList.remove('active');
        setTimeout(() => {
            projectModal.style.display = 'none';
        }, 400);
        document.body.style.overflow = 'auto';
        stopCarousel();
    };
    
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    // Controles del carrusel
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modalImages = document.querySelectorAll('.modal-images img');
        prevImage(modalImages);
        stopCarousel();
        startCarousel(modalImages);
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modalImages = document.querySelectorAll('.modal-images img');
        nextImage(modalImages);
        stopCarousel();
        startCarousel(modalImages);
    });
    
    // Teclado: flechas y escape
    document.addEventListener('keydown', (e) => {
        if (!projectModal.classList.contains('active')) return;
        
        const modalImages = document.querySelectorAll('.modal-images img');
        
        if (e.key === 'ArrowLeft') {
            prevImage(modalImages);
            stopCarousel();
            startCarousel(modalImages);
        } else if (e.key === 'ArrowRight') {
            nextImage(modalImages);
            stopCarousel();
            startCarousel(modalImages);
        } else if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Exportar para usar en script.js
export { initProjects };