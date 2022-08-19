import '../../build/tailwind.css'

function Cell(props) {
    const color = props.value === 'X' ? 'blue' : 'red'
    return ( 
        <>
            <div    
                className={`flex justify-center items-center shadow-lg font-bold text-5xl text-${color}-500 cursor-pointer select-none transition-all`}
                onClick={props.handleClick}
            >
                {props.value}
            </div>
        </>
     )
}

export default Cell;