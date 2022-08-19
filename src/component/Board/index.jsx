import Cell from "../Cell";
import '../../build/tailwind.css'

function Board({cells, handleClick}) {
    return ( 
        <>
            <div className="w-80 h-80 gap-2 grid-cols-3 grid-rows-3 grid">
            {
                cells.map((item, index) => (
                    <Cell 
                        key={index}
                        value={item}
                        handleClick={() => handleClick(index)}
                    />
                ))
            }
            </div>
        </>
     );
}

export default Board;