import "./AdegaListaItem.css";
import { ActionMode } from "constants/index.js";

function AdegaListaItem({
  garrafa,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="Acoes__remover"
        onClick={() => onRemove(index)}
      >
        remover
      </button>
    );

  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="AdegaListaItem__badge"> {quantidadeSelecionada} </span>
    );

  const badgeAction = (canRender) => {
    if (canRender)
      return (
        <span
          className={`AdegaListaItem__tag${
            mode === ActionMode.DELETAR && "AdegaListaItem__tag--deletar"
          }`}
        >
          {" "}
          {mode}{" "}
        </span>
      );
  };

  return (
    <div
      className={`AdegaListaItem
    ${mode !== ActionMode.NORMAL && "AdegaListaItem--disable"}
    ${mode !== ActionMode.DELETAR && "AdegaListaItem--deletar"}
    `}
      onClick={() => clickItem(garrafa._id)}
    >
      {badgeCounter(quantidadeSelecionada, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}
      <div>
        <div className="AdegaListaItem__titulo">{garrafa.titulo}</div>
        <div className="AdegaListaItem__tipo">{garrafa.tipo}</div>
        <div className="AdegaListaItem__preco">{garrafa.preco}</div>
        <div className="AdegaListaItem__descricao">{garrafa.descricao} </div>
        <div className="AdegaListaItem__Acoes Acoes">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
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
