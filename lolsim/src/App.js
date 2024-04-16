import About from './About'
import Landing from './Landing'
import {BrowserRouter  as Router, Route} from 'react-router-dom'
import PlayerPage from './components/Player/PlayerPage'
import TeamPage from './components/Team/TeamPage'
import TestSimulatePage from './components/TestSimulate/TestSimulatePage'
import ControlPanel from './components/ControlPanel'
import { WebsocketConnection } from './gamelogic/WebsocketConnection'

function App() {
  window.clicked=false
  return (
  <>
    <ControlPanel/>
    <WebsocketConnection />
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
        <Route path='/LeagueManagerSimulator/Test' exact render={(props) => (<> 
            <TestSimulatePage/>
          </>
        )}/>
        <Route path='/about' component={About} />
    </Router>
    </>
  )
}

export default App;
