import { useOutletContext } from "react-router-dom"

export function Team(){
    const value = useOutletContext()
    return (
        <>
            <h1>Team</h1>
            <h3>context message</h3>
            <p>{value}</p>
        </>
    )
}