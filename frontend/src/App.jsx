import Client from "./Client"
import Create from "./Create"
import React,{ useState } from "react"
function App() {
  const [data,setData] = useState([])
  const [page,setPage] = useState("Client")
  return (
    <>
     {
      page == "Client"? <Client setPage={setPage} setData={setData}/> : <Create setPage={setPage} data={data} /> 
     }
      
    </>
  )
}

export default App
