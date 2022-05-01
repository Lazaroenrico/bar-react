import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

export const AdegaService = {
    getLista: () => fetch(Api.garrafaLista(), { method: "GET" }).then(parseTransformLista),

    getById:(id) => fetch(Api.garrafaById(), {method: "GET"}).then(parseResponse),

    create:() => fetch(Api.createGarrafa(), {method: "POST"}).then(parseResponse),

    update:(id) => fetch(Api.updateGarrafaById(), {method: "PUT"}).then(parseResponse),

    delete:(id) => fetch(Api.deleteGarrafaById(), {method: "DELETE"}).then(parseResponse),
}

const transformGarrafa = (garrafa) =>{

    return{
        ...garrafa,
        id: garrafa._id,
        titulo: garrafa.titulo,
        tipo: garrafa.tipo,
    };
};

const parseTransformLista = (response) => parseResponse(response).then((garrafas) => garrafas.map(transformGarrafa));