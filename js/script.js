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
  activateLink(); // marca al cargar 
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
    let activeTooltip = null; // referencia al tooltip interno
    let floatingTooltip = null; // elemento flotante en body (móvil)

    // Oculta todos los tooltips internos
    function hideAllTooltips() {
        document.querySelectorAll('.tech-info').forEach(info => {
            info.style.opacity = '0';
            info.style.transform = 'translateX(-50%)';
            info.style.pointerEvents = 'none';
        });
        if (floatingTooltip) {
            floatingTooltip.remove();
            floatingTooltip = null;
        }
        activeTooltip = null;
    }

    // Muestra tooltip 
    function showInlineTooltip(tooltip) {
        hideAllTooltips();
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateX(-50%) translateY(-5px)';
        tooltip.style.pointerEvents = 'auto';
        activeTooltip = tooltip;
    }

    // Crea o muestra un tooltip
    function showFloatingTooltip(tag) {
        hideAllTooltips();
        const source = tag.querySelector('.tech-info');
        if (!source) return;

        // crear contenedor flotante
        floatingTooltip = document.createElement('div');
        floatingTooltip.className = 'floating-tech-info';
        floatingTooltip.innerHTML = source.innerHTML;
        document.body.appendChild(floatingTooltip);

        // estilo base
        Object.assign(floatingTooltip.style, {
            position: 'fixed',
            zIndex: 9999,
            maxWidth: '90%',
            width: 'auto',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: '0',
            background: getComputedStyle(document.documentElement).getPropertyValue('--bg-secondary') || '#111',
            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color') || '#fff',
            padding: '12px',
            borderRadius: '10px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            transition: 'opacity 0.18s ease, transform 0.18s ease',
            pointerEvents: 'auto'
        });

        // posicionar cerca de la etiqueta 
        const rect = tag.getBoundingClientRect();
        // temporalmente visible para medir
        floatingTooltip.style.opacity = '0';
        floatingTooltip.style.top = '0px';
        floatingTooltip.style.bottom = 'auto';

        // medir y colocar
        requestAnimationFrame(() => {
            const ttRect = floatingTooltip.getBoundingClientRect();
            let top = rect.top - ttRect.height - 8; // encima por defecto
            if (top < 8) { // si no cabe arriba, colocarlo debajo de la etiqueta
                top = rect.bottom + 8;
            }
            // límite inferior
            if (top + ttRect.height > window.innerHeight - 8) {
                top = window.innerHeight - ttRect.height - 8;
            }
            floatingTooltip.style.left = Math.min(Math.max(rect.left + rect.width / 2 - ttRect.width / 2, 8), window.innerWidth - ttRect.width - 8) + 'px';
            floatingTooltip.style.top = top + 'px';
            floatingTooltip.style.transform = 'translateX(0)'; 
            floatingTooltip.style.opacity = '1';
        });
    }

    techTags.forEach(tag => {
        // Hover en desktop
        tag.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                const info = this.querySelector('.tech-info');
                if (info) showInlineTooltip(info);
            }
        });
        tag.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                hideAllTooltips();
            }
        });

        tag.addEventListener('click', function(e) {
            e.stopPropagation();
            if (window.innerWidth <= 768) {

                if (floatingTooltip) {
                    floatingTooltip.remove();
                    floatingTooltip = null;
                    return;
                }
                showFloatingTooltip(this);
            } else {
                const info = this.querySelector('.tech-info');
                if (!info) return;
                if (activeTooltip === info) {
                    hideAllTooltips();
                } else {
                    showInlineTooltip(info);
                }
            }
        });
    });

    // Cerrar tooltips al hacer click en cualquier parte
    document.addEventListener('click', function(e) {
        
        if (floatingTooltip && (floatingTooltip === e.target || floatingTooltip.contains(e.target))) return;
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