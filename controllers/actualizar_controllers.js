import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");


const obtenerInformacion= async() => {
    const url = new URL(window.location); // obtenemos la url en la que estamos actualmente 
    const id = url.searchParams.get("id"); // obtenemos el id, or medio params, es decir el identificador 

    
    if (id == null ){
        window.location.href = "/screens/error.html" //Mostramos la pestaña de error si el id no se encuentra
    }

    const nombre = document.querySelector("[data-nombre]"); // Selecionamos el input html con data-nombre
    const email= document.querySelector("[data-email]"); // Selecionamos el input html con data-email

    clientService.detalleCliente(id).then(perfil => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    }
      
);
}
obtenerInformacion();

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault(); //impide el funcionamiento normal del formulario 

    const url = new URL(window.location); 
    const id = url.searchParams.get("id");
    
    const nombre = document.querySelector("[data-nombre]").value;
    const email= document.querySelector("[data-email]").value;
    clientService.actualizarCliente(nombre, email, id).then(() => {
        window.location.href = "/screens/edicion_concluida.html";
    });

});

