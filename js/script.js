import { initProjects } from './projects.js';

document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Animación de habilidades
    const skillsTrack = document.querySelector('.skills-track');
    const skillsItems = document.querySelectorAll('.skill-item');
    
    // Duplicar items para efecto infinito
    skillsItems.forEach(item => {
        const clone = item.cloneNode(true);
        skillsTrack.appendChild(clone);
    });
    
    // Inicializar proyectos
    initProjects();
    
    // Animación de barras de cualidades
    document.querySelectorAll('.quality-bar').forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.setProperty('--width', `${percent}%`);
    });
    
    // Formulario de contacto con EmailJS
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        emailjs.sendForm('service_cg0y95w', 'template_irzewtt', this)
            .then(() => {
                submitBtn.textContent = '¡Mensaje enviado!';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }, (error) => {
                submitBtn.textContent = 'Error al enviar';
                console.error('Error:', error);
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            });
    });
    
    // Efecto de escritura en el título
    const typingElement = document.querySelector('.typing');
    const phrases = [
        "Future Systems Engineer",
        "Technology lover",
        "developer in progress",
        "Frontend Enthusiast",
        "Software technician"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeWriter, 500);
        } else {
            const speed = isDeleting ? 100 : 150;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Iniciar efecto de escritura después de un breve retraso
    setTimeout(typeWriter, 1000);
    
    // Animación al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-card, .project-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configurar observadores para animaciones
    window.addEventListener('scroll', animateOnScroll);
    
    // Inicializar animaciones
    document.querySelectorAll('.about-card, .project-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar una vez al cargar
    animateOnScroll();
});

// Nav bar Spy para los enlaces y su reconocimiento por ID
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function activateLink() {
    const scrollY = window.pageYOffset;
    navLinks.forEach(link => {
      const targetId = link.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const top    = targetEl.offsetTop - 80;
      const bottom = top + targetEl.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', activateLink);
  activateLink(); // marca al cargar si ya estás scrolleado
});

// Animacion para que la imagen de la tarjeta del HEADER cambie automaticamente cada cierto tiempo

document.addEventListener('DOMContentLoaded', function() {
  const cardWrapper = document.querySelector('.card-wrapper');
  
  function toggleCard() {
    cardWrapper.classList.toggle('auto-hover');
    
    // Reiniciamos la animación del borde para que coincida
    const pulseRect = cardWrapper.querySelector('.pulse-rect');
    pulseRect.style.animation = 'none';
    void pulseRect.offsetWidth; // Trigger reflow
    pulseRect.style.animation = 'pulseRect 3s ease-in-out infinite';
  }
  
  // Cambiar cada 3 segundos
  setInterval(toggleCard, 9000);
});

// Modal de habilidades
document.addEventListener('DOMContentLoaded', function() {
    // Delegación de eventos para manejar clics dinámicos
    document.body.addEventListener('click', function(e) {
        const btnHabilidades = e.target.closest('#btn-ver-habilidades');
        const closeModal = e.target.closest('.modal-close');
        const modalHabilidades = document.querySelector('.skills-modal');
        
        
        // Abrir modal
        if (btnHabilidades) {
            e.preventDefault();
            modalHabilidades.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        // Cerrar modal
        if (closeModal) {
            modalHabilidades.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Cerrar al hacer clic fuera
        if (e.target === modalHabilidades) {
            modalHabilidades.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        const modalHabilidades = document.querySelector('.skills-modal');
        if (e.key === 'Escape' && modalHabilidades.style.display === 'block') {
            modalHabilidades.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const techTags = document.querySelectorAll('.tech-tag');
    let activeTooltip = null;
    
    // Función para mostrar un tooltip
    function showTooltip(tooltip) {
        // Ocultar todos los tooltips primero
        hideAllTooltips();
        
        // Mostrar el tooltip actual
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateX(-50%) translateY(-5px)';
        activeTooltip = tooltip;
    }
    
    // Función para ocultar todos los tooltips
    function hideAllTooltips() {
        document.querySelectorAll('.tech-info').forEach(info => {
            info.style.opacity = '0';
            info.style.transform = 'translateX(-50%)';
        });
        activeTooltip = null;
    }
    
    // Función para manejar el clic en un tech-tag
    function handleTagClick(tag) {
        const tooltip = tag.querySelector('.tech-info');
        
        // Si el tooltip ya está activo, lo ocultamos
        if (activeTooltip === tooltip) {
            hideAllTooltips();
            return;
        }
        
        // Mostramos el nuevo tooltip
        showTooltip(tooltip);
    }
    
    techTags.forEach(tag => {
        // Eventos para desktop (hover)
        tag.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) { // Solo para pantallas grandes
                showTooltip(this.querySelector('.tech-info'));
            }
        });
        
        tag.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) { // Solo para pantallas grandes
                hideAllTooltips();
            }
        });
        
        // Evento para móvil (click)
        tag.addEventListener('click', function(e) {
            // Prevenimos que el evento se propague al document.click
            e.stopPropagation();
            handleTagClick(this);
        });
    });
    
    // Cerrar tooltips al hacer click en cualquier parte (excepto en los tags)
    document.addEventListener('click', function() {
        hideAllTooltips();
    });
});

// WhatsApp functionality
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    const phoneNumber = '573222514185'; 
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            let message = '';
            
            if (this.classList.contains('custom-message')) {
                message = prompt('Escribe tu mensaje personalizado:');
                if (!message) return; // Si el usuario cancela, no hacer nada
            } else {
                message = this.getAttribute('data-message');
            }
            
            // Codificar el mensaje para URL
            const encodedMessage = encodeURIComponent(message);
            
            // Crear el enlace de WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Abrir en una nueva pestaña
            window.open(whatsappUrl, '_blank');
        });
    });
});