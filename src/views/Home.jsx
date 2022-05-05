import "./Home.css";
import AdegaLista from "../components/AdegaLista/AdegaLista";
import NavBar from "components/NavBar/NavBar";
import AdicionarGarrafa from "components/AdicionarGarrafa/AdicionarGarrafa";
import { useState } from "react";

function Home() {
  const [canShowAdicionaGarrrafaModal, setCanShowAdicionaGarrafaaModal] = useState(false);
  const [garrafaParaAdicionar, setGarrafaParaAdicionar] = useState();


  return (
    <div className="Home">
      <NavBar createGarrafa={() => setCanShowAdicionaGarrafaaModal(true)}/>
      <div className="Home__container">
        <AdegaLista garrafaCriada={garrafaParaAdicionar}/>
        {
          canShowAdicionaGarrrafaModal &&
          (<AdicionarGarrafa closeModal={() => setCanShowAdicionaGarrafaaModal(false)} 
          onCreateGararafa = {(garrafa) => setGarrafaParaAdicionar(garrafa)}/>)
        }
        
        <AdicionarGarrafa />
      </div>
    </div>
  );
}

export default Home;
