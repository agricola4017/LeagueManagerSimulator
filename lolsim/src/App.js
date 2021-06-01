import About from './components/About'
import {BrowserRouter  as Router, Route} from 'react-router-dom'
import PlayerPage from './components/Player/PlayerPage'
function App() {
  return (
    <>
    <Router>
        <Route path='/LeagueManagerSimulator' exact render={(props) => (<> 
            <PlayerPage/>
          </>
        )}/>     
        <Route path='/about' component={About} />
        
    </Router>
    </>
  )
}

export default App;
