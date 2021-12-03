import React, { useEffect, useReducer } from "react"
import axios from 'axios'
import First11 from "./Components/First11"


function App() {

  const initialState = {
    loading: true,
    teams: {},
    players: {},
    error: ``
  }

  const reducer = ((state, action) => {
    switch(action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          teams: action.payload.teams,
          players: action.payload.elements,
          error: ""
        }
      case "FETCH_ERROR":
        return {
          loading: false,
          teams: {},
          players: {},
          error: `${action.error}`
        }
      default:
        return state
    }
  })


  // fetch data from our server
  useEffect(() => {
    axios('http://localhost:4001/fetchbootstrap')
    .then(res =>{
      var data = res.data
      dispatch({type:"FETCH_SUCCESS", payload : { teams : data.teams, elements : data.elements}})
        
    })     
    .catch(err => {
      dispatch({type: "FETCH_ERROR", error: err})
    })
   
  }, [])

const [state, dispatch] = useReducer(reducer, initialState)
const {teams,players,loading,error} = state
console.log(players)
// getting players in specific position and sorting them based on form.
// var goalkeepers = players.filter(player => player.element_type === 1).sort((a,b) => {
//   return b.form - a.form 
// }).slice(0,10)
// goalkeepers = goalkeepers.sort((a,b) => b.points_per_game - a.points_per_game)

// console.log(goalkeepers)



  return (
    <div className="App">
      <First11 />
    </div>
  );
}

export default App;
