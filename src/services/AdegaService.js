import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

export const AdegaService = {
    getLista: () => fetch(Api.garrafaLista(), { method: "GET" }).then(parseResponse),

    getById:(id) => fetch(Api.garrafaById(), {method: "GET"}).then(parseResponse),

    create:() => fetch(Api.createGarrafa(), {method: "POST"}).then(parseResponse),

    update:(id) => fetch(Api.updateGarrafaById(), {method: "PUT"}).then(parseResponse),

    delete:(id) => fetch(Api.deleteGarrafaById(), {method: "DELETE"}).then(parseResponse),
}
