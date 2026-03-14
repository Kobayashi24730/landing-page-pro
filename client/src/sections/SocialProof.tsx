import FotoOne from "../assets/FotoOne.png";
import FotoTwo from "../assets/FotoTwo.png";

export default function SoxialProof() {
  reurn(
    <div>

      <h2><small>Tipo</small>Crie o caminho digital para seu sucesso!!</h2>
      <div>
        <div>
          <img src={FotoOne}>
          <h3>Tipo tal</h3>
          <small>pequeno small</small>
          <p>descricao</p>
          <div>
            <span className="icon-watz"></span>
            <span className="icon-insta" ></span>
            <span className="icon-git"></span>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img src={FotoTwo}>
          <h3>Tipo tal</h3>
          <small>pequeno small</small>
          <p>descricao</p>
          <div>
            <span className="icon-watz"></span>
            <span className="icon-insta" ></span>
            <span className="icon-git"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
