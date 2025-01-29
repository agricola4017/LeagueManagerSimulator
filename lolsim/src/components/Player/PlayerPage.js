import Table from '../tableComponents/Table'
import Header from './Header'
import { Donut } from '../Donut'
import AddPlayer from './AddPlayer'
import { PlayerColumns } from './PlayerColumns'
import Footer from '../Footer'
import { tempPlayers } from './objects/tempPlayers.js'
import { useState, useCallback } from 'react'
import { loadPlayerJSON } from '../../data/loadJSON'

const PlayerPage = () => {
    const [players, setPlayers] = useState(() => loadPlayerJSON(tempPlayers))
    const [showAddPlayer, setShowAddPlayer] = useState(false)
    const [showDonut, setShowDonut] = useState(false)
    const [playerParams, setPlayerParams] = useState({})

    const addPlayer = useCallback((player) => {
        setPlayers(prevPlayers => [...prevPlayers, player])
    }, [])

    const deletePlayer = useCallback((id) => {
        setPlayers(prevPlayers => {
            const newPlayers = [...prevPlayers]
            newPlayers.splice(id, 1)
            return newPlayers
        })
    }, [])

    const updatePlayer = useCallback((playerValues, playerId) => {
        const updatedParams = {
            role: playerValues.role,
            name: playerValues.name,
            age: playerValues.age,
            OVR: playerValues.OVR,
            POT: playerValues.POT,
            region: playerValues.region,
            team: playerValues.team,
            id: playerId
        }
        setPlayerParams(updatedParams)
        setShowAddPlayer(true)
    }, [])

    const changePlayer = useCallback((player, id) => {
        setPlayers(prevPlayers => {
            const newPlayers = [...prevPlayers]
            newPlayers.splice(id, 1, player)
            return newPlayers
        })
        resetParams()
    }, [])

    const resetParams = useCallback(() => {
        setPlayerParams({})
    }, [])

    const toggleAddPlayer = useCallback(() => {
        setShowAddPlayer(prev => !prev)
    }, [])

    const toggleDonut = useCallback(() => {
        setShowDonut(prev => !prev)
    }, [])

    return (
        <div className='container'>
            <Header 
                onAdd={toggleAddPlayer}
                showAdd={showAddPlayer}
                resetParams={resetParams}
            />
            {showAddPlayer && (
                <AddPlayer
                    onAdd={addPlayer}
                    onUpdate={changePlayer}
                    playerParams={playerParams}
                    setShowAddPlayer={setShowAddPlayer}
                />
            )}
            <Donut
                onChange={toggleDonut}
                showDonut={showDonut}
            />
            {players.length > 0 ? (
                <Table
                    elements={players}
                    onDelete={deletePlayer}
                    onUpdate={updatePlayer}
                    tableColumns={PlayerColumns}
                />
            ) : (
                'No players to show'
            )}
            <Footer />
        </div>
    )
}

export default PlayerPage
