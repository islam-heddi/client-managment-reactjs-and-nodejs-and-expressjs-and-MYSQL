import Client from "./Client"
import Create from "./Create"
import Modify from "./Modify"
import React,{ useState } from "react"
function App() {
  const [data,setData] = useState([])
  const [page,setPage] = useState("Client")
  const [UserToModify,setUserToModify] = useState(0)

  
  return (
    <>
     {
     // page == "Client"? <Client page={page} setPage={setPage} setData={setData}/> : <Create setPage={setPage} data={data} /> 
          page == "Client" ? 
           <Client page={page} setUserToModify={setUserToModify} setPage={setPage} setData={setData}/>
           : page == "modify" ? <Modify UserToModify={UserToModify} setPage={setPage}/>
          : <Create setPage={setPage} data={data} /> 
     }
    </>
  )
}

export default App
