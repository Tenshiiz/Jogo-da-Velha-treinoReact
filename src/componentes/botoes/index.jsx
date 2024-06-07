import { useState } from "react";
import "./style.css"

function Botoes() {
    const [game, setGame] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);


    function Player(value) {
        const newTable = [...game];
        if (newTable[value]) return;
        newTable[value] = isX ? "X" : "O";
        setIsX(!isX);
        setGame(newTable);
    }

    return (
        <>
            {game.map((value, index) => {
                return <button onClick={() => { Player(index) }} key={index}>{value}</button>
                
            })}
            <button className="reset" onClick={(() => setGame(Array(9).fill(null)))}>Reset</button>
        </>
    )
}


export default Botoes;