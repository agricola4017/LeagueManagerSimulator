import About from './About'
import Landing from './Landing'
import {BrowserRouter  as Router, Route} from 'react-router-dom'
import PlayerPage from './components/Player/PlayerPage'
import TeamPage from './components/Team/TeamPage'
import ControlPanel from './components/ControlPanel'

function App() {
  return (
    <>
    <ControlPanel/>
    <Router>
        <Route path='/LeagueManagerSimulator' component={Landing} />
        <Route path='/LeagueManagerSimulator/Players' exact render={(props) => (<> 
            <PlayerPage/>
          </>
        )}/>
        <Route path='/LeagueManagerSimulator/Teams' exact render={(props) => (<> 
            <TeamPage/>
          </>
        )}/>      
        <Route path='/about' component={About} />
    </Router>
    </>
  )
}

export default App;
