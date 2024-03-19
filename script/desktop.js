

//! Selección de íconos
document.querySelectorAll('.icon').forEach(function(el) {
    el.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el evento se propague al documento

        // Primero, elimina la clase 'active' de todos los íconos
        document.querySelectorAll('.active').forEach(function(activeEl) {
            activeEl.classList.remove('active');
        });

        // Luego, agrega la clase 'active' al contenedor interno del ícono que se ha hecho clic
        this.querySelector('.icon-content').classList.add('active');
    });
});

document.addEventListener('click', function() {
    document.querySelectorAll('.active').forEach(function(el) {
        el.classList.remove('active');
    });
});

//! V E N T A N A S
const folders = document.querySelectorAll('.folder');

folders.forEach(function(folder){
    folder.addEventListener('dblclick', function() {
        const folderName = folder.querySelector('.editable').textContent;
        windowElement.querySelector('.title').textContent = folderName;
        windowElement.style.display = 'block';
    });
});

document.getElementById('documentos').addEventListener('dblclick', function() {
    document.getElementById('myDocumentsWindow').style.display = 'block';
});

// Obtiene la ventana y la barra de título
const windowElement = document.getElementById('myDocumentsWindow');
const titleBar = windowElement.querySelector('.title-bar');

let dragging = false;
let dragOffsetX, dragOffsetY;

// Cuando el usuario hace clic en la barra de título, comienza a arrastrar
titleBar.addEventListener('mousedown', function(event) {
    dragging = true;
    dragOffsetX = event.clientX - windowElement.offsetLeft;
    dragOffsetY = event.clientY - windowElement.offsetTop;
});

// Cuando el usuario suelta el botón del ratón, deja de arrastrar
document.addEventListener('mouseup', function() {
    dragging = false;
});

// Cuando el usuario mueve el ratón, si está arrastrando, mueve la ventana
document.addEventListener('mousemove', function(event) {
    if (dragging) {
        const x = event.clientX - dragOffsetX;
        const y = event.clientY - dragOffsetY;
        windowElement.style.left = x + 'px';
        windowElement.style.top = y + 'px';
    }
});

//! Config Ventanas y Botones
const minimizeButton = windowElement.querySelector('.minimize');
const maximizeButton = windowElement.querySelector('.maximize');
const closeButton = windowElement.querySelector('.close');

minimizeButton.addEventListener('click', function() {
    windowElement.style.height = '0';
    windowElement.style.width = '0';
});

maximizeButton.addEventListener('click', function() {
    windowElement.style.height = '100%';
    windowElement.style.width = '100%';
});

closeButton.addEventListener('click', function() {
    windowElement.style.display = 'none';
});

//! CONFIG CORRESPONDIENTE A MAXIMIXAR, MINIMIXAR, ACHICAR Y AGRANDAR

let isMaximized = false;
let previousWidth, previousHeight, previousTop, previousLeft;

maximizeButton.addEventListener('click', function() {
    if (!isMaximized) {
        // Guarda el tamaño y la posición actuales de la ventana
        previousWidth = windowElement.style.width;
        previousHeight = windowElement.style.height;
        previousTop = windowElement.style.top;
        previousLeft = windowElement.style.left;

        // Maximiza la ventana
        windowElement.style.width = '100%';
        windowElement.style.height = '100%';
        windowElement.style.top = '0';
        windowElement.style.left = '0';

        // Cambia el ícono del botón a "restaurar"
        maximizeButton.textContent = '⧉';

        isMaximized = true;
    } else {
        // Restaura el tamaño y la posición de la ventana
        windowElement.style.width = previousWidth;
        windowElement.style.height = previousHeight;
        windowElement.style.top = previousTop;
        windowElement.style.left = previousLeft;

        // Cambia el ícono del botón a "maximizar"
        maximizeButton.textContent = '□';

        isMaximized = false;
    }
});

//! RESIZE SI SE HIZO CLICK CERCA DEL BORDE DE LA CARPETA (DESHABILITADO POR EL MOMENTO)
// let resizableWindows = document.querySelectorAll('.resizable');
//     resizableWindows.forEach(function(windowElement) {
//         let resizing = false;
//         let resizeOffsetX, resizeOffsetY;

//         windowElement.addEventListener('mousedown', function(event) {
//             if (event.clientX > windowElement.offsetLeft && event.clientX < windowElement.offsetLeft + windowElement.offsetWidth &&
//                 event.clientY > windowElement.offsetTop && event.clientY < windowElement.offsetTop + windowElement.offsetHeight) {
//                 resizing = true;
//                 resizeOffsetX = event.clientX - windowElement.offsetWidth;
//                 resizeOffsetY = event.clientY - windowElement.offsetHeight;
//             }
//         });

//         document.addEventListener('mouseup', function() {
//             resizing = false;
//         });

//         document.addEventListener('mousemove', function(event) {
//             if (resizing) {
//                 const width = event.clientX - windowElement.offsetLeft - resizeOffsetX;
//                 const height = event.clientY - windowElement.offsetTop - resizeOffsetY;
//                 windowElement.style.width = width + 'px';
//                 windowElement.style.height = height + 'px';
//             }
//         });
//     });


//! Crear Carpetas y TXT (DESHABILITADO POR AHORA)
// document.getElementById('newFolder').addEventListener('click', function() {
//     createFileOrFolder('New Folder', 'folder');
// });

// document.getElementById('newTextDocument').addEventListener('click', function() {
//     createFileOrFolder('New Text Document', 'text');
// });

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

