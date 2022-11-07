import { clientService } from "../service/client-service.js";


const url = new URL(window.location);
const id = (url.searchParams.get("id"));
clientService.detalleClient(id);

const obtenerInformacion= () => {

}

