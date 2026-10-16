"use client";

import Image from "next/image";
import { useState } from "react";
import cj from "../public/assests/cj.png";
import jason from "../public/assests/jason.png";
import lucia from "../public/assests/lucia.png";
import background from "../public/assests/background2.jpg";

const characters = [
  { name: "Lucia", image: lucia },
  { name: "Jason", image: jason },
  { name: "CJ", image: cj },
];

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

  return (
    <div className="home" style={{ backgroundImage: `url("${background.src}")`,
      backgroundSize: "cover",
	    backgroundPosition: "center",
	    width: "100vh",
	    height: "100vh" }}>

      <p className="nome">{selectedCharacter.name}</p>
      <Image
        className="personagem"
        src={selectedCharacter.image}
        alt={selectedCharacter.name}
        loading="eager"
        style={{ height: "700px", width: "auto" }}
      />
      <div className="textos">
        <p className="etiqueta">Selecione o seu Personagem</p>
        <h1>Não é só <br />um Jogo</h1>
        <p className="texto-apoio">Escolha seu personagem favorito. Ou tire uma selfie e vire uma.</p>
      </div>

      <div className="menu">
        {characters.map((character) => (
          <button
            className="menu-option"
            key={character.name}
            type="button"
            aria-label={`Selecionar ${character.name}`}
            aria-pressed={selectedCharacter.name === character.name}
            onClick={() => setSelectedCharacter(character)}
          >
            <Image
              className="avatar"
              src={character.image}
              alt={character.name}
              width={100}
              height={100}
            />
          </button>
        ))}
        <button className="voce">📸</button>
      </div>
    </div>
  );
}
