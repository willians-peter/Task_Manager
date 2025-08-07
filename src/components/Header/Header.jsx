
import tarefaIcon from "../../assets/tarefaIcon.png";

import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div>
        <img
          src={tarefaIcon}
          alt="Tarefa Icone"
          style={{
            borderRadius: "8px",
            width: "32px",
            height: "32px",
            objectFit: "contain",
            maxWidth: "32px",
            maxHeight: "32px",
          }}
        />
        <h1>Task Manager</h1>
   
      </div>
    </header>
  );
}

export default Header;
