import { Link } from "react-router-dom";

export function TeamNav(){
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/team/john">Team - John Doe</Link></li>
                    <li><Link to="/team/jane">Team - Jane Doe</Link></li>
                </ul>
            </nav>
        </>
    )
}