
import { useRef, useEffect } from 'react'

export const WebsocketConnection = () => {
    const connection = useRef(null)

    useEffect(() => {

        let connect = () => {
            let ws = new WebSocket("wss://localhost:8080")
            console.log("Connected")
            ws.addEventListener("open", (event) => {
                ws.send("Connection established") 
            })

            ws.addEventListener("message", (event) => {
                console.log("Message from server ", event.data)
            })

            ws.onerror = (e) => {
                console.log(e)
                ws.close()
            }

            //ws.send("close")

            connection.current = ws

            ws.onclose = (e) => {
                console.log("socket connection closed, reattempting in one second")
                setTimeout(() => {
                    connect()
                }, 500)
            }
        }
        connect()
        
        return () => connection.close()
        }, [])

    return <div/>
}