import React from "react"

export default function Box(props){
    
    const handleClick=(id)=>{
        const Boxes=props.squares.map((box)=> box.id===id ? {...box, on:!box.on}:box)
        props.setSquares(Boxes);
    }
    
    const squareElements = props.squares.map(square => (
        <div className="box" key={square.id} onClick={()=> handleClick(square.id)} style={{backgroundColor:square.on?"black":"white"}}></div>
    ))
    return (
        <>
            {squareElements}
        </>
    )
}