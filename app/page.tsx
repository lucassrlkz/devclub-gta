import Image from "next/image";
import cj from "../src/assests/cj.png";
import jason from "../src/assests/jason.png";
import lucia from "../src/assests/lucia.png";
import background from "../src/assests/background2.jpg";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url("${background.src}")` }}>
      <p className="nome">Lucia</p>
      <Image className="personagem" src={lucia} alt="Lucia" width={500} height={100} />
      <div className="textos">
          <p className="etiqueta">Selecione o seu Personagem</p>
          <h1>Não é só <br/>um Jogo</h1>
          <p className="texto-apoio">Escolha seu personagem favorito. Ou tire uma selfie e vire uma.</p>
      </div>

      <div className="menu">
        <Image className="avatar" src={lucia} alt="Lucia" width={100} height={100} />
        <Image className="avatar" src={jason} alt="Jason" width={100} height={100} />
        <Image className="avatar" src={cj} alt="CJ" width={100} height={100} />
      </div>

      <button className="voce">📸</button>
    </div>
  );
}
