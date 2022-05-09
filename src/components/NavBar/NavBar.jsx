import "./NavBar.css";
import { ActionMode } from "constants/index.js";

function NavBar({ createGarrafa, updateGarrafa, mode, deletaGarrafa, openBag }) {
  return (
    <div className="Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src="../assets/images/Logo.png"
            width="70px"
            alt="Logo Adega"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> La Adega </span>
        </div>

        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className="Opcoes__garrafa Garrafa"
            onClick={() => createGarrafa()}
          >
            <img
              src="../assets/images/Adicionar.png"
              width="40px"
              className="Garrafa_icone"
              alt="Adiconar garrafa"
            />
          </button>

          <button
            type="button"
            className={`Opcoes__garrafa Garrafa ${
              mode === ActionMode.ATUALIZAR && "Ativo-Update"
            } `}
            onClick={() => updateGarrafa()}
          >
            <img
              src="../assets/images/Update.png"
              width="40px"
              className="Garrafa_icone"
              alt="Adiconar garrafa"
            />
          </button>
          <button
            type="button"
            className={`Opcoes__garrafa Garrafa ${
              mode === ActionMode.DELETAR && "Garrafa-deletar"
            } `}
            onClick={() => deletaGarrafa()}
          >
            <img
              src="../assets/images/Delete.png"
              width="40px"
              className="Garrafa_icone"
              alt="Deletar garrafa"
            />
          </button>
          

          <div className="Opcoes__sacola Sacola" onClick={openBag}>
            <img
              src="../assets/images/sacola.svg"
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
