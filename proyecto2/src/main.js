import { header } from "./componentes/header.js";
import { panel } from "./vistas/panel.js";
import { registro } from "./vistas/registro.js";
import { vistaMain } from "./vistas/vistaComentarios.js";


document.querySelector('header').innerHTML = header.template
header.script()

document.querySelector('main').innerHTML = panel.template
panel.pintarTickets() 

    


