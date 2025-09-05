import{
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";

import Home from "./src/Pages/Home/Home";

const router = createBrowserRouter (
    createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />} />
    </Route>
    )
)

export default function Routes(){
    return <RouterProvider router={router}/>
}
