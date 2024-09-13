import { useState, useEffect } from "react";
import BottomBar from "../../components/BottomBar";
import TopBar from "../../components/TopBar";
import FirstRow from "../../components/FirstRoll";
import ContainerMatchs from "../../components/ContainerMatchs";
import ContainerCardPlayers from "../../components/ContainerCardPlayers";
import Loading from "../../components/Loading";

import logoImage from "../../assets/logo_nobg.png";
import logoName from  "../../assets/name_nobg.png";
import logoCampo from  "../../assets/campo.png";
import logoEquipe from  "../../assets/equipe.png";
import logoPlayer from  "../../assets/player.png";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 segundo

    return () => clearTimeout(timer); // Limpa o temporizador ao desmontar
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <TopBar logoImg={logoImage} logoName={logoName} />
          <BottomBar />
          <FirstRow
            logoCampo={logoCampo}
            logoEquipe={logoEquipe}
            logoPlayer={logoPlayer}
          />
          <ContainerMatchs />
          <ContainerCardPlayers />
        </>
      )}
    </>
  );
}
