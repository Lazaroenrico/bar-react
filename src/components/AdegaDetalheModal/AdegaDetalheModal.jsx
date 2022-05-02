import "./AdegaDetalheModal.css";
import Modal from "components/Modal/Modal.jsx";

function AdegaDetalhesModal({ Adega, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="AdegaetalhesModal">
            <div>
            <div className="AdegaDetalhesModal__titulo"> {Adega.titulo} </div>
            <div className="AdegaDetalhesModal__preco"> R$ {Adega.preco} </div>
            <div className="AdegaDetalhesModal__descricao">
                {" "}
                <b>Sabor:</b> {Adega.tipo}{" "}
            </div>
            <div className="AdegaDetalhesModal__descricao">
                {" "}
                <b>Descrição:</b> {Adega.descricao}{" "}
            </div>
            </div>
            <img
            className="AdegaDetalhesModal__foto"
            src={Adega.foto}
            alt={`Garrafa de ${Adega.tipo}`}
            />
      </div>
    </Modal>
  );
}

export default AdegaDetalhesModal;
