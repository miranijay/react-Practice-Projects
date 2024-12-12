import { useState } from "react"

export default function Randomcolor() {

    const [typeColor, settypeColor] = useState("hex")
    const [color, setcolo] = useState("#000000")

    function handleRandomHexColor () {

        const hex = []

    }

    function handleRandomrgbColor () {

    }


    return (
        <div className="container" style={{
            width:"100vw",
            height: "100vh",
            background: color, 
            }}>
            <button onClick={() => settypeColor('hex')}>Generate Hex Color </button>
            <button onClick={() => settypeColor('rgb')}>Generate RGB Color</button>
            <button onClick={typeColor === 'hex' ? handleRandomHexColor : handleRandomrgbColor}>Generate Random Color</button>
        </div>
    )
}