import "./SacolaModal.css";
import Modal from "components/Modal/Modal";
import { SacolaService } from "services/SacolaService";
import { useEffect, useState } from "react";
import { AdegaService } from "services/AdegaService";
import { useNavigate } from "react-router-dom";

function SacolaModal({ closeModal }) {
  const navigate = useNavigate()

  const [lista, setLista] = useState([]);

  const purchase = async () => {
    await SacolaService.purchase();
    navigate('/loading');
  };

  const handleClose = async () => {
    await SacolaService.purchase();
    closeModal();
  };

  const getListas = async () => {
    const garrafaLista = await AdegaService.getLista();
    const sacolaLista = await SacolaService.getLista();

    const encontraNome = (id) => {
      const obj = garrafaLista.find((i) => i._id === id);
      return (obj && obj.titulo) ?? "";
    };

    if (Array.isArray(sacolaLista)) {
      const novaLista = sacolaLista.map(({ garrafaId, quantidade }) => ({
        nome: encontraNome(garrafaId),
        quantidade,
      }));

      setLista(novaLista);
    }
  };

  useEffect(() => {
    getListas();
  }, []);

  return (
    <Modal closeModal={handleClose}>
      <div className="SacolaModal">
        <h2>Garrafas & Quantidades</h2>

        <div>
          {lista.map((i, idx) => (
            <div key={idx}>
              {" "}
              {i.nome + " " + i.quantidade + "x"} <br />
            </div>
          ))}
        </div>

        <br />

        <div>
          <button onClick={purchase} className="SacolaModal__confirmar">
            {" "}
            Fechar compra{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SacolaModal;