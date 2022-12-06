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
        
        return (
            <div className ='container'>
                <h1> Game Log </h1>
                <PrimitiveTable elements={table1Elements} tableColumns={table1Columns}></PrimitiveTable>
                
                <br></br>
                <table> 
                    <tbody>
                        <tr>
                            <td></td>
                            <td style={style1}>team1</td>
                            <td style={style2}>team2</td>
                        </tr>
                        <tr>
                            <td>gold</td>
                            <td style={style1}>{teamStats[0]["gold"]}</td>
                            <td style={style2}>{teamStats[1]["gold"]}</td>
                        </tr>
                        <tr>
                            <td>K-D</td>
                            <td style={style1}>{teamStats[0]["kills"] + "-" + teamStats[0]["deaths"]}</td>
                            <td style={style2}>{teamStats[1]["kills"] + "-" + teamStats[1]["deaths"]}</td>
                        </tr>
                    </tbody>
                </table>

                <br></br>

                <table> 
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>role</td>
                            
                            <td>kills</td>
                            <td>deaths</td>
                            <td>gold</td>
                            <td>name</td>
                            <td>role</td>
                            
                            <td>kills</td>
                            <td>deaths</td> 
                            <td>gold</td>
                            <td>gold diff</td>
                        </tr>
                        {
                        [0, 1, 2, 3, 4].map( (i) => (
                            <tr key={i}>
                                
                                <td>team1player{i}</td>
                                <td>{roleEnum[i]}</td>
                                
                                <td>{playerStats[i]["kills"]}</td>
                                <td>{playerStats[i]["deaths"]}</td>
                                <td>{playerStats[i]["gold"]}</td>

                                <td>team2player{i}</td>
                                <td>{roleEnum[i]}</td>
                                
                                <td>{playerStats[i+5]["kills"]}</td>
                                <td>{playerStats[i+5]["deaths"]}</td>
                                <td>{playerStats[i+5]["gold"]}</td>
                                <td>{playerStats[i]["gold"] - playerStats[i+5]["gold"]}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

                <br></br>

                { <table> 
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>role</td>
                            <td>agg</td>
                            <td>cons</td>
                            <td>lane</td>
                            <td>econ</td>
                            <td>name</td>
                            <td>role</td>
                            <td>agg</td>
                            <td>cons</td>
                            <td>lane</td>
                            <td>econ</td>
                        </tr>
                        {
                        [0, 1, 2, 3, 4].map( (i) => (
                            <tr key={"OVR"+i}>
                                
                                <td>team1player{i}</td>
                                <td>{roleEnum[i]}</td>
                                <td>{player1OVR[i].getAggression()}</td>
                                <td>{player1OVR[i].getConsistency()}</td>
                                <td>{player1OVR[i].getLaning()}</td>
                                <td>{player1OVR[i].getEconomy()}</td>

                                <td>team2player{i}</td>
                                <td>{roleEnum[i]}</td>
                                <td>{player2OVR[i].getAggression()}</td>
                                <td>{player2OVR[i].getConsistency()}</td>
                                <td>{player2OVR[i].getLaning()}</td>
                                <td>{player2OVR[i].getEconomy()}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table> }
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
