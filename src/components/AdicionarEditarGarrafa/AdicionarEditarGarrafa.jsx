import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import "components/AdicionarEditarGarrafa/AdicionarEditarGarrafa.css";
import { AdegaService } from "services/AdegaService.js";
import { ActionMode } from "constants/index";

function AdicionarEditarGarrafa({
  closeModal,
  onCreateGararafa,
  mode,
  garrafaToUpdate,
  onUpdateGarrafa,
}) {
  console.log(mode)
  const form = {
    preco: garrafaToUpdate?.preco ?? "",
    titulo: garrafaToUpdate?.titulo ?? "",
    tipo: garrafaToUpdate?.tipo ?? "",
    descricao: garrafaToUpdate?.descricao ?? "",
    foto: garrafaToUpdate?.foto ?? "",
  };

  const [state, setState] = useState(form);
  const [canDisable, setCanDesable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
      state.foto.length &&
      state.titulo.length &&
      state.tipo.length &&
      String(state.preco).length
    );
    setCanDesable(response);
  };

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };
  console.log(state)

  useEffect(() => {
    canDisableSendButton();
  });

  const handleSend = async () => {

    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split('/\|//').pop();

    const { titulo, tipo, descricao, preco, foto } = state;

    const garrafa = {
      ...(garrafaToUpdate && { _id: garrafaToUpdate?._id }),
      titulo,
      tipo,
      descricao,
      preco,
      foto: `${renomeiaCaminhoFoto(foto)}`,
    };
    const serviceCall = {
      [ActionMode.NORMAL]: () => AdegaService.create(garrafa),
      [ActionMode.ATUALIZAR]: () =>
        AdegaService.update(garrafaToUpdate?._id, garrafa),
    };
    console.log(mode)
    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateGararafa(response),
      [ActionMode.ATUALIZAR]: () => onUpdateGarrafa(response),
    };


    actionResponse[mode]();

    const reset = {
      preco: "",
      sabor: "",
      recheio: "",
      descricao: "",
      foto: "",
    };

    setState(reset);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaGarrafaModal ">
        <form autoComplete="off">
          <h2>Adicionar ao Cardápio</h2>
          <div>
            <label className="AdicionaGarrafaModal_text" htmlFor="preco">
              {" "}
              Preco:{" "}
            </label>
            <input
              type="text"
              id="preco"
              placeholder="149,90"
              value={state.preco}
              required
              onChange={(e) => handleChange(e, "preco")}
            />
          </div>
          <div>
            <label className="AdicionaGarrafaModal_text" htmlFor="titulo">
              {" "}
              Titulo:{" "}
            </label>
            <input
              type="text"
              id="titulo"
              placeholder="Jack Daniel's"
              value={state.titulo}
              required
              onChange={(e) => handleChange(e, "titulo")}
            />
          </div>
          <div>
            <label className="AdicionaGarrafaModal_text" htmlFor="tipo">
              {" "}
              Tipo:{" "}
            </label>
            <input
              type="text"
              id="tipo"
              placeholder="Whisky Jack"
              value={state.tipo}
              required
              onChange={(e) => handleChange(e, "tipo")}
            />
          </div>
          <div>
            <label className="AdicionaGarrafaModal_text" htmlFor="descricao">
              {" "}
              Descrição:{" "}
            </label>
            <input
              type="text"
              id="descricao"
              placeholder="Coloque uma descrição"
              value={state.descricao}
              required
              onChange={(e) => handleChange(e, "descricao")}
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
              accept="image/png, image/gif, image/jpeg"
              required
              onChange={(e) => handleChange(e, "foto")}
            />
          </div>

          <button
            className="AdicionaGarrafa_enviar"
            type="button"
            disabled={canDisable}
            onClick={handleSend}
          >
            {ActionMode.NORMAL === mode ? "Enviar" : "Atualizar"}
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionarEditarGarrafa;
