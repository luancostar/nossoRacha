
import BottomBar from "../../components/BottomBar"
import TopBar from "../../components/TopBar"
import FirstRow from "../../components/FirstRoll"

import logoImage from "../../assets/logo_nobg.png"
import logoName from  "../../assets/name_nobg.png"
import logoCampo from  "../../assets/campo.png"
import logoEquipe from  "../../assets/equipe.png"
import logoPlayer from  "../../assets/player.png"
 
export default function Home() {
    return (
        <>
       <TopBar
       logoImg={logoImage}
       logoName={logoName}/>
       <BottomBar/> 
       <FirstRow
       logoCampo={logoCampo}
       logoEquipe={logoEquipe}
       logoPlayer={logoPlayer}/>
        </>
    )
}