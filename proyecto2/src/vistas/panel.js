import { tickets } from "../bd.js";
import { vistaMain } from "./vistaComentarios.js";


export const panel ={
  template: `<main class="container mt-5">
  <h1>Administración de incidencias</h1>
  <h2 class="mt-5">Tickets pendientes</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>Código</th>
        <th>Fecha</th>
        
        <th>Aula</th>
        <th>Grupo</th>
        <th>Ordenador</th>
        <th>Descripción</th>
        <th>Alumno</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody id="ticketsPendientes">
     
    </tbody>
  </table>
  <h2 class="mt-5">Tickets resueltos</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>Código</th>
        <th>Fecha</th>
        <th>Fecha resuelto</th>
        <th>Aula</th>
        <th>Grupo</th>
        <th>Ordenador</th>
        <th>Descripción</th>
        <th>Alumno</th>
      </tr>
    </thead>
    <tbody id="ticketsResueltos"> 

    </tbody>
  </table>
</main>
`,


pintarTickets: ()=>{
    console.log('vamos a pintar los comentarios')
    let html1 = ''; // tickets resueltos
    let html2 = ''; // pendientes
  
  for (let i = 0; i < tickets.length; i++) { //hago un bucle que recorra los objetos sin entrar en ellos del array tickets
    const ticketHTMLResueltos = ` 
      <td>${tickets[i].codigo}</td> 
      <td>${tickets[i].fecha}</td>
      <td>${tickets[i].fechaResuelto}</td>
      <td>${tickets[i].Aula}</td>
      <td>${tickets[i].Grupo}</td>
      <td>${tickets[i].Ordenador}</td>
      <td>${tickets[i].Descripcion}</td>
      <td>${tickets[i].Alumno}</td>
      <td><button type="button" class="btnComentarResueltos btn btn-primary"><i class="fa-regular fa-comment"></i></button></td>
      <td><button type="button" class="btnEliminarResueltos btn btn-danger"><i class="fa-solid fa-trash-can"></i></button></td>
      
     
    `;
    const ticketHTMLPendientes = ` 
      <td>${tickets[i].codigo}</td> 
      <td>${tickets[i].fecha}</td>
      <td>${tickets[i].Aula}</td>
      <td>${tickets[i].Grupo}</td>
      <td>${tickets[i].Ordenador}</td>
      <td>${tickets[i].Descripcion}</td>
      <td>${tickets[i].Alumno}</td>
      <td><button id="resolver" type="button" class="btn btn-success">Resolver</button></td>
      <td><button id="btnEditar" type="button" class="btnEditarPendientes btn btn-warning"><i class="fa-solid fa-pen"></i></button></td>
      <td><button type="button" class="btnComentarPendientes btn btn-primary"><i class="fa-regular fa-comment"></i></button></td>
      <td><button type="button" class="btnEliminarPendientes btn btn-danger"><i class="fa-solid fa-trash-can"></i></button></td>
      
    
    `

    //en ticketHTML lo que hago es que de cada objeto, recoja las propiedades con sus valores
    
    if (tickets[i].estat === 'Resuelto') {
      html1 += `<tr>${ticketHTMLResueltos}</tr>`; //si el ticket está resuelto, con la condición lo meteré en la varable html1
    } else {
      html2 += `<tr>${ticketHTMLPendientes}</tr>`; //se meterán todos lo que no están resueltos
    }
  }

  
  document.querySelector('#ticketsResueltos').innerHTML = html1; //inyecto todos los tickets resueltos a través del ID en el HTML
  document.querySelector('#ticketsPendientes').innerHTML = html2; //inyecto todos los tickets no resueltos a través del ID en el HTML

  
  // Agregar evento a los botones de comentar resueltos
  const btnComentarResueltos = document.querySelectorAll('.btnComentarResueltos');
  btnComentarResueltos.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('Dandole al botón para ver los comentarios de los tickets resueltos');
      document.querySelector('main').innerHTML = vistaMain.template;
      vistaMain.script();
    });
  });

  // Agregar evento a los botones de comentar pendientes
  const btnComentarPendientes = document.querySelectorAll('.btnComentarPendientes');
  btnComentarPendientes.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('Dandole al botón para ver los comentarios de los tickets pendientes');
      document.querySelector('main').innerHTML = vistaMain.template;
      vistaMain.script();
    });
  });



}
}


