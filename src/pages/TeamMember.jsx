import { useParams } from "react-router-dom"
import teamMembers from "../team-member.json"

export function TeamMember({name}){
    // called as same params what you have called in router.jsx params
    // path: ":teamMemberId" so teamMemberId
    // if it path: ":teamMemberId/someOtherParam/:someId"
    // then const { teamMemberId, someId } = useParams()
    const { teamMemberId } = useParams()  
    const member = teamMembers.find(m => m.id === teamMemberId)
    
    return (
        <>
        {member ? (
            <div key={member.id}>
            <h1>{member.name}</h1>
            <p>Nick Name: {member.username}</p>
            <p>Company: {member.company.name}</p>
            <p>Contact: {member.phone}</p>
            <p>Email: {member.email}</p>
            <p>Website: {member.website}</p>
            </div> 
        ) : (
            <h1>No member found!. Please check member link carefully.</h1>
        )}
        </>
    )
}

