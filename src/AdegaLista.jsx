import { useState } from "react";
import "./AdegaLista.css";
import { garrafas }    from "./mocks/adega.js"

function AdegaLista() {
 const [garrafaSelecionada, setGarrafaSelecionada] = useState({});

 const adicionarItem = (garrafaIndex) => {
   const garrafa ={ [garrafaIndex]: Number(garrafaSelecionada[garrafaIndex] || 0) +1} 
   setGarrafaSelecionada({...garrafaSelecionada, ...garrafa});
  };
  
  return (
    <div className="AdegaLista">

      {garrafas.map((garrafa, index) => (

        <div className="AdegaListaItem" key={`AdegaListaItem_${index}`}>

          <span className="AdegaListaItem__badge">{garrafaSelecionada[index] || 0}</span>

          <div className="AdegaListaItem__titulo">{garrafa.titulo}</div>
          <div className="AdegaListaItem__tipo">{garrafa.tipo}</div>
          <div className="AdegaListaItem__preco">{garrafa.preco}</div>
          <div className="AdegaListaItem__descricao">{garrafa.descricao} </div>
          <div className="AdegaListaItem__Acoes Acoes">
            <button
              className="Acoes__adicionar Acoes__adicionar--preencher"
              onClick={() => adicionarItem(index)}
              >
              adicionar
            </button>
          </div>
          <div>
            <img
              className="AdegaListaItem__foto"
              src={garrafa.foto}
              alt={`Garrafa de ${garrafa.sabor}`}
            />
          </div>
        </div>
      )
      
)}
    </div>
  );
};

export default AdegaLista;
