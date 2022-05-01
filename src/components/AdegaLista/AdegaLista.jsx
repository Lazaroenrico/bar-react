import { useState, useEffect } from "react";
import "./AdegaLista.css";
import { AdegaService } from "services/AdegaService";
import AdegaListaItem from "components/AdegaListaItem/AdegaListaItem.jsx";

function AdegaLista() {
  const [garrafas, setGarrafas] = useState([]);
  const [garrafaSelecionada, setGarrafaSelecionada] = useState({});

  const getLista = async () => {
    const response = await AdegaService.getLista();
    setGarrafas(response)
  }


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


  useEffect(() => {
    getLista();
    }, []);

  return (
    <div className="AdegaLista">
      {garrafas.map((garrafa, index) => (
        <AdegaListaItem key={`AdegaListaItem-${index}`}
        garrafa = {garrafa}
        quantidadeSelecionada = {garrafaSelecionada[index]}
        index = {index}
        onAdd={index => adicionarItem(index)}
        onRemove={index => removerItem(index)}/> 
      ))}
    </div>
  );
}

export default AdegaLista;
