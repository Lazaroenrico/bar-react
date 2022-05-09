import { useState, useEffect, useCallback } from "react";
import "./AdegaLista.css";
import { AdegaService } from "services/AdegaService";
import AdegaListaItem from "components/AdegaListaItem/AdegaListaItem.jsx";
import AdegaDetalhesModal from "../AdegaDetalheModal/AdegaDetalheModal";
import { ActionMode } from "constants/index";

function AdegaLista({ garrafaCriada, mode, updateGarrafa, deletaGarrafa, garrafaEditada }) {
  const [garrafas, setGarrafas] = useState([]);
  const [garrafaSelecionada, setGarrafaSelecionada] = useState({});
  const [adegaModal, setAdegaModal] = useState(false);

  /* ---------------------  Adicionar e Remover ----------------*/

  const adicionarItem = (garrafaIndex) => {
    const garrafa = {
      [garrafaIndex]: Number(garrafaSelecionada[garrafaIndex] || 0) + 1,
    };
    setGarrafaSelecionada({ ...garrafaSelecionada, ...garrafa });
  };
  const removerItem = (garrafaIndex) => {
    const garrafa = {
      [garrafaIndex]: Number(garrafaSelecionada[garrafaIndex] || 0) - 1,
    };
    setGarrafaSelecionada({ ...garrafaSelecionada, ...garrafa });
  };

  /*---------------------------Mapper-------------------------------------------------*/

  const getLista = async () => {
    const response = await AdegaService.getLista();
    setGarrafas(response);
  };
  const getAdegaById = async (adegaId) => {
    const response = await AdegaService.getById(adegaId);

    const mapper = {
      [ActionMode.NORMAL]: () => setAdegaModal(response),
      [ActionMode.ATUALIZAR]: () => updateGarrafa(response),
      [ActionMode.DELETAR]: () => deletaGarrafa(response),
    };

    mapper[mode]();
  };

  const adicionaGarrafaNaLista = useCallback(
    (garrafa) => {
      const lista = [...garrafas, garrafa];
      setGarrafas(lista);
    },
    [garrafas]
  );

  useEffect(() => {
    if (
      garrafaCriada &&
      !garrafas.map(({ id }) => id).includes(garrafaCriada.id)
    ) {
      adicionaGarrafaNaLista(garrafaCriada);
    }
  }, [adicionaGarrafaNaLista, garrafaCriada, garrafas]);

  useEffect(() => {
    getLista();
  }, [garrafaEditada]);

  return (
    <div className="AdegaLista">
      {garrafas.map((garrafa, index) => (
        <AdegaListaItem
          key={`AdegaListaItem-${index}`}
          garrafa={garrafa}
          quantidadeSelecionada={+garrafaSelecionada[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
          clickItem={(adegaId) => getAdegaById(adegaId)}
        />
      ))}
      {adegaModal && (
        <AdegaDetalhesModal
          Adega={adegaModal}
          closeModal={() => setAdegaModal(false)}
        />
      )}
    </div>
  );
}

export default AdegaLista;
