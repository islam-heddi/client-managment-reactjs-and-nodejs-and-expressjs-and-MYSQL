import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Modify(props){
    const id = props.id
    const [data,setData] = useState([])
    const [firstname,setFirstname] = useState("")
    const [familyname,setFamilyname] = useState("")
    const [email,setEmail] = useState("")
    
    useEffect(
        axios.get(`http://localhost:5000/${id}`)
        .then((response) => {
            console.log(response)
            setData(response.data)
        })
        .catch(Error => console.log(Error))
    ,[])

    const handleRewind = () => {
        setPage("Client")
    }

    return(
        <div>
            <button onClick={handleRewind}>Rewind</button>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                First name :
                            </td>
                            <td>
                                <input type="text" value={data.fname}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Family name :
                            </td>
                            <td>
                                <input type="text" value={data.famname}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email
                            </td>
                            <td>
                                <input type="email" value={data.email}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default Modify