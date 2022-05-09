import "./Home.css";
import AdegaLista from "../components/AdegaLista/AdegaLista";
import NavBar from "components/NavBar/NavBar";
import AdicionarEdiatarGarrafa from "components/AdicionarEditarGarrafa/AdicionarEditarGarrafa";
import { useState } from "react";
import { ActionMode } from "constants/index.js";

function Home() {
  const [canShowAdicionaGarrrafaModal, setCanShowAdicionaGarrafaModal] =
    useState(false);
  const [garrafaParaAdicionar, setGarrafaParaAdicionar] = useState();
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
  const [garrafaParaEditar, setgarrafaParaEditar] = useState();
  const [garrafaparaDeleta, setGarrafaparaDeleta] = useState();
  const [garrafaEditada, setGarrafaEditada] = useState();

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
  }


  return (
    <div className="Home">
      <NavBar
        mode={modoAtual}
        createGarrafa={() => setCanShowAdicionaGarrafaModal(true)}
        updateGarrafa={() => handleActions(ActionMode.ATUALIZAR)}
        deleteGarrafa={() => handleActions(ActionMode.DELETAR)}
      />
      <div className="Home__container">
        <AdegaLista 
        mode={modoAtual} 
        garrafaCriada={garrafaParaAdicionar}
        garrafaEditada={garrafaEditada}
        deletaGarrafa={handleDeletaGarrafa}
        updateGarrafa={handleUpdateGarrafa} />
        {canShowAdicionaGarrrafaModal && (
          <AdicionarEdiatarGarrafa
          onUpdateGarrafa={(garrafa) => setGarrafaEditada(garrafa)}
            closeModal={handleCloseModal}
            onCreateGararafa={(garrafa) => setGarrafaParaAdicionar(garrafa)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
