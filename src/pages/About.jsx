import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function About(){
    // navigation inside component
    const navigate = useNavigate()
    useEffect(() => {
        // after 3 second navigate back to home page
        const timeout = setTimeout(() => {
            navigate("/") // for demo pupose only, This hook should really be used for event
            // to thing like form submit, when click on button, 
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
    <>
        <h1>About</h1>
    </>
    )
}