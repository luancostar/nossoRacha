import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Player from "./pages/Player"
 
const router = createBrowserRouter ([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/player',
        element: <Player/>
    },  
 
])

export default router