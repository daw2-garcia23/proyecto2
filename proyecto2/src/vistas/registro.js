import { usuariosRegistrados } from "../bd.js";
import { login } from "./login.js";
export const registro = {
    template: 
    `
      <div class="container">
          <div class="row justify-content-center mt-5"> 
              <div class="col-md-6">
                  <div class="card shadow rounded"> 
                      <div class="card-body">
                          <h2 class="mb-4 text-center">Registrarse</h2> 
                          <form id="formRegistro">
                              <div class="mb-3">
                                  <label for="nombre" class="form-label" required>Name</label>
                                  <input type="text" class="form-control" id="nombreRegistro" placeholder="Nombre">
                              </div>
                              <div class="mb-3">
                                  <label for="apellido" class="form-label" required>Surname</label>
                                  <input type="text" class="form-control" id="apellidoRegistro" placeholder="Apellido">
                              </div>
                              <div class="mb-3">
                                  <label for="email" class="form-label" required>Correo electrónico</label>
                                  <input type="email" class="form-control" id="emailRegistro" placeholder="usuario@example.com" required>
                              </div>
                              <div class="mb-3">
                                  <label for="contraseña" class="form-label" required>Contraseña</label>
                                  <input type="password" class="form-control" id="passwordRegistro" placeholder="Contraseña">
                              </div>
                              <div class="d-grid gap-2">
                                  <button type="submit" class="btn btn-primary" id="btnEntrarRegistro">Registrarse</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `,
  script: () => {
    
    document.querySelector('#btnPanel').style.display = 'none'; //ocultamos poder ir al panel
    document.querySelector('#btnComentarios').style.display = 'none'; //ocultamos poder ir a comentarios

    document.querySelector('#btnEntrarRegistro').addEventListener('click', (event) => {
        event.preventDefault() //evitar que se vaya a la pantalla principal

        const email = document.querySelector('#emailRegistro').value; //reecojo valor del correo
        const contraseña = document.querySelector('#passwordRegistro').value; //recojo valor del mail
        const nombre = document.querySelector('#nombreRegistro').value //recojo valor del nombbre

        if (nombre === '' || email === '' || contraseña === '') { //reviso que estos campos estén rellenos, en caso que no devuelve un error
          Swal.fire({
            icon: 'error',
            title: 'Rellene todos los campos!!'
          })
          return;
      }
      
      // Comprobamos por el mail si ya está registrado
      if (usuariosRegistrados.find(usuario => usuario.email === email)) { //buscamos en el array si existe ese correo, devolvemos mensaje
        Swal.fire({
            icon: 'error',
            title: 'El usuario ya está registrado',
            text: 'Por favor, utilice un correo electrónico diferente.',
          })
        return;
      }
      
      // Agregar el nuevo usuario a la lista existente
      const nuevoUsuario = { email, contraseña } //creo un nuevo usuario
      usuariosRegistrados.push(nuevoUsuario) //lo añadimos en el array
      
      // Convertir el array en una cadena JSON para guardarlo en el localStorage
      const usuariosGuardados = JSON.stringify(usuariosRegistrados) 
  
      // Guardar la cadena JSON en el localStorage con la clave 'usuarios'
      localStorage.setItem('usuarios', usuariosGuardados)
    
      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado',
        text: '¡Gracias por registrarte!',
      }).then(()=>{ //una vez lo hemos guardado en el localStorage, hará lo siguiente
        // Recoger los valores de la cadena del localStorage y mostrarlos en la consola
        const nuevoUsuariosGuardados = localStorage.getItem('usuarios')
        console.log(nuevoUsuariosGuardados);

        const parseado = JSON.parse(nuevoUsuariosGuardados); // Recuperar la cadena de strings y lo convierte en un objeto
        console.log(parseado);

        document.querySelector('main').innerHTML=login.template //cargo el login template
        login.script()  //tmbn cargo su funcionabilidad
            
      })
      
   
    });
  }
  
}
  