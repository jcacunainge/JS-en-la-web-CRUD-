const listaCliente = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email)=> {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify({nombre, email, id:uuid.v4()}),
    });
};

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    })
}

const detalleClient = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => {
        console.log(respuesta)
    });
}

export const clientService = {
    listaCliente,
    crearCliente,
    eliminarCliente,
    detalleClient,
}



