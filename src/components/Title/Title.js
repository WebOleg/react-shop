import React, { useState } from 'react'
import './Title.scss'

const Title = (props) => {
    console.log(props)
    const [str, setStr] = useState('Hello World')
    const [color, setColor] = useState('red')
    const toggleColor = () => {
        if (color === 'green') {
            setColor('red')
        } else {
            setColor('green')
        }
    }
    const [positions, setPositions] = useState('none')
    const togglePositions = () => {
        if (positions === 'none') {
            setPositions('visible')
        } else {
            setPositions('none')
        }
    }
    return (
        <>
            <h2>
                {props.text} {props.title}
            </h2>
            <p className={color}>Text:{str}</p>
            <p className={positions}>Text:{str}</p>
            <div>
                <button onClick={togglePositions}>Show Text</button>
            </div>
            <div>
                <button onClick={() => setStr('Hello Ukrain')}>
                    Change Text
                </button>
            </div>
            <div>
                <button onClick={toggleColor}>Change Color</button>
            </div>

            <a target={props.target} href={`${props.url}`}>
                {props.link}
            </a>
        </>
    )
}

export default Title
