import Table from '../tableComponents/Table'
import {Donut} from '../Donut'
import Footer from '../Footer'
import { tempTeams } from './objects/tempTeams'
import {useState, useCallback, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import { PlayerColumns } from '../Player/PlayerColumns'
import { tempPlayers } from '../Player/objects/tempPlayers'
    
const TeamDetailPage = () => {

    useEffect(() => {

        if (window.hasRun) return
        window.hasRun = true
        
        let i = 0;
        while (i < tempPlayers.length) {
            for (let team of tempTeams) {
                team.Players.push(tempPlayers[i])
                i++
            }
        }
    }, [])
    
    const {teamId} = useParams()
    const [showDonut, setShowDonut] = useState(false)
    const team = tempTeams.find(team => team.name === teamId)

    const toggleDonut = useCallback(() => {
        setShowDonut(prev => !prev)
    }, [])

    return (
        <div className='container'>
            <Donut
                onChange={toggleDonut}
                showDonut={showDonut}
            />
            <h1>{team.name}</h1>
            {team.Players.length > 0 ? (
                <Table
                    elements={team.Players}
                    tableColumns={PlayerColumns}
                />
            ) : (
                'No players to show'
            )}
            <Footer />
        </div>
    )
}

export default TeamDetailPage
