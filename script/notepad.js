//TODO Abrir notepado al clickear el ícono de Notepad.
//TODO RESTRICCION DE MOVIMIENTO FUERA DEL ESCRITORIO (no funciona)
document.addEventListener('DOMContentLoaded', function() {
    const notepadIcon = document.getElementById('notepad');
    const notepadWindow = document.getElementById('notepadWindow');
    const minimizeButton = notepadWindow.querySelector('.minimize');
    const maximizeButton = notepadWindow.querySelector('.maximize');
    const closeButton = notepadWindow.querySelector('.close');
    let isMaximized = false;
    let previousState = {};

    notepadIcon.addEventListener('dblclick', function(event) {
        openNotepad();
    });

    minimizeButton.addEventListener('click', function() {
        notepadWindow.style.display = 'none';
    });

    maximizeButton.addEventListener('click', function() {
        if (!isMaximized) {
            previousState = {
                width: notepadWindow.offsetWidth + 'px',
                height: notepadWindow.offsetHeight + 'px',
                left: notepadWindow.style.left,
                top: notepadWindow.style.top
            };
            notepadWindow.style.width = '100%';
            notepadWindow.style.height = '100%';
            notepadWindow.style.left = 0;
            notepadWindow.style.top = 0;
            isMaximized = true;
        } else {
            notepadWindow.style.width = previousState.width;
            notepadWindow.style.height = previousState.height;
            notepadWindow.style.left = previousState.left;
            notepadWindow.style.top = previousState.top;
            isMaximized = false;
        }
    });

    closeButton.addEventListener('click', function() {
        notepadWindow.style.display = 'none';
    });

    function openNotepad() {
        notepadWindow.style.display = 'block';
    }
});

//TODO Permitir mover la ventana al mantener click en la barra de título
document.addEventListener('DOMContentLoaded', function() {
    const notepadWindows = document.querySelectorAll('.windowNotepad'); // Obtener todas las ventanas Notepad

    // Iterar sobre cada ventana Notepad
    notepadWindows.forEach(function(notepadWindow) {
        const titleBar = notepadWindow.querySelector('.title-bar');
        let isDragging = false;
        let offsetX, offsetY;

        titleBar.addEventListener('mousedown', function(event) {
            // Calcular la posición inicial del mouse en relación con la ventana
            offsetX = event.clientX - notepadWindow.offsetLeft;
            offsetY = event.clientY - notepadWindow.offsetTop;
            
            // Habilitar el arrastre
            isDragging = true;
        });

        document.addEventListener('mousemove', function(event) {
            if (isDragging) {
                // Calcular la nueva posición de la ventana en función del movimiento del mouse
                const newLeft = event.clientX - offsetX;
                const newTop = event.clientY - offsetY;

                // Aplicar la nueva posición de la ventana
                notepadWindow.style.left = newLeft + 'px';
                notepadWindow.style.top = newTop + 'px';
            }
        });

        document.addEventListener('mouseup', function(event) {
            // Deshabilitar el arrastre cuando se suelta el botón del ratón
            isDragging = false;
        });
    });
});