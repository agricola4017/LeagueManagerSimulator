import About from './About'
import Landing from './Landing'
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import PlayerPage from './components/Player/PlayerPage'
import TeamsPage from './components/Team/TeamsPage'
import TestSimulatePage from './components/TestSimulate/TestSimulatePage'
import ControlPanel from './components/ControlPanel'
import { WebsocketConnection } from './gamelogic/WebsocketConnection'
import BlankPage from './BlankPage'
import TeamDetailPage from './components/Team/TeamDetailPage'

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
                    <TeamsPage/>
                </>
            } />
            <Route path='/LeagueManagerSimulator/Test' element={
                <>
                    <TestSimulatePage/>
                </>
            } />
            <Route path='/LeagueManagerSimulator/Teams/:teamId' element={
                <>
                    <TeamDetailPage/>
                </>
            } />
            <Route path='/about' element={<About />} />
        </Routes>
    </Router>
  )
}

export default App;
