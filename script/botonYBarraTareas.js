    let clicked = false;
    document.getElementById('gabinete').addEventListener('mouseover', function() {
        if (!clicked) {
            this.style.cursor = "url('./img/pointer.png'), auto";
        }
    });

    document.getElementById('gabinete').addEventListener('click', function() {
        this.style.cursor = "url('./img/glass04.cur'), auto";
        clicked = true;
        document.body.style.backgroundImage = "url('./img/3.gif')";
        setTimeout(function() {
            window.location.href = "./pages/desktop.html";
        }, 8900);
    });