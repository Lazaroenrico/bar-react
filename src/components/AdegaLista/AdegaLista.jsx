import { useState } from "react";
import "./AdegaLista.css";
import { garrafas } from "mocks/adega.js";
import AdegaListaItem from "components/AdegaListaItem/AdegaListaItem.jsx";

function AdegaLista() {

  const [garrafaSelecionada, setGarrafaSelecionada] = useState({});

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
