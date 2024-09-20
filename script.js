// Selecciona el botón y el cuerpo del documento
const modoOscuroBtn = document.getElementById('modo-oscuro-btn');
const body = document.body;

// Función para alternar el modo oscuro
modoOscuroBtn.addEventListener('click', function() {
    // Alterna la clase 'dark-mode' en el cuerpo
    body.classList.toggle('dark-mode');

    // Cambia el texto del botón dependiendo del modo activo
    if (body.classList.contains('dark-mode')) {
        modoOscuroBtn.textContent = 'Desactivar Modo Oscuro';
    } else {
        modoOscuroBtn.textContent = 'Activar Modo Oscuro';
    }
});
