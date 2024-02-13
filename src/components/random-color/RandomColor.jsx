import React, { useEffect } from "react";
import './styles.css'
import { useState } from "react";

const RandomColor = () => {

    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    const handleGenerateHexColor = () => {
        const randomHexColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        setColor(randomHexColor)
    }

    const handleGenerateRgbColor = () => {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'rgb') {
            return handleGenerateRgbColor()
        } else {
            return handleGenerateHexColor()
        }
    },[typeOfColor])

    return (
        <div 
            style = {{
                background: color
            }}
            className="container"
        >
            <div className="buttonBox">
                <button 
                    className="colorButton" 
                    onClick={()=>setTypeOfColor('hex')}
                >
                    Create Hex Color
                </button>
                <button 
                    className="colorButton" 
                    onClick={()=>setTypeOfColor('rgb')}
                    >
                        Create RGB Color
                </button>
                <button 
                    className="colorButton"
                    onClick={
                        typeOfColor === 'hex' ? 
                        handleGenerateHexColor :
                        handleGenerateRgbColor
                    }>
                    Generate Color
                </button>
            </div>
            <div className="colorBox">
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default RandomColor