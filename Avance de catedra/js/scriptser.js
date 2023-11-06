document.addEventListener("DOMContentLoaded", function() {
    // Agregar lógica JavaScript según sea necesario
    const botonesSolicitar = document.querySelectorAll(".boton-solicitar");
    
    botonesSolicitar.forEach(boton => {
        boton.addEventListener("click", function() {
            alert("¡Solicitud enviada!");
        });
    });
});

