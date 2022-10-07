import Table from '../tableComponents/Table'
import {Donut} from '../Donut'
import { TeamColumns } from './TeamColumns'
import Footer from '../Footer'
import { tempTeams } from './objects/tempTeams'
import {useState} from 'react'
import { loadTeamJSON } from '../../data/loadJSON'


const TeamPage = () => {

    let initTeams = loadTeamJSON(tempTeams)

    const [teams, setTeams] = useState(
        initTeams, []
      )
      const [showDonut, setShowDonut] = useState(false)
    

      const updateTeam= async (playerValues) => {
      }

    return (
        <div className ='container'>
            <Donut onChange={() => setShowDonut(!showDonut)} showDonut={showDonut}/>
            <h1>Teams</h1>
            {teams.length > 0 ? <Table elements={teams} tableColumns={TeamColumns}/> : 'No players to show'}
            <Footer/>
        </div>
    )
}

export default TeamPage
