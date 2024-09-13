import { useState, useEffect } from "react";
import BottomBar from "../../components/BottomBar";
import TopBar from "../../components/TopBar";
import NewPlayer from "../../components/NewPlayer";
import Loading from "../../components/Loading";

import logoImage from "../../assets/logo_nobg.png";
import logoName from "../../assets/name_nobg.png";

export default function Player() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 segundos

    return () => clearTimeout(timer); // Limpa o temporizador ao desmontar
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <TopBar logoImg={logoImage} logoName={logoName} />
          <BottomBar />
          <NewPlayer />
        </>
      )}
    </>
  );
}
