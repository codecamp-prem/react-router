import { Outlet, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { TeamMember } from "./pages/TeamMember";
import { TeamNav } from "./TeamNav";

export const router = createBrowserRouter([
    {
        element: <NavLayout />, 
        errorElement: <h1>Error: This Custom error will show to Every Children</h1>,
        children: [
            {path: "/", element: <Home />},
            {path: "/store", element: <Store />},
            {
                path: "/about", 
                element: <About />, 
                errorElement: <h1>Error: This Custom error will over-ride Parent errorElement and shows this error when it occurs in the "about pages"</h1>,
            },
            {
                path: "/team", 
                element: <TeamNavLayout />,
                children:[
                    {index: true, element: <Team />},
                    {path: "john", element: <TeamMember name="John Doe" />},
                    {path: "jane", element: <TeamMember name="Jane Doe" />}
                ]
            }
        ]
    }
])

function NavLayout(){
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

// it is inside NavLayout element
function TeamNavLayout(){
    // show team links like Team - John Doe Team - Jane Doe
    // when on Team pages only
    return (
        <>
            <TeamNav />
            <Outlet context="From TeamNavLayout context. It can be used in any children of element: <TeamNavLayout />. Powerful!!"/>
        </>
    )
}