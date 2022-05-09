import "./DeletaGarrafaModal.css";
import Modal from "components/Modal/Modal";
import { AdegaService } from "services/AdegaService";

function DeletaGarrafaModal({
  closeModal,
  garrafaParaDeletar,
  onDeleteGarrafa,
}) {
  const handleDelete = async (garrafa) => {
    await AdegaService.deleteById(garrafa._id);
    onDeleteGarrafa(garrafa);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeletaGarrafaModal">
        <h2>Confirmação</h2>
        <p>
          Você realmente deseja remover <b>{garrafaParaDeletar.titulo}</b> do
          cardápio?
        </p>

        <img
          className="DeletaGarrafaModal__foto"
          src={garrafaParaDeletar.foto}
          alt={garrafaParaDeletar.titulo}
        />

        <br />

        <div>
          <button
            onClick={() => handleDelete(garrafaParaDeletar)}
            className="DeletaGarrafaModal__confirmar"
          >
            {" "}
            Confirmar{" "}
          </button>
          <button onClick={closeModal} className="DeletaGarrafaModal__cancelar">
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletaGarrafaModal;
