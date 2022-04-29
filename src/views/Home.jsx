import "./Home.css";
import AdegaLista from "../components/AdegaLista/AdegaLista";
import "../components/AdegaLista/AdegaLista.css"


function Home (){
    return (
        <div className="Home">
        <div className="Home__container">
          <AdegaLista/>
        </div>
      </div>
    )
}

export default Home;