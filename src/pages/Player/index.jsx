
import BottomBar from "../../components/BottomBar"
import TopBar from "../../components/TopBar"
import NewPlayer from "../../components/NewPlayer"
 

import logoImage from "../../assets/logo_nobg.png"
import logoName from  "../../assets/name_nobg.png"
 
export default function Player() {
    return (
        <>
       <TopBar
       logoImg={logoImage}
       logoName={logoName}/>
       <BottomBar/> 
        <NewPlayer/>
 
        </>
    )
}