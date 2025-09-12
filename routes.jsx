import{
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";

import Home from "./src/Pages/Home/Home";
import Login from "./src/Pages/Login/Login";
import Texto from "./src/Pages/Texto/Texto";
import Gamificação from "./src/Pages/Gamificação/Gamificação";

const router = createBrowserRouter (
    createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />} />
        <Route path= "Login" element = {<Login/>}/>
        <Route path= "Texto" element = {<Texto/>}/>
        <Route path = "Gamificação" element = {<Gamificação/>} />
    </Route>
    )
)

export default function Routes(){
    return <RouterProvider router={router}/>
}
