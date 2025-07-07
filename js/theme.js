// Selección de elementos
const toggle = document.getElementById('theme-toggle');
const html   = document.documentElement;

// Funcion para aplicar el tema y guardar dicha preferencia en el local Storage del navegador
function applyTheme(theme) {
  if (theme === 'light') {
    html.setAttribute('data-theme', 'light');
    toggle.checked = false;          // Sol “encendido” = modo claro
  } else {
    html.removeAttribute('data-theme'); // ó html.setAttribute('data-theme','dark')
    toggle.checked = true;           // Luna “encendida” = modo oscuro
  }
  localStorage.setItem('theme', theme);
}

// Toggle que escucha el cambio
toggle.addEventListener('change', () => {
  const newTheme = toggle.checked ? 'dark' : 'light';
  applyTheme(newTheme);
});

// Al cargar la página: restaura preferencia o usa oscuro
document.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem('theme');
  applyTheme(stored === 'light' ? 'light' : 'dark');
});
