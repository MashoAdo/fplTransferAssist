import React, { useEffect } from "react"
import axios from 'axios'


function App() {
  // const [state, setstate] = useState([])
  



  useEffect(() => {
    axios('http://localhost:4001/fetchbootstrap')
    .then(res =>{
      console.log(res)
      console.log(res.status)
        
    })     
    // .then(data => console.log(data))
    .catch(err => console.log(err))
   
  }, [])
  return (
    <div className="App">
      client
    </div>
  );
}

export default App;
