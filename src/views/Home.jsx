import "./Home.css";
import AdegaLista from "../components/AdegaLista/AdegaLista";
import NavBar from "components/NavBar/NavBar";
import AdicionarGarrafa from "components/AdicionarGarrafa/AdicionarGarrafa";
import { useState } from "react";

function Home() {
  const [canShowAdicionaGarrrafaModal, setCanShowAdicionaGarrafaaModal] = useState(false);

  return (
    <div className="Home">
      <NavBar createGarrafa={() => setCanShowAdicionaGarrafaaModal(true)}/>
      <div className="Home__container">
        <AdegaLista />
        {
          canShowAdicionaGarrrafaModal &&
          (<AdicionarGarrafa closeModal={() => setCanShowAdicionaGarrafaaModal(false)} />)
        }
        <AdicionarGarrafa />
      </div>
    </div>
  );
}

export default Home;
