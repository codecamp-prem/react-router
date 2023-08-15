import { Link, useLoaderData } from "react-router-dom";
//import teamMembers from "./team-member.json"

export function TeamNav(){
    const teamMembers = useLoaderData()
    return (
        <>
            <nav>
                <ul>
                    {teamMembers.map(member => (
                        <li key={member.id}>
                            <Link to={member.id.toString()}>Team - {member.name}</Link> {/* to= expects string when working with react router */}
                        </li>
                    ))}
                    <li><Link to="new-team-member">New Team Member</Link></li>
                </ul>
            </nav>
        </>
    )
}