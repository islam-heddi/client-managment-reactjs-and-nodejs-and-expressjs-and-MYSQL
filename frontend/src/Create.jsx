import React,{useState,useEffect} from "react"
import axios from "axios"

function Create(props){
    const [firstname,setFirstname] = useState("")
    const [familyname,setFamilyname] = useState("")
    const [email,setEmail] = useState("")
    const [id,setId] = useState(100)

    const handlefname = (e) => {
        setFirstname(e.target.value)
    }

    const handleFamilyname = (e) => {
        setFamilyname(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/adduser",{id:id,
            firstname:firstname,
            familyname:familyname,
            email:email})
        .then(response => console.log(response))
        .catch(err => console.log(err))
        props.setPage("Client")
    }       

    const handleRewind = () => {
        props.setPage("Client")
    }
    return(
        <div>
            <button onClick={handleRewind}>Rewind</button>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            First name :
                        </td>
                        <td>
                            <input type="text" value={firstname} onChange={(e) => handlefname(e)} name="name"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Family name :
                        </td>
                        <td>
                            <input type="text" value={familyname} onChange={(e) => handleFamilyname(e)} name="family" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email :
                        </td>
                        <td>
                            <input type="text" value={email} onChange={(e) => handleEmail(e)} name="Email" />
                        </td>
                    </tr>
                    </tbody>
                </table>
                    <button type="submit">
                        Submit
                    </button>
                    <button type="reset">Reset</button>
            </form>
        </div>
    )
}

export default Create