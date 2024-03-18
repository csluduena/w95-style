document.addEventListener('DOMContentLoaded', function() {
    const cvIcon = document.getElementById('cv');
    const pdfWindow = document.getElementById('resume');

    cvIcon.addEventListener('dblclick', function() {
        openPdfWindow();
    });

    function openPdfWindow() {
        pdfWindow.style.display = 'block'; // Mostrar la ventana de PDF
        const closeButton = pdfWindow.querySelector('.close'); // Selección del botón de cierre después de mostrar la ventana
        closeButton.addEventListener('click', closePdfWindow); // Agregar el evento click al botón de cierre
    }

    function closePdfWindow() {
        pdfWindow.style.display = 'none'; // Ocultar la ventana de PDF
    }
});

//TODO Mover la ventana
document.addEventListener('DOMContentLoaded', function() {
    const cvIcon = document.getElementById('cv');
    const pdfWindow = document.getElementById('resume');
    let isDragging = false;

    cvIcon.addEventListener('dblclick', function() {
        openPdfWindow();
    });

    function openPdfWindow() {
        pdfWindow.style.display = 'block'; // Mostrar la ventana de PDF
        const titleBar = pdfWindow.querySelector('.title-bar');
        titleBar.addEventListener('mousedown', startDragging); // Agregar evento para iniciar el arrastre
    }

    function startDragging(event) {
        if (event.target.classList.contains('title-bar')) {
            isDragging = true;
            const offsetX = event.clientX - pdfWindow.offsetLeft;
            const offsetY = event.clientY - pdfWindow.offsetTop;
            document.addEventListener('mousemove', dragWindow);
            document.addEventListener('mouseup', stopDragging);

            function dragWindow(event) {
                if (isDragging) {
                    const newLeft = event.clientX - offsetX;
                    const newTop = event.clientY - offsetY;
                    pdfWindow.style.left = newLeft + 'px';
                    pdfWindow.style.top = newTop + 'px';
                }
            }

            function stopDragging() {
                isDragging = false;
                document.removeEventListener('mousemove', dragWindow);
                document.removeEventListener('mouseup', stopDragging);
            }
        }
    }
});
