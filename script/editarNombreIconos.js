//!Permitir editar el nombre de los íconos

var nombresPredeterminados = {
    'myPcText': 'My Computer',
    'documentosText': 'My Documents',
    'cvText': 'Resume.txt',
    'textMp3': 'MP3',
    'winampText' : 'Winamp',
    'notepadText': 'Notepad',
    'papeleraText': 'Recycle Bin',
    'buscaminasText': 'Buscaminas'
};

function agregarEventosAIconos() {
    document.querySelectorAll('.editable').forEach(function(el) {
        var originalName;

        // Al hacer doble clic, guarda el nombre original y haz que el texto sea editable
        el.addEventListener('dblclick', function() {
            originalName = this.innerText;
            this.contentEditable = true;
            this.focus();
        });

        // Cuando se presiona 'Enter', guarda el cambio y desactiva la edición
        el.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.blur(); // Desenfoca el elemento para desactivar la edición
            }
        });

        // Al perder el foco, guarda el cambio y desactiva la edición
        el.addEventListener('blur', function() {
            this.contentEditable = false;

            // Comprueba si el texto está vacío o contiene caracteres inválidos
            var newName = this.innerText.trim();
            var invalidCharacters = /[^a-zA-Z0-9 .\-]/g; // Ajusta esto para permitir o prohibir diferentes caracteres

            if (newName === '') {
                alert('El nombre no puede estar vacío.');
                this.innerText = originalName;
            } else if (invalidCharacters.test(newName)) {
                alert('El nombre solo puede contener letras, números, espacios, puntos y guiones.');
                this.innerText = originalName;
            } else {
                // Solo cambia el ícono de la papelera si el nombre ha cambiado
                if (newName !== originalName) {
                    document.querySelector('.papelera').style.backgroundImage = "url('../img/desktopIcons/recycle_bin_full.png')";
                }
            }
        });
    });
}

// Al cargar la página, agrega los controladores de eventos a los íconos
agregarEventosAIconos();

// Al hacer doble clic en la papelera, restaura los nombres predeterminados
document.querySelector('.papelera').addEventListener('dblclick', function() {
    for (var className in nombresPredeterminados) {
        var el = document.querySelector('.' + className);
        el.innerText = nombresPredeterminados[className];
    }
    this.style.backgroundImage = "url('../img/desktopIcons/recycle_bin_empty.png')";

    // Después de restaurar los nombres predeterminados, vuelve a agregar los controladores de eventos a los íconos
    agregarEventosAIconos();
});
