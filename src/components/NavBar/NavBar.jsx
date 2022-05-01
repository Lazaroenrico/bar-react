import "./NavBar.css";

function NavBar() {
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
          <div className="Opcoes__sacola Sacola">
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
