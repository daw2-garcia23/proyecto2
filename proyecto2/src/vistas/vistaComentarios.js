

import { comentarios } from "../componentes/comentarios.js"

export const vistaMain = {
    template: 
    `
   
    <div class="d-flex">
      <h1>Comentarios</h1><button class="btn btn-link ms-auto"> < Volver</button>
    </div>


    <div class="">
      <form action="" class="form card p-3 shadow">
        <label for="comentario" class="form-label">Comentario: </label>
        <textarea class="form-control" col="3"></textarea>
        <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
        <div class="d-flex align-items-center">
          <input type="datetime-local" class="form-control w-25">
          <button class="btn btn-success ms-auto">Añadir comentario</button>
        </div>
      </form>
    
      <div class="mt-4" id="comentariosTexto">
          
      </div>
  
    `,
    script: ()=>{
      document.querySelector('#comentariosTexto').innerHTML = comentarios.template
      comentarios.script()
        
    }

}