import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Modify(props){
    const id = props.UserToModify
    const [data,setData] = useState([])
    const [firstname,setFirstname] = useState("")
    const [familyname,setFamilyname] = useState("")
    const [email,setEmail] = useState("")
    
    useEffect(() => {
        axios.get(`http://localhost:5000/${id}`)
        .then((response) => {
            console.log(response)
            setData(response.data)
            setFirstname(response.data[0].fname)
            setFamilyname(response.data[0].famname)
            setEmail(response.data[0].email)
        })
        .catch(Error => console.log(Error))
    }
    ,[])

    const handleRewind = () => {
        props.setPage("Client")
    }

    const handlefname = (e) => {
        setFirstname(e.target.value)
    }

    const handlefamname = (e) => {
        setFamilyname(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = () => {
        axios.put("http://localhost:5000/updateuser",{
            id:id,
            firstname:firstname,
            familyname:familyname,
            email:email
        })
        .then((response) => {
            console.log(response)
        })
        .catch(Error => console.log(Error))
        setPage("Client")
    }

    return(
        <>
            <button onClick={handleRewind}>Rewind</button>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                First name :
                            </td>
                            <td>
                                <input type="text" value={firstname} onChange={(e) => handlefname(e)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Family name :
                            </td>
                            <td>
                                <input type="text" value={familyname} onChange={(e) => handlefamname(e)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email
                            </td>
                            <td>
                                <input type="email" value={email} onChange={(e) => handleEmail(e)}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button>Submit</button>
            </form>
        </>
    )

}

export default Modify