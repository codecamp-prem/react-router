import { Link } from "react-router-dom";
import teamMembers from "./team-member.json"

export function TeamNav(){
    return (
        <>
            <nav>
                <ul>
                    {teamMembers.map(member => {
                        return (
                            <>
                                <li key={member.id}>
                                    <Link to={member.id}>Team - {member.name}</Link>
                                </li>
                            </>
                        )
                    })}
                    <li><Link to="new-team-member">New Team Member</Link></li>
                </ul>
            </nav>
        </>
    )
}