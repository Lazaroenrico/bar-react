import "./Home.css";
import AdegaLista from "../components/AdegaLista/AdegaLista";
import "../components/AdegaLista/AdegaLista.css"
import NavBar from 'components/NavBar/NavBar';


function Home (){
    return (
        <div className="Home">
          <NavBar />
        <div className="Home__container">
          <AdegaLista/>
        </div>
      </div>
    )
}

export default Home;