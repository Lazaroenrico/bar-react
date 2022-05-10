import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

export const AdegaService = {
  getLista: () =>
    fetch(Api.garrafaLista(), { method: "GET" }).then(parseResponse),

  getById: (id) =>
    fetch(Api.garrafaById(id), { method: "GET" }).then(parseResponse),

  create: (garrafa) =>
    fetch(Api.createGarrafa(garrafa), {
      method: "POST",
      body: JSON.stringify(garrafa),
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }).then(parseResponse),

  update: (id, garrafa) =>
    fetch(Api.updateGarrafaById(id), {
      method: "PUT",
      body: JSON.stringify(garrafa),
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }).then(parseResponse),

  delete: (id) =>
    fetch(Api.deleteGarrafaById(id), { method: "DELETE" }).then(parseResponse),
};
