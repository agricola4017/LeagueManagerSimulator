import Footer from '../Footer'
import { roleEnum } from '../../data/Enums'

const TestSimulatePage = () => {

    let playerStats = window.playerStats
    let teamStats = window.teamStats

    let style1 = teamStats[0]["win"] ? {color:"green"} : {}
    let style2 = teamStats[1]["win"] ? {color:"green"} : {}

    return (
        <div className ='container'>
            <h1> Game Log </h1>
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
                        <td>gold</td>
                        <td>kills</td>
                        <td>deaths</td>
                        <td>name</td>
                        <td>role</td>
                        <td>gold</td>
                        <td>kills</td>
                        <td>deaths</td> 
                    </tr>
                    {
                    [0, 1, 2, 3, 4].map( (i) => (
                        <tr key={i}>
                            
                            <td>team1player{i}</td>
                            <td>{roleEnum[i]}</td>
                            <td>{playerStats[i]["gold"]}</td>
                            <td>{playerStats[i]["kills"]}</td>
                            <td>{playerStats[i]["deaths"]}</td>

                            <td>team2player{i}</td>
                            <td>{roleEnum[i]}</td>
                            <td>{playerStats[i+5]["gold"]}</td>
                            <td>{playerStats[i+5]["kills"]}</td>
                            <td>{playerStats[i+5]["deaths"]}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <Footer/>
        </div>
    )
}

export default TestSimulatePage