document.getElementById('winamp').addEventListener('dblclick', function(event) {
    event.stopPropagation(); // Evita que el evento de doble clic se propague al controlador de eventos de clic
    
    const app = document.getElementById("app")
    const webamp = new Webamp();
    webamp.renderWhenReady(app);

    // Agregar archivos mp3 al playlist de Webamp
    // webamp.appendTracks([
    //     {url: './sta.mp3'},
    //     {url: '../mp3/stiffUpperLip-AcDc.mp3'}
    // ]);

    webamp.setTracksToPlay([
        {url: '../mp3/stiffUpperLip-AcDc.mp3'},
        {url: '../mp3/BackInBlack-AcDc.mp3'},
        {url: '../mp3/ForThoseAboutToRock-AcDc.mp3'},
        {url: '../mp3/HellsBells-AcDc.mp3'},
        {url: '../mp3/HighwayToHell-AcDc.mp3'},
        {url: '../mp3/ShootToThrill-AcDc.mp3'},
        {url: '../mp3/Thunderstruck-AcDc.mp3'},
        {url: '../mp3/TouchTooMuch-AcDc.mp3'},
        {url: '../mp3/YouShookMeAllNightLong-AcDc.mp3'}
    ]);

    this.querySelector('.icon-content').classList.remove('active');
});