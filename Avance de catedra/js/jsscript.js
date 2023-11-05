document.addEventListener("DOMContentLoaded", function() {
    const libroForm = document.getElementById("libro-form");
    const librosContainer = document.getElementById("libros");

    // Recuperar los libros almacenados en el almacenamiento local
    const librosAlmacenados = JSON.parse(localStorage.getItem("libros")) || [];

    // este es una funcion para mostrar lo libros agregados
    function mostrarLibros() {
        librosContainer.innerHTML = "";
        librosAlmacenados.forEach(libro => {
            const libroElement = document.createElement("div");
            libroElement.classList.add("libro");

            const imgElement = document.createElement("img");
            imgElement.src = libro.imagen;

            const nombreAutorElement = document.createElement("p");
            nombreAutorElement.innerHTML = `<strong>Autor:</strong> ${libro.autor}`;

            const nombreLibroElement = document.createElement("p");
            nombreLibroElement.innerHTML = `<strong>Libro:</strong> ${libro.titulo}`;

            const descripcionElement = document.createElement("p");
            descripcionElement.innerHTML = `<strong>Descripción:</strong> ${libro.descripcion}`;

            const precioElement = document.createElement("p");
            precioElement.innerHTML = `<strong>Precio:</strong> $${libro.precio}`;

            libroElement.appendChild(imgElement);
            libroElement.appendChild(nombreAutorElement);
            libroElement.appendChild(nombreLibroElement);
            libroElement.appendChild(descripcionElement);
            libroElement.appendChild(precioElement);
            librosContainer.appendChild(libroElement);

            // agreaga el boton de cancelar venta 
            const cancelarVentaButton = document.createElement("button");
            cancelarVentaButton.textContent = "Cancelar Venta";
            libroElement.appendChild(cancelarVentaButton);

            // aqui agregamos un evento para el boton de cancelar venta 
            cancelarVentaButton.addEventListener("click", function() {
                const confirmacion = window.confirm("¿Seguro que desea cancelar la venta de su libro?");
                if (confirmacion) {
                    // Encontrar el libro en el array y eliminarlo
                    const libroIndex = librosAlmacenados.findIndex(l => l.titulo === libro.titulo);
                    if (libroIndex !== -1) {
                        librosAlmacenados.splice(libroIndex, 1);
                        localStorage.setItem("libros", JSON.stringify(librosAlmacenados));
                        mostrarLibros(); // Actualizar la vista
                    }
                }
            });
        });
    }

    mostrarLibros(); // este nos sirve para mostrar los libros agregados 

    libroForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Obtén los valores ingresados por el usuario
        const nombreLibro = document.getElementById("nombre-libro").value;
        const nombreAutor = document.getElementById("nombre-autor").value;
        const descripcion = document.getElementById("descripcion").value;
        const precio = document.getElementById("precio").value;
        const imagenLibro = document.getElementById("imagen-libro").files[0];

        // Guardar el nuevo libro en el almacenamiento local
        librosAlmacenados.push({
            titulo: nombreLibro,
            autor: nombreAutor,
            descripcion: descripcion,
            precio: precio,
            imagen: URL.createObjectURL(imagenLibro)
        });
        localStorage.setItem("libros", JSON.stringify(librosAlmacenados));

        mostrarLibros(); // Mostrar el libro recién agregado
        libroForm.reset();
    });
});
