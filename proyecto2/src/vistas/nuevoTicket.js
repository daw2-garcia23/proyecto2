
import { tickets } from "../bd.js"
import { panel } from "./panel"

export const nuevoTicket = {
    template:  
    `
        <div class="container mx-auto p-5 w-75">
            <form action="" class="form p-3" id="form">
                <label for="codigoTicket" class="form-label">Código: </label>
                <input type="text" class="form-control mb-3" id="codigoTicket">

                <label for="fechaTicket" class="form-label">Fecha: </label>
                <input type="date" class="form-control mb-3" id="fechaTicket">

                <label for="aulaTicket" class="form-label">Aula: </label>
                <input type="text" class="form-control mb-3" id="aulaTicket">

                <label for="ordenadorTicket" class="form-label">Ordenador: </label>
                <input type="text" class="form-control mb-3" id="ordenadorTicket">

                <label for="descripcionTicket" class="form-label">Descripción: </label>
                <textarea class="form-control mb-3" id="descripcionTicket" rows="3"></textarea>

                <label for="alumnoTicket" class="form-label">Alumno: </label>
                <input type="text" class="form-control mb-3" id="alumnoTicket">

                <label for="grupoTicket" class="form-label">Grupo: </label>
                <input type="text" class="form-control mb-3" id="grupoTicket">

                <div class="text-end mt-5">
                    <button id="btnAnadirTicket" class="btn btn-primary me-2">Añadir ticket</button>
                    <button id="btnSalir" class="btn btn-secondary ml-2">Volver atrás</button>
                </div>
            </form>

        </div>
    `,

    script : ()=>{
       console.log('hola desde generar nuevo ticket')
    } 
}