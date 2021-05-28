import Players from './components/Players'
import Header from './components/Header'
import {Donut} from './components/Donut'
import AddPlayer from './components/AddPlayer'
import About from './components/About'
import Footer from './components/Footer'
import {tempPlayers} from './tempPlayers.js'
//import SortingPlayers from './deprecatedcomponents/SortingPlayers'
//import FilteringPlayers from './deprecatedcomponents/FilteringPlayers'
import {useState, useEffect} from 'react'

import {BrowserRouter  as Router, Route} from 'react-router-dom'

function App() {
  const [players, setPlayers] = useState(
    tempPlayers, []
  )
  const [showAddPlayer, setShowAddPlayer] = useState(false)
  const [showDonut, setShowDonut] = useState(false)

  /* useEffect(() => {
    const getPlayers  = async() => {
      const playersFromServer = await fetchPlayers() 
      setPlayers(playersFromServer)
    }
  }, []) */
  const fetchPlayers = async() => {
    const res = await fetch('http://localhost:8080/api/v1/player')
    const data = await res.json()
    return data
  }

  const fetchPlayer = async(id) => {
    const res = await fetch(`http://localhost:8080/api/v1/player/${id}`)
    const data = await res.json()
    return data
  }

  const addPlayer = async(player) => {
    console.log(player)
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

    setPlayers(players.filter((player) => player.id !== parseInt(id)))
    //console.log(players, id)
    //console.log(players.filter((player) => player.key !== parseInt(id)))
  } 

  return (
    <Router>
      <div className ='container'>
        <Header onAdd={ () => setShowAddPlayer(!showAddPlayer)} showAdd={showAddPlayer}  />
        <Route path='/' exact render={(props) => (<> 
          {showAddPlayer && <AddPlayer onAdd={addPlayer}/>}
        {players.length > 0 ? <Players players={players} onDelete={deletePlayer}/> : 'No players to show'}</>)}/>
      </div>
      <Donut onChange={setShowDonut} showDonut={showDonut}/>
      <Footer/>
      <Route path='/about' component={About} />

    </Router>
  );
}

export default App;
