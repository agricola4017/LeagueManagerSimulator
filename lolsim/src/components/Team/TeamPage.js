import Table from '../tableComponents/Table'
import {Donut} from '../Donut'
import { TeamColumns } from './TeamColumns'
import Footer from '../Footer'
import { tempTeams } from './objects/tempTeams'
import {useState, useCallback} from 'react'
import { loadTeamJSON } from '../../data/loadJSON'

const TeamPage = () => {
    const [teams, setTeams] = useState(() => loadTeamJSON(tempTeams))
    const [showDonut, setShowDonut] = useState(false)

    const updateTeam = useCallback((teamValues, teamId) => {
        // Implement team update logic here if needed
        console.log('Update team:', teamValues, teamId)
    }, [])

    const toggleDonut = useCallback(() => {
        setShowDonut(prev => !prev)
    }, [])

    return (
        <div className='container'>
            <Donut
                onChange={toggleDonut}
                showDonut={showDonut}
            />
            <h1>Teams</h1>
            {teams.length > 0 ? (
                <Table
                    elements={teams}
                    tableColumns={TeamColumns}
                    onUpdate={updateTeam}
                />
            ) : (
                'No teams to show'
            )}
            <Footer />
        </div>
    )
}

export default TeamPage
