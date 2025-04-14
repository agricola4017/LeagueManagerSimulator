import Footer from '../Footer'
import { roleEnum } from '../../data/Enums'
import PrimitiveTable from '../tableComponents/PrimitiveTable'
import { TeamTableColumns } from './TeamTableColumns'

const TestSimulatePage = () => {

    try {
        let gameLog = window.gameLog[0]
        let playerStats = gameLog.playerStats
        let teamStats = gameLog.teamStats
        let team1Index = gameLog.team1Index
        let team2Index = gameLog.team2Index
        let player1OVR = Array.from(window.players[team1Index].values()).map(e=>e.getOVR())
        let player2OVR = Array.from(window.players[team2Index].values()).map(e=>e.getOVR())

        let style1 = teamStats[0]["win"] ? {color:"green"} : {}
        let style2 = teamStats[1]["win"] ? {color:"green"} : {}

        let table1Elements =  [{"col1": "Gold", "team1": teamStats[0]["gold"], "team2": teamStats[1]["gold"]}]
        table1Elements.push({"col1": "K/D", "team1": teamStats[0]["kills"] + "-" + teamStats[0]["deaths"], "team2": teamStats[1]["kills"] + "-" + teamStats[1]["deaths"]})
        let table1Columns = TeamTableColumns("team " + team1Index, "team " + team2Index)
        table1Columns = [{Header: "", accessor: "col1"}, ...table1Columns]
        
        const combatStatsElements = [0, 1, 2, 3, 4].map((i) => ({
            name1: `team1player${i}`,
            role1: roleEnum[i],
            kills1: playerStats[i]["kills"],
            deaths1: playerStats[i]["deaths"],
            gold1: playerStats[i]["gold"],
            name2: `team2player${i}`,
            role2: roleEnum[i],
            kills2: playerStats[i + 5]["kills"],
            deaths2: playerStats[i + 5]["deaths"],
            gold2: playerStats[i + 5]["gold"],
            goldDiff: playerStats[i]["gold"] - playerStats[i + 5]["gold"],
        }));

        const combatStatsColumns = [
            { Header: "Name", accessor: "name1" },
            { Header: "Role", accessor: "role1" },
            { Header: "Kills", accessor: "kills1" },
            { Header: "Deaths", accessor: "deaths1" },
            { Header: "Gold", accessor: "gold1" },
            { Header: "Name", accessor: "name2" },
            { Header: "Role", accessor: "role2" },
            { Header: "Kills", accessor: "kills2" },
            { Header: "Deaths", accessor: "deaths2" },
            { Header: "Gold", accessor: "gold2" },
            { Header: "Gold Diff", accessor: "goldDiff" }
        ];

        const ovrElements = [0, 1, 2, 3, 4].map((i) => ({
            name1: `team1player${i}`,
            role1: roleEnum[i],
            agg1: player1OVR[i].getAggression(),
            cons1: player1OVR[i].getConsistency(),
            lane1: player1OVR[i].getLaning(),
            econ1: player1OVR[i].getEconomy(),
            name2: `team2player${i}`,
            role2: roleEnum[i],
            agg2: player2OVR[i].getAggression(),
            cons2: player2OVR[i].getConsistency(),
            lane2: player2OVR[i].getLaning(),
            econ2: player2OVR[i].getEconomy(),
        }));

        const ovrColumns = [
            { Header: "Name", accessor: "name1" },
            { Header: "Role", accessor: "role1" },
            { Header: "Agg", accessor: "agg1" },
            { Header: "Cons", accessor: "cons1" },
            { Header: "Lane", accessor: "lane1" },
            { Header: "Econ", accessor: "econ1" },
            { Header: "Name", accessor: "name2" },
            { Header: "Role", accessor: "role2" },
            { Header: "Agg", accessor: "agg2" },
            { Header: "Cons", accessor: "cons2" },
            { Header: "Lane", accessor: "lane2" },
            { Header: "Econ", accessor: "econ2" }
        ];

        return (
            <div className ='container'>
                <h1> Game Log </h1>
                <PrimitiveTable elements={table1Elements} tableColumns={table1Columns}/>
                <br/>
                <PrimitiveTable elements={combatStatsElements} tableColumns={combatStatsColumns}/>
                <br/>
                <PrimitiveTable elements={ovrElements} tableColumns={ovrColumns}/>
                <br/>
                <Footer/>
            </div>
        )
    } catch (error) {
        return (
            <>
                <br></br>
                <h1>{error.toString()}</h1>
                <h2>Click initTestTeams Button and retry</h2>
            </>
        )
    }
}

export default TestSimulatePage
