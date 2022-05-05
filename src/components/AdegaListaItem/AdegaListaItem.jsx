import "./AdegaListaItem.css";

function AdegaListaItem({
  garrafa,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
}) {

  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="AdegaListaItem__badge">
        {" "}
        {quantidadeSelecionada}{" "}
      </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        remover
      </button>
    );

  return (
    <div className="AdegaListaItem" onClick={() => clickItem(garrafa._id)}>
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="AdegaListaItem__titulo">{garrafa.titulo}</div>
        <div className="AdegaListaItem__tipo">{garrafa.tipo}</div>
        <div className="AdegaListaItem__preco">{garrafa.preco}</div>
        <div className="AdegaListaItem__descricao">{garrafa.descricao} </div>
        <div className="AdegaListaItem__Acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={(e) => {e.stopPropagation(); onAdd(index);}}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
        <img
          className="AdegaListaItem__foto"
          src={garrafa.foto}
          alt={`Garrafa de ${garrafa.tipo}`}
        />
    </div>
  );
  
}
export default AdegaListaItem;
