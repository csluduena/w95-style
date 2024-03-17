    let tasktabindex = document.getElementById('tasktabindex');
    let botonstart = document.querySelector('.botonstart');

    botonstart.addEventListener('click', function(event) {
        event.stopPropagation(); 
        if (tasktabindex.style.display === 'none' || tasktabindex.style.display === '') {
            this.style.cursor = "url('../img/NES_LinkSelect.cur'), auto";
            tasktabindex.style.display = 'block'; 
            tasktabindex.style.animation = 'slide-up 0.5s forwards'; 
        } else {
            tasktabindex.style.display = 'none';
        }
    });

    document.body.addEventListener('click', function() {
        tasktabindex.style.display = 'none';
    });

    document.querySelector("table").style.borderCollapse = "collapse"; //acá le quito el espacio a la tabla de inicio. 
