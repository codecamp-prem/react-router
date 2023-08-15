import { Navigate, Outlet, createBrowserRouter, redirect, useNavigation } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { TeamMember } from "./pages/TeamMember";
import { TeamNav } from "./TeamNav";
import { NewTeamMember } from "./pages/NewTeamMember";

export const router = createBrowserRouter([
    {
        element: <NavLayout />, 
        errorElement: <h1>Error: This Custom error will show to Every Children</h1>,
        children: [
            {path: "*", element: <Navigate to="/" />}, // if 404, navigate to home page
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
                loader: ({ request: { signal } }) => {
                    return fetch("https://jsonplaceholder.typicode.com/users", { signal })
                },
                children:[
                    {index: true, element: <Team />},
                    {
                        path: ":teamMemberId", 
                        element: <TeamMember />,
                        loader: ({ params, request: { signal } }) => {
                            return fetch(
                                `https://jsonplaceholder.typicode.com/users/${params.teamMemberId}`, 
                                { signal }
                            ).then(res => {
                                if (res.status === 200) return res.json()
                                throw redirect("/team")
                            })
                        }
                    },
                    {path: "new-team-member", element: <NewTeamMember />}
                ]
            }
        ]
    }
])

function NavLayout(){
    const { state } = useNavigation()

    return (
        <>
            <NavBar />
            {state === "loading" ? <h1>loading ...... </h1> : <Outlet />}
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