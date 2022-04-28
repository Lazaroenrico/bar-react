import { useState } from "react";

function BarLista() {
  

  return (
    <div className="BarLista">
      {garrafas.map((garrafa, index) => (
        <div className="BarListaItem" key={`BarListaItem_${index}`}>
          {badgeCounter(paletaSelecionada[index], index)}

          <div className="BarListaItem__titulo">{garrafa.titulo}</div>
          <div className="BarListaItem__preco">{garrafa.preco.toFixed(2)}</div>
          <div className="BarListaItem__descricao">{garrafa.descricao} </div>
          <div className="BarListaItem__Acoes Acoes">
            <button
              className="Acoes__adicionar Acoes__adicionar--preencher"
              onClick={() => adicionarItem(index)}
            >
              adicionar
            </button>
          </div>
          <div>
            <img
              className="BarListaItem__foto"
              src={garrafa.foto}
              alt={`Bar de ${garrafa.sabor}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BarLista;
