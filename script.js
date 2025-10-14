/**
 * Lógica principal para el menú de pestañas (Características).
 * Esta función se llama directamente desde los botones en index.html (onclick).
 * Elimina la clase 'active' de todo y luego la aplica solo al elemento clicado.
 */
function openFeature(evt, featureName) {
    let i, tabcontent, tablinks;

    // 1. Ocultar todo el contenido de las pestañas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }

    // 2. Remover la clase 'active' de todos los botones
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }

    // 3. Mostrar la pestaña actual (el contenido) y añadir la clase 'active' al botón clicado
    document.getElementById(featureName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

/**
 * Lógica para la inicialización de la página.
 */
document.addEventListener('DOMContentLoaded', (event) => {
    // ----------------------------------------------------
    // INICIALIZACIÓN DE PESTAÑAS
    // ----------------------------------------------------
    // La primera pestaña ya está marcada como 'active' en el HTML para evitar destellos.
    // Esta sección está comentada, ya que la inicialización en el HTML es suficiente.
    
    // Si quieres forzar la activación por JS, descomenta estas líneas:
    // document.querySelector('.tab-content').classList.add('active');
    // document.querySelector('.tab-link').classList.add('active');

    // ----------------------------------------------------
    // TO-DO: LÓGICA DEL MENÚ HAMBURGUESA (SI SE IMPLEMENTA)
    // ----------------------------------------------------
    // Aquí iría el código para manejar la apertura y cierre del menú de navegación
    // en dispositivos móviles (clase 'responsive' o 'open' en el tag <nav> o <ul>).
});

// Puedes añadir aquí más lógica:
// 1. Un efecto de "escritura" en el título principal si lo deseas.