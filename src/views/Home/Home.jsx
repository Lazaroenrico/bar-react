import "./Home.css";
import AdegaLista from "../../components/AdegaLista/AdegaLista";
import NavBar from "components/NavBar/NavBar";
import AdicionarEditarGarrafa from "components/AdicionarEditarGarrafa/AdicionarEditarGarrafa";
import { useState } from "react";
import { ActionMode } from "constants/index.js";
import DeletaGarrafaModal from "components/DeletaGarrafaModal/DeletaGarrafaModal";
import SacolaModal from "components/SacolaModal/SacolaModal";
import { SacolaService } from "services/SacolaService";


function Home() {
  const [canShowAdicionaGarrrafaModal, setCanShowAdicionaGarrafaModal] =
    useState(false);
  const [canOpenBag, setCanOpenBag] = useState();
  const [garrafaParaAdicionar, setGarrafaParaAdicionar] = useState();
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
  const [garrafaParaEditar, setgarrafaParaEditar] = useState();
  const [garrafaparaDeleta, setGarrafaparaDeleta] = useState();
  const [garrafaEditada, setGarrafaEditada] = useState();
  const [garrafaRemovida, setGarrafaRemovida] = useState();

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  const handleDeletaGarrafa = (garrafaToDeletar) => {
    setGarrafaparaDeleta(garrafaToDeletar);
  };

  const handleUpdateGarrafa = (garrafaToUpadate) => {
    setgarrafaParaEditar(garrafaToUpadate);
    setCanShowAdicionaGarrafaModal(true);
  };

  const handleCloseModal = () => {
    setCanShowAdicionaGarrafaModal(false);
    setGarrafaParaAdicionar();
    setGarrafaparaDeleta();
    setgarrafaParaEditar();
    setModoAtual(ActionMode.NORMAL);
  };
  console.log(modoAtual)

  const abrirSacola = async () => {
    const lista = JSON.parse(localStorage.getItem('sacola'));
    const sacola = lista.filter(i => i.quantidade > 0);

    await SacolaService.create(sacola)

    setCanOpenBag(true)
  }

  return (
    <div className="Home">
      <NavBar
        mode={modoAtual}
        createGarrafa={() => setCanShowAdicionaGarrafaModal(true)}
        updateGarrafa={() => handleActions(ActionMode.ATUALIZAR)}
        openBag={abrirSacola}
        deletaGarrafa={() => handleActions(ActionMode.DELETAR)}
      />
      <div className="Home__container">
        <AdegaLista
          mode={modoAtual}
          garrafaCriada={garrafaParaAdicionar}
          garrafaEditada={garrafaEditada}
          garrafaRemovida={garrafaRemovida}
          deletaGarrafa={handleDeletaGarrafa}
          updateGarrafa={handleUpdateGarrafa}
        />
        {canShowAdicionaGarrrafaModal && (
          <AdicionarEditarGarrafa
            onUpdateGarrafa={(garrafa) => setGarrafaEditada(garrafa)}
            garrafaToUpdate={garrafaParaEditar}
            closeModal={handleCloseModal}
            onCreateGararafa={(garrafa) => setGarrafaParaAdicionar(garrafa)}
            mode={modoAtual}
          />
        )}
        {garrafaparaDeleta && (
          <DeletaGarrafaModal
            garrafaParaDeletar={garrafaparaDeleta}
            closeModal={handleCloseModal}
            onDeleteGarrafa={(garrafa) => setGarrafaRemovida(garrafa)}
          />
        )}
        {
          canOpenBag &&
          <SacolaModal closeModal={() => setCanOpenBag(false)} />
        }

      </div>
    </div>
  );
}

export default Home;
