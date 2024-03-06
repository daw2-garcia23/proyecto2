

import { tickets, usuariosRegistrados } from "../bd.js"
import { header } from "../componentes/header.js";
import { panel } from "./panel.js";
import { registro } from "./registro.js";
import { vistaMain } from "./vistaComentarios.js";
export const login = {
    template : `
    <div class="container">
    <div class="row justify-content-center mt-5"> 
        <div class="col-md-6">
            <div class="card shadow rounded"> 
                <div class="card-body">
                    <h2 class="mb-4 text-center">Login</h2> 
                    <form id="formLogin">
                        <div class="mb-3">
                            <label for="email" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control" id="emailLogin" placeholder="usuario@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="contraseña" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="passwordLogin" placeholder="Contraseña">
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary" id="btnEntrarLogin">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    `, 
    script: ()=>{
        document.querySelector('#btnPanel').style.display = 'none'; //ocultamos poder ir al panel
        document.querySelector('#btnComentarios').style.display = 'none'; //ocultamos poder ir a comentarios

        const usuariosGuardados = localStorage.getItem('usuarios'); //recupero los usuarios que hay en el localstorage, sin parsear es decir en la cadena
        const usuariosGuardadosParse = JSON.parse(usuariosGuardados) //convierto la cadena en un objeto
        console.log('usuarios disponibles para hacer login del localstorage', usuariosGuardadosParse); //saco el objeto
        console.log('usuarios disponibles para hacer login de la bbdd   ', usuariosRegistrados); //muetsro la aarray
        
        document.querySelector('#btnEntrarLogin').addEventListener('click', (event)=>{ //evento de click en el boton de login
            event.preventDefault()
            const correo = document.querySelector('#emailLogin').value //recogemos valor del corre
            const contraseña = document.querySelector('#passwordLogin').value //recogemos el valor de la contraseña
            console.log('correo es: ', correo);
            console.log('contraseña es: ', contraseña);

            const usuario = usuariosRegistrados.find(user => user.email === correo && user.contraseña === contraseña) //comprobamos que el usuario ya esté registrado

            if(usuario){ //si el usuario existe, mostramos el mensaje y hacemos lo que está despues del .then
                Swal.fire({
                    icon: "success",
                    title: "Bienvenido",
                    showConfirmButton: false,
                    timer: 1500
                  }).then(()=>{
                    document.querySelector('main').innerHTML=panel.template //cargar pantalla principal
                    panel.pintarTickets() //la funcionalidad tmbn
                    document.querySelector('#btnLog').style.display = 'none'; //ocultamos poder ir al panel
                    document.querySelector('#btnReg').style.display = 'none'; //ocultamos poder ir a comentarios
                    document.querySelector('#btnPanel').style.display = ''; //desocultamos poder ir al panel
                    document.querySelector('#btnComentarios').style.display = ''; //desocultamos poder ir a comentarios
                  

                    document.querySelector('#logout').innerHTML = '<button id="btnLogout" class="btn btn-outline-danger my-2 my-sm-0 " type="submit">Logout</button>' //creamos el botón del logout
                    document.querySelector('#correoUsuario').innerHTML = '<p>Bienvenido, ' + correo + '<p/>' //mostramos el correo en el header

                    // LOGOUT
                    document.querySelector('#btnLogout').addEventListener('click', ()=>{ //evento click en el boton de
                    console.log('estas intentando desloguearte');
                    localStorage.removeItem('usuarios') //borramos el localstorage
                    document.querySelector('main').innerHTML=registro.template //cargamos el template del registro
                    registro.script() //cargamos la funcionalidad del registro
                    document.querySelector('#btnLog').style.display = ''; //ocultamos poder ir al panel
                    document.querySelector('#btnReg').style.display = ''; //ocultamos poder ir a comentarios
                    document.querySelector('#btnPanel').style.display = 'none'; //desocultamos poder ir al panel
                    document.querySelector('#btnComentarios').style.display = 'none'; //desocultamos poder ir a comentarios
                    document.querySelector('#btnLogout').style.display = 'none'; //desocultamos poder ir a comentarios
                    document.querySelector('#correoUsuario').innerHTML = '' //dejamos de mostrar el correo en el header
                    })

                    //Eliminar comentarios
                    document.querySelector('#btnEliminarResueltos').addEventListener('click',()=>{
                        console.log('Estas eliminando un comentario');
                        const borrarTicket = tickets.findIndex(ticket => ticket.codigo === codigo);
                })  
                    
                  })
            }else{ //Si el usuario no existe, mostramos este error
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error en las credenciales"
                  })
            }

           
        })
    }
}
