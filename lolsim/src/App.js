import About from './About'
import Landing from './Landing'
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import PlayerPage from './components/Player/PlayerPage'
import TeamPage from './components/Team/TeamPage'
import TestSimulatePage from './components/TestSimulate/TestSimulatePage'
import ControlPanel from './components/ControlPanel'
import { WebsocketConnection } from './gamelogic/WebsocketConnection'
import BlankPage from './BlankPage'


function App() {
  window.clicked=false
  return (
  <Router>
        
        <ControlPanel/>
        <Landing/>
        <Routes>
            <Route path='/LeagueManagerSimulator' element={
                <>
                <BlankPage/>
                </>
                } />
            <Route path='/LeagueManagerSimulator/Players' element={
                <>
                    <PlayerPage/>
                </>
            } />
            <Route path='/LeagueManagerSimulator/Teams' element={
                <>
                    <TeamPage/>
                </>
            } />
            <Route path='/LeagueManagerSimulator/Test' element={
                <>
                    <TestSimulatePage/>
                </>
            } />
            <Route path='/about' element={<About />} />
        </Routes>
    </Router>
  )
}

export default App;
