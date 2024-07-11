import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Client(){
    const [client,setClient] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/')
        .then(
            (Response) => {
                console.log(Response)
                setClient(Response.data)
            }
        )
        .catch((Error) => {
            console.log(Error)
        })
    },[])
    return(
        <div>
            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>First name</th>
                    <th>Family name</th>
                    <th>Email</th>
                </tr>
                {client.map((user, index) => <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.fname}</td>
                                        <td>{user.famname}</td>
                                        <td>{user.email}</td>
                                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Client