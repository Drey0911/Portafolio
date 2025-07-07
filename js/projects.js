// Datos de proyectos
const projectsData = {

    1: {
        title: "SpringMotors - Pagina Web de Concesionario",
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
        repoLink: "https://github.com/Drey0911/APP-SpringMotors-Concesionario",
        mockupLink: "img/projects/project1/mockup.png",
        images: ["project1/project1-1.png", "project1/project1-2.jpg","project1/project1-3.jpg","project1/project1-4.png","project1/project1-5.png","project1/project1-6.png","project1/project1-7.png"]
    },

    2: {
        title: "Sistema de Gestión para trabajos de grado UTS",
        description: "Sistema completo para la gestion de los trabajos de grado (Anteproyectos) de las Unidades Tecnologicas de Santander, manejando roles unicos estrictos definidos por las UTS, estudiante, evaluador, director, coordinador y administrador.",
        features: [
            "Gestión de estudiantes y anteproyectos de grado",
            "Seguimiento de proyectos de cada estudiante y su avance",
            "Subida de documentos y archivos oficiales",
            "Panel de control y gestion para cada rol",
            "Interfaz amigable y responsiva",
            "Calificacion y seguimiento de proyectos",
        ],
        technologies: "Para este proyecto se utilizó Java Server Pages junto a la libreria JSTL, para la parte visual se utilizó HTML, CSS usando el framwork Boostrap para mayor comodidad y JavaScript para mejorar la experiencia del usuario, ademas de una base de datos MySQL para el almacenamiento de datos.",
        repoLink: "https://github.com/Drey0911/S.I-Gestion-De-Trabajos-De-Grado-UTS",
        mockupLink: "img/projects/project2/mockup.png",
         images: ["project2/project2-1.png", "project2/project2-2.png","project2/project2-3.png","project2/project2-4.png","project2/project2-5.png","project2/project2-6.png","project2/project2-7.png"]
    },

    3: {
        title: "Football PRO - Proyecto de relaciones Spring",
        description: "Este proyecto es para el aprendizaje optimo de las relaciones con SpringBoot enfocado al mundo del futbol y la gestion de un club profesional, desarrollado para comprender mejor las relaciones Spring OneToOne, ManyToOne, ManyToMany, OneToMany.",
        features: [
            "Relaciones entre entidades",
            "CRUD completo para la gestion de cada entidad y sus relaciones",
            "Autenticación básica",
            "Interfaz amigable y responsiva",
        ],
        technologies: "Tecnologías utilizadas: HTML, CSS, JavaScript, SpringBoot, Java",
        repoLink: "https://github.com/Drey0911/APP-Football-Pro",
        mockupLink: "img/projects/project3/mockup.png",
        images: ["project3/project3-1.png", "project3/project3-2.png","project3/project3-3.png","project3/project3-4.png","project3/project3-5.png","project3/project3-6.png","project3/project3-7.png"]
    },

    4: {
        title: "SmartPets - App de citas veterinarias",
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
        repoLink: "https://github.com/Drey0911/APP-Smart-Pets-Veterinaria",
        mockupLink: "img/projects/project4/mockup.jpg",
         images: ["project4/project4-1.png", "project4/project4-2.png","project4/project4-3.png","project4/project4-4.png","project4/project4-5.png","project4/project4-6.png","project4/project4-7.png"]
    },

        5: {
        title: "INVDrey - Software para la gestión de inventarios",
        description: "Software basico para el control de productos, clientes, compras, ventas y proveedores dentro de un inventario digital, permitiendo la gestión y correcto almacenamiento de datos de cada modulo del inventario.",
        features: [
            "Control y gestión de productos, clientes, proveedores, usuarios y roles",
            "Control y gestión de compras y ventas relacionadas con productos, clientes y proveedores",
            "Manejo de roles y permisos",
            "Control de sesiones y autenticación de usuarios",
            "Interfaz amigable",
            "Sistema de Datatables para todo el inventario",
        ],
        technologies: "Para este proyecto se utilizó PHP para el desarrollo del backendo, para el Frontend se utilizó HTML, CSS de la mano de su framewrok TailwindCSS, JavaScript para mejorar la experiencia del usuario, ademas de una base de datos MySQL para el almacenamiento de datos.",
        repoLink: "https://github.com/Drey0911/Inventario-Y-Gestion-De-Productos",
        mockupLink: "img/projects/project5/mockup.png",
          images: ["project5/project5-1.png", "project5/project5-2.png","project5/project5-3.png","project5/project5-4.png","project5/project5-5.png","project5/project5-6.png","project5/project5-7.png"]
    }

};

// Variables globales para controlar el carrusel
let carouselInterval;
let currentImageIndex = 0;

// Función para detener el carrusel
function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

// Función para iniciar el carrusel
function startCarousel(modalImages) {
    stopCarousel(); // Detener cualquier intervalo existente
    
    carouselInterval = setInterval(() => {
        modalImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % modalImages.length;
        modalImages[currentImageIndex].classList.add('active');
    }, 3000);
}

// Función para inicializar los proyectos
function initProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.querySelector('.project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalImages = document.querySelectorAll('.modal-images img');
    const btnMockup = document.querySelector('.btn-mockup');
    
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-view-more')) {
                const projectId = e.target.getAttribute('data-project');
                const project = projectsData[projectId];
                
                // Actualizar modal con datos del proyecto
                document.querySelector('.modal-title').textContent = project.title;
                document.querySelector('.modal-description h3').nextElementSibling.textContent = project.description;
                
                const featuresList = document.querySelector('.modal-description ul');
                featuresList.innerHTML = '';
                project.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
                
                document.querySelector('.modal-description p:last-of-type').textContent = project.technologies;
                document.querySelector('.btn-repository').setAttribute('href', project.repoLink);
                
                if (project.mockupLink) {
                    btnMockup.setAttribute('href', project.mockupLink);
                    btnMockup.style.display = 'inline-block';
                } else {
                    btnMockup.style.display = 'none';
                }

                // Actualizar imágenes
                modalImages.forEach((img, index) => {
                    if (project.images[index]) {
                        img.src = `img/projects/${project.images[index]}`;
                        img.alt = `${project.title} - Captura ${index + 1}`;
                        img.style.display = 'block'; // Asegurarse que todas son visibles inicialmente
                    } else {
                        img.style.display = 'none'; // Ocultar imágenes sin datos
                    }
                });
                
                // Resetear el carrusel
                currentImageIndex = 0;
                modalImages.forEach(img => img.classList.remove('active'));
                modalImages[0].classList.add('active');
                
                // Iniciar carrusel solo si hay más de una imagen
                if (project.images.length > 1) {
                    startCarousel(modalImages);
                } else {
                    stopCarousel();
                }
                
                // Mostrar modal
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Cerrar modal
    modalClose.addEventListener('click', () => {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        stopCarousel();
    });
    
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            stopCarousel();
        }
    });
    
    // Manejar clic en el botón de mockup
    btnMockup.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Exportar para usar en script.js
export { initProjects };