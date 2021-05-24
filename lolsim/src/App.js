import Players from './components/Players'
import Header from './components/Header'
//import SortingPlayers from './deprecatedcomponents/SortingPlayers'
//import FilteringPlayers from './deprecatedcomponents/FilteringPlayers'
import {useState} from 'react'
import {tempPlayers} from './tempPlayers.js'

function App() {
  const [players, setPlayers] = useState(
    tempPlayers
  )
  const [showAddTask, setShowAddTask] = useState(false)

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:8080/api/v1/player')
    const data = await res.json()
    return data
  }

  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:8080/api/v1/player/${id}`)
    const data = await res.json()
    return data
  }

  const onAdd = () => {
    console.log('added')
  }

  const addPlayer = async(player) => {
    const res = await fetch('http://localhost:8080/api/v1/player/', { method:'POST', 
    headers: {
      'Content-type': 'application/json'
    }, 
    body: JSON.stringify(player)
    })

    const data = await res.json
    setPlayers(...players, data)
  }

  const deletePlayer = async (id) => {
    await fetch(`http://localhost:8080/api/v1/player/${id}`, { method: 'DELETE',})

    setPlayers(players.filter((player) => player.id !==id))
  } 

  return (
    <div className ='container'>
      <Header onClick={onAdd}/>
      <Players players={players} onDelete={deletePlayer}/>
      </div>
  );
}

export default App;
