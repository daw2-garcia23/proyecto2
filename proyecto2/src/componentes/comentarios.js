import { bd2 } from "../bd.js";
import { comentario } from "./comentario.js"

export const comentarios ={

    template:
`
<div id="comentariosText">

</div>


`
   ,
    script: ()=>{
       let html=''
      
       
       bd2.forEach(item => {
      
         html += comentario(item.autor, item.fecha, item.comentario) 
        
       })
      
       document.querySelector('#comentariosText').innerHTML = html
     
       

    }
    
    
}
