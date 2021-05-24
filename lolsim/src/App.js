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

  const onAdd = () => {
    console.log('added')
  }

  return (
    <div className ='container'>
      <Header onClick={onAdd}/>
      <Players players={players} />
      </div>
  );
}

export default App;
