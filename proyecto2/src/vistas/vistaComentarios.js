import { bd2 } from "../bd.js";
import { comentario } from "../componentes/comentario.js"
import { panel } from "./panel.js"


export const vistaMain = {
  template: `
    <div class="d-flex">
      <h1>Comentarios</h1>
      <button class="btn btn-link ms-auto" id="volver">Volver</button>
    </div>

    <div class="">
      <form action="" class="form card p-3 shadow" id="comentarioForm">
        <label for="autor" class="form-label">Autor: </label>
        <input id="autor" type="text" class="form-control mb-3">
        <label for="comentario" class="form-label">Comentario: </label>
        <textarea id="comentario" class="form-control" col="3"></textarea>
        <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
        <div class="d-flex align-items-center">
          <input id="fecha" type="datetime-local" class="form-control w-25">
          <button id="btnAñadirComentario" type="button" class="btn btn-success ms-auto">Añadir comentario</button>
        </div>
      </form>
    
      <div class="mt-4" id="comentariosTexto">
        <!-- Aquí se mostrarán los comentarios -->
      </div>
    </div>
  `,
  script: () => {
    document.querySelector('#volver').addEventListener('click', () => {
      document.querySelector('main').innerHTML = panel.template;
      panel.pintarTickets();
    });

    // Aqui lo que estoy haciendo es mostrar los comentarios de la bd
    const comentariosTexto = document.querySelector('#comentariosTexto');
    comentariosTexto.innerHTML = obtenerComentariosHtml();

    // Agregar evento para añadir comentario
    document.querySelector('#btnAñadirComentario').addEventListener('click', () => { //click en el boton
      console.log('Estas añadiendo un comentario')
      const autor = document.querySelector('#autor').value; //cogemos valor de los inputs
      const fecha = document.querySelector('#fecha').value; //cogemos valor de los inputs
      const comentarioText = document.querySelector('#comentario').value; //cogemos valor de los inputs

      if (autor && fecha && comentarioText) { //creamos los comentarios con los valores de los inputs
        const nuevoComentarioHtml = comentario(autor, fecha, comentarioText);
        comentariosTexto.innerHTML += nuevoComentarioHtml; //añadimos los comentarios 
        document.querySelector('#autor').value = '';
        document.querySelector('#comentario').value = '';
        document.querySelector('#fecha').value = '';
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Rellene todos los campos para poder añadir un comentario"
        })
      }
    });
  }
};

// aqui recojo los comentarios de la base de datos
function obtenerComentariosHtml() {
  let html = '';
  bd2.forEach(com => {
    html += comentario(com.autor, com.fecha, com.comentario);
  });
  return html;
}
