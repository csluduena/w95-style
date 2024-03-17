let contextMenu = document.getElementById('contextMenu');

document.querySelector('.desktopbgn').addEventListener('contextmenu', function(event) {
    event.preventDefault();
    contextMenu.style.left = event.clientX + 'px';
    contextMenu.style.top = event.clientY + 'px';
    contextMenu.style.display = 'block';
});

document.addEventListener('click', function() {
    contextMenu.style.display = 'none';
});

// Agrega los controladores de eventos para las opciones del menú aquí

//! CREAR CARPETAS Y TXT

function createFileOrFolder(name, type) {
    // Crea un nuevo objeto para el archivo o carpeta
    const newItem = { name: name, type: type };

    // Obtiene la lista actual de archivos y carpetas del almacenamiento local
    const items = JSON.parse(localStorage.getItem('items')) || [];

    // Agrega el nuevo elemento a la lista
    items.push(newItem);

    // Guarda la lista actualizada en el almacenamiento local
    localStorage.setItem('items', JSON.stringify(items));

    // Actualiza la interfaz de usuario...
}


function loadItems() {
    // Obtiene la lista de archivos y carpetas del almacenamiento local
    const items = JSON.parse(localStorage.getItem('items')) || [];

    // Actualiza la interfaz de usuario para mostrar los archivos y carpetas
    // ...
}


document.addEventListener('DOMContentLoaded', loadItems);

document.getElementById('newFolder').addEventListener('click', function() {
    // Pide al usuario que ingrese el nombre de la nueva carpeta
    var folderName = prompt('Ingrese el nombre de la nueva carpeta:');
    
    // Si el usuario ingresó un nombre, crea la nueva carpeta
    if (folderName) {
        createFileOrFolder(folderName, 'folder');
    }
});

