import { useState } from "react";
import "./style.css"
import Box from "../Box";
import TextoVitoria from "../TextoVitoria"


function Botoes() {
    const [game, setGame] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [winner, setWinner] = useState(null)
    const victory = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let entÉ = isX ? "X" : "O"

    function vencedor(value) {
        victory.forEach((valor) => {
            const [a, b, c] = valor
            if (value[a] && value[a] === value[b] && value[a] === value[c]) {
                setWinner(`jogo Finalizado! o Vencedor foi ${entÉ}`)
            }
        })
    }
    function Player(value) {
        const newTable = [...game];
        if (newTable[value] || winner) return;
        newTable[value] = isX ? "X" : "O";
        setIsX(!isX);
        setGame(newTable);
        vencedor(newTable);
    }
    function resetar() {
        setGame(Array(9).fill(null))
        setWinner(null);
    }

    return (
        <>
            <Box>
                {game.map((value, index) => {
                    return <button onClick={() => { Player(index) }} key={index}>{value}</button>
                })}
            </Box>
            <button className="reset" onClick={(() => resetar())}>Reset</button>
            <TextoVitoria>{winner}</TextoVitoria>
        </>
    )
}


export default Botoes;