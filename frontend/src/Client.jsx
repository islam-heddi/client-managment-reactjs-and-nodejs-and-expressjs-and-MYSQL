import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Client(props){
    const [client,setClient] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/')
        .then(
            (Response) => {
                console.log(Response)
                setClient(Response.data)
                props.setData(client)
            }
        )
        .catch((Error) => {
            console.log(Error)
        })
    },[])
    const handleCreate = () => {
        props.setPage("Create")
    }
    const handleDelete = (e) => {
        const thisid = e.target.value;
        axios.delete(`http://localhost:5000/deleteuser/${thisid}`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        location.reload()
    }
    return(
        <div>
            <button onClick={handleCreate}>Create ++</button>
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
                                        <td><button value={user.id} onClick={(e) => handleDelete(e)}>delete</button></td>
                                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Client