const AdegaContext = {
    garrafaEndpoint: () => `${Api.baseUrl}/adega`,
    garrafaLista: () => `${AdegaContext.garrafaEndpoint()}/all-garrafas`,
    garrafaById: (id) => `${AdegaContext.garrafaEndpoint()}/one-garrafa/${id}`,
    createGarrafa: () => `${AdegaContext.garrafaEndpoint()}/create-garrfa`,
    updateGarrafaById: (id) => `${AdegaContext.garrafaEndpoint()}/update-garrafa/${id}`,
    deleteGarrafaById: (id) => `${AdegaContext.garrafaEndpoint()}/delete-garrafa/${id}`,
  };

  export const Api = {
    baseUrl: "http://localhost:3333",
    ...AdegaContext,
  };