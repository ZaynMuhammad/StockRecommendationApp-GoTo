import { STOCK_SYMBOLS } from "../../utils/constants"
import List from "../List/List"

const Dropdown = ({ setSelectedStock }) => {
    return (
        <>
            <h2>Select A Stock:</h2>
            <select name="stocks" id="stocks" onChange={e => setSelectedStock(e.target.value)}>
                {STOCK_SYMBOLS.map((stockSymbol, idx) => (
                    <List key={idx} stockSymbol={stockSymbol} setSelectedStock={setSelectedStock} />
                ))}
            </select>  
        </>
    )
}

export default Dropdown