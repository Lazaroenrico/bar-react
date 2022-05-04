import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import "components/AdicionarGarrafa/AdicionarGarrafa.css";

function AdicionarGarrafa({ closeModal }) {
  const form = {
    preco: "",
    titulo: "",
    tipo: "",
    descricao: "",
    foto: "",
  };
  const [state, setState] = useState(form);
  const [canDesable, setCanDesable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
        state.foto.length &&
        state.titulo.length &&
        state.tipo.length &&
        state.preco.length
    );
    setCanDesable(response);
  };

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  useEffect(() => {
      canDisableSendButton();
  })

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionarGarrafa">
        <form autoComplete="off">
          <h2>Adicionar ao Cardápio</h2>
          <div>
            <label className="AdicionaGarrafaModal_text" htmlFor="preco">
              Preco:
            </label>
            <input
              type="text"
              id="preco"
              placeholder="149,90"
              value={state.preco}
              onChange={(e) => handleChange(e, "preco")}
            />
          </div>
          <div>
            <label className="AdicionaGarrafaModal_text" htmlFor="titulo">
              Titulo:
            </label>
            <input
              type="text"
              id="titulo"
              placeholder="Jack Daniel's"
              value={state.titulo}
              onChange={(e) => handleChange(e, "titulo")}
            />
          </div>
          <div>
            <label className="AdicionaGarrafaModal_text" htmlFor="tipo">
              Tipo:
            </label>
            <input
              type="text"
              id="tipo"
              placeholder="Whisky Jack"
              value={state.tipo}
              onChange={(e) => handleChange(e, "tipo")}
            />
          </div>
          <div>
            <label
              className="AdicionaGarrafaModal_text AdicionaGarrafa_foto-label"
              htmlFor="foto"
            >
              {!state.foto.length ? "Selecionar Imagem" : state.foto}
            </label>
            <input
              className="AdicionarGarrafa_foto"
              type="file"
              id="foto"
              accept="images/png, images/gif, images/jpeg"
              value={state.foto}
              onChange={(e) => handleChange(e, "foto")}
            />
          </div>

          <button
            className="AdicionaGarrafa_enviar"
            type="button"
            disabled="{canDisable}"
          >Enviar</button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionarGarrafa;
