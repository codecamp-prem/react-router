import { NavLink } from "react-router-dom";

export function NavBar(){
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/store">Store</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/team" end>Team</NavLink></li>
                </ul>
            </nav>
        </>
    )
}