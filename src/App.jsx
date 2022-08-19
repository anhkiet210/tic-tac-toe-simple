import { useEffect, useRef, useState } from 'react';
import './build/tailwind.css'
import Board from './component/Board';
import { handleWinner } from './utils/handleWinner';

function App() {
  const isX = useRef(true)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [pointX, setPointX] = useState(0)
  const [pointO, setPointO] = useState(0)

  const winner = handleWinner(board)

  const handleReserGame = () => {
    setBoard(Array(9).fill(null))
  }

  const handleNewGame = () => {
    setBoard(Array(9).fill(null))
    isX.current = true
    setPointO(0)
    setPointX(0)
  }

  const handleClick = (index) => {
    const boardCopy = [...board]
    if (winner || boardCopy[index]) return
    boardCopy[index] = isX.current ? 'X' : 'O'
    setBoard(boardCopy)
    isX.current = !isX.current
    console.log(isX);
  }

  useEffect(() => {
    if (winner === "X") {
      setPointX(prev => prev + 1)
    }
    if (winner === "O") {
      setPointO(prev => prev + 1)
    }
  }, [winner])

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col bg-green-200 ">
      <div className="w-80 h-8 flex mb-5">
        <span className={`w-[50%] relative text-lg font-bold text-blue-500 text-center before:h-[2px] ${isX.current ? 'before:bg-blue-500' : 'before:bg-transparent'} before:w-[100%] before:absolute before:bottom-0 before:left-0`}>X - {pointX} </span>
        <span className={`w-[50%] relative text-lg font-bold text-red-500 text-center before:h-[2px] ${!isX.current ? 'before:bg-red-500' : 'before:bg-transparent'} before:w-[100%] before:absolute before:bottom-0 before:left-0`}>O - {pointO} </span>
      </div>
      <Board cells={board} handleClick={handleClick} />
      {/* {winner && <div className="w-80 my-5 text-center text-xl font-bold text-blue-500">Winner is {winner}</div>} */}
      <div className='w-80 flex justify-around'>
        <button
          className='px-3 py-2 my-5 text-xl font-bold bg-blue-300 rounded-md hover:bg-blue-400 transition-colors'
          onClick={handleReserGame}
          title='Chơi ván mới giữ nguyên số điểm'
        >Ván mới</button>
        <button
          className='px-3 py-2 my-5 text-xl font-bold bg-blue-300 rounded-md hover:bg-blue-400 transition-colors'
          onClick={handleNewGame}
          title='Chơi lại từ đầu với số điểm của 2 bên là 0'
        >Chơi lại</button>
      </div>
    </div>
  );
}

export default App;
