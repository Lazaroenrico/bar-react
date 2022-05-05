import { useState, useEffect } from "react";
import "./AdegaLista.css";
import { AdegaService } from "services/AdegaService";
import AdegaListaItem from "components/AdegaListaItem/AdegaListaItem.jsx";
import AdegaDetalhesModal from "../AdegaDetalheModal/AdegaDetalheModal"

function AdegaLista({garrafaCriada}) {
  const [garrafas, setGarrafas] = useState([]);
  const [garrafaSelecionada, setGarrafaSelecionada] = useState({});
  const [adegaModal, setAdegaModal] = useState(false);



  const getLista = async () => {
    const response = await AdegaService.getLista();
    setGarrafas(response)
  }
  const getAdegaById = async (adegaId) => {
    const response = await AdegaService.getById(adegaId);
    setAdegaModal(response);
  };
  
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

  const adicionaGarrafaNaLista = (garrafa) => {
    const lista = [...garrafas, garrafa];
    setGarrafas(lista);
};

useEffect(() => {
    if (garrafaCriada) adicionaGarrafaNaLista(garrafaCriada);
}, [garrafaCriada]);


  useEffect(() => {
    getLista();
    }, []);
 
  return (
    <div className="AdegaLista">
      {garrafas.map((garrafa, index) => (
        <AdegaListaItem key={`AdegaListaItem-${index}`}
        garrafa = {garrafa}
        quantidadeSelecionada = {+garrafaSelecionada[index]}
        index = {index}
        onAdd={index => adicionarItem(index)}
        onRemove={index => removerItem(index)}
        clickItem={(adegaId) => getAdegaById(adegaId)}
        /> 
      ))}
      {adegaModal && <AdegaDetalhesModal Adega={adegaModal} closeModal={() => setAdegaModal(false)} />}
    </div>
  );
}

export default AdegaLista;
