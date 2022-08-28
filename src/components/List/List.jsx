
const List = ({ stockSymbol }) => {
    return (
        <option name={`${stockSymbol}`}>
            {stockSymbol}
        </option>
    )
}

export default List