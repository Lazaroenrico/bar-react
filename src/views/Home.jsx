import "./Home.css";
import AdegaLista from "../components/AdegaLista/AdegaLista";
import NavBar from "components/NavBar/NavBar";
import AdicionarGarrafa from "components/AdicionarGarrafa/AdicionarGarrafa";
import { useState } from "react";

function Home() {
  const [canShowAdicionaPaletaModal, setCanShowAdicionaGarrafaaModal] = useState(false);

  return (
    <div className="Home">
      <NavBar createPaleta={() => setCanShowAdicionaGarrafaaModal(true)}/>
      <div className="Home__container">
        <AdegaLista />
        <AdicionarGarrafa />
      </div>
    </div>
  );
}

export default Home;
