document.getElementById('winamp').addEventListener('dblclick', function(event) {
    event.stopPropagation(); // Evita que el evento de doble clic se propague al controlador de eventos de clic
    const app = document.getElementById("app")
    const webamp = new Webamp();
    webamp.renderWhenReady(app);
    this.querySelector('.icon-content').classList.remove('active');
});

//! Archivos MP3

