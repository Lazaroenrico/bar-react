import "./AdegaListaItem.css";

function AdegaListaItem({
  garrafa,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
}) {
  const removerItem = (i) => console.log("remover" + i);
  const adicionarItem = (i) => console.log("adicionar" + i);

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="AdegaListaItem__badge">
        {" "}
        {quantidadeSelecionada[index]}{" "}
      </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        remover
      </button>
    );
/*
  return (
    <div className="AdegaListaItem">
      {badgeCounter(quantidadeSelecionada[index], index)}
      <div>
        <div className="AdegaListaItem__titulo">{garrafa.titulo}</div>
        <div className="AdegaListaItem__tipo">{garrafa.tipo}</div>
        <div className="AdegaListaItem__preco">{garrafa.preco}</div>
        <div className="AdegaListaItem__descricao">{garrafa.descricao} </div>
        <div className="AdegaListaItem__Acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada[index] && "Acoes__adicionar--preencher"
            }`}
            onClick={() => onAdd(index)}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <div>
        <img
          className="AdegaListaItem__foto"
          src={garrafa.foto}
          alt={`Garrafa de ${garrafa.sabor}`}
        />
      </div>
    </div>
  );
  */
}
export default AdegaListaItem;
