import "./Footer.css";
import instagranLogo from "../../assets/insta_logo.png";
import faceLogo from "../../assets/face_logo.png";
import whatsLogo from "../../assets/whats_logo.png";

function Footer() {
  return (
    <footer className="Footer">
      <div>
        <div className="RichText">
          <div id="Icones">
            <a
              id
              icone
              href="https://www.instagram.com/accounts/login/"
              target="_blank"
            >
              <img src={instagranLogo} alt="Logotipo do Instagran" />
            </a>

            <a href="https://www.facebook.com/?locale=pt_BR" target="_blank">
              <img src={faceLogo} alt="Logotipo do Facebock" />
            </a>
          </div>
          <h2>Gerenciador de Tarefas</h2>
          <p>
           Task Manager
          </p>
          <p>O melhor!</p>
          <a href="https://web.whatsapp.com/" target="_blank">
            <img src={whatsLogo} alt="Logotipo do Whatsapp" />
          </a>
          
          <a href="mailto:contato@taskmanager.com.br">Enviar Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
