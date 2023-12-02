import React, { useState } from 'react'
import Square from './Square'

const Board = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const logics = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

        for(const logic of logics){
            const [a,b,c] = logic;
            if(state[a]!==null && state[a]===state[b] && state[a] === state[c]){
                return state[a];
            }
        }

        if(state.every(val => val !== null)){
            return "draw"
        }
        return false;
    }

    const isWinner = checkWinner()
    console.log(isWinner)

    const handleClick = (index) => {
        console.log("state re-rendered")
        const newState = [...state];
        newState[index] = (isXTurn ? "X" : "O")
        setState(newState);
        setIsXTurn((prev) => !prev);
    }

    const resetGame = () => {
        setState(Array(9).fill(null));
    }
  return (
    <div className='board-comp'>
        <h2> tic-tac-toe (Our Childhood Game)</h2>
        {
            isWinner ? (
                <>
                    {isWinner === "draw"? (<h3>Match Draw!</h3>) : (<h3>{isWinner} Won the Match</h3>)}
                    <button onClick={resetGame}>Play Again</button>
                </>
            ) : (
                <>
                    <div className='board'>
                        <div className='board-row'>
                            <Square onClick = {()=> handleClick(0)} value={state[0]} />
                            <Square onClick = {()=> handleClick(1)} value={state[1]} />
                            <Square onClick = {()=> handleClick(2)} value={state[2]} />
                        </div>
                        <div className='board-row'>
                            <Square onClick = {()=> handleClick(3)} value={state[3]} />
                            <Square onClick = {()=> handleClick(4)} value={state[4]} />
                            <Square onClick = {()=> handleClick(5)} value={state[5]} />
                        </div>
                        <div className='board-row'>
                            <Square onClick = {()=> handleClick(6)} value={state[6]} />
                            <Square onClick = {()=> handleClick(7)} value={state[7]} />
                            <Square onClick = {()=> handleClick(8)} value={state[8]} />
                        </div>
                    </div>
                </>
            )
        }
    </div>
  )
}

export default Board