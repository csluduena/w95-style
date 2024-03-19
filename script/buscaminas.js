document.addEventListener('DOMContentLoaded', function() {
    const buscaminasIcon = document.getElementById('buscaminas');
    const buscaminasWindow = document.getElementById('windowBMNA');
    const minimizeButton = buscaminasWindow.querySelector('.minimize');
    const maximizeButton = buscaminasWindow.querySelector('.maximize');
    const closeButton = buscaminasWindow.querySelector('.close');
    let isMaximized = false;
    let previousState = {};

    buscaminasIcon.addEventListener('dblclick', function(event) {
        openBuscaminas();
        buscaminasWindow.style.display = 'block'; // Cambiar el estilo display a block
    });

    minimizeButton.addEventListener('click', function() {
        buscaminasWindow.style.display = 'none';
    });

    maximizeButton.addEventListener('click', function() {
        if (!isMaximized) {
            previousState = {
                width: buscaminasWindow.offsetWidth + 'px',
                height: buscaminasWindow.offsetHeight + 'px',
                left: buscaminasWindow.style.left,
                top: buscaminasWindow.style.top
            };
            buscaminasWindow.style.width = '100%';
            buscaminasWindow.style.height = '100%';
            buscaminasWindow.style.left = 0;
            buscaminasWindow.style.top = 0;
            isMaximized = true;
        } else {
            buscaminasWindow.style.width = previousState.width;
            buscaminasWindow.style.height = previousState.height;
            buscaminasWindow.style.left = previousState.left;
            buscaminasWindow.style.top = previousState.top;
            isMaximized = false;
        }
    });

    closeButton.addEventListener('click', function() {
        buscaminasWindow.style.display = 'none';
    });

    function openBuscaminas() {
        //buscaminasWindow.style.display = 'block'; // Esto lo movemos arriba para que se ejecute al hacer doble clic en el ícono
    }
});


//TODO FUNCIÓN PARA MOVER VENTANAS. (Agregar "moverVentana" en la primer clase de la ventana y mantener luego el "title-bar")
document.addEventListener('DOMContentLoaded', function() {
    const moverVentanas = document.querySelectorAll('.moverVentana'); // Obtener todas las ventanas Notepad

    // Iterar sobre cada ventana Notepad
    moverVentanas.forEach(function(functionMover) {
        const titleBar = functionMover.querySelector('.title-bar');
        let isDragging = false;
        let offsetX, offsetY;

        titleBar.addEventListener('mousedown', function(event) {
            // Calcular la posición inicial del mouse en relación con la ventana
            offsetX = event.clientX - functionMover.offsetLeft;
            offsetY = event.clientY - functionMover.offsetTop;
            
            // Habilitar el arrastre
            isDragging = true;
        });

        document.addEventListener('mousemove', function(event) {
            if (isDragging) {
                // Calcular la nueva posición de la ventana en función del movimiento del mouse
                const newLeft = event.clientX - offsetX;
                const newTop = event.clientY - offsetY;

                // Aplicar la nueva posición de la ventana
                functionMover.style.left = newLeft + 'px';
                functionMover.style.top = newTop + 'px';
            }
        });

        document.addEventListener('mouseup', function(event) {
            // Deshabilitar el arrastre cuando se suelta el botón del ratón
            isDragging = false;
        });
    });
});