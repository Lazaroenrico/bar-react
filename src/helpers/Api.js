
const AdegaContext = {
    garrafaEndpoint: () => `${Api.baseUrl}/adega`,
    garrafaLista: () => `${AdegaContext.garrafaEndpoint()}/all-garrafas`,
    garrafaById: (id) => `${AdegaContext.garrafaEndpoint()}/one-garrafa/${id}`,
    createGarrafa: () => `${AdegaContext.garrafaEndpoint()}/create-garrafa`,
    updateGarrafaById: (id) => `${AdegaContext.garrafaEndpoint()}/update-garrafa/${id}`,
    deleteGarrafaById: (id) => `${AdegaContext.garrafaEndpoint()}/delete-garrafa/${id}`,
  };
  const SacolaContext = {
    getSacola: () => `${AdegaContext.garrafaEndpoint()}/all-carrinho`,
    createSacola: () => `${AdegaContext.garrafaEndpoint()}/create-carrinho`,
    purchase: () => `${AdegaContext.garrafaEndpoint()}/finish-carrinho`,
  }

  export const Api = {
    baseUrl: "http://localhost:3333",
    ...AdegaContext,
    ...SacolaContext,
  };
  