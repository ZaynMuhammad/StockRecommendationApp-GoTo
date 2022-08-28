import { STOCK_SYMBOLS } from "../../utils/constants"
import List from "../List/List"
import  "./Dropdown.scss"

const Dropdown = ({ setSelectedStock }) => {
    return (
        <div className="dropdownContainer">
            <h2><label htmlFor="stocks">Select A Stock</label></h2>
            <select name="stocks" id="stocks" onChange={e => setSelectedStock(e.target.value)}>
                {STOCK_SYMBOLS.map((stockSymbol, idx) => (
                    <List key={idx} stockSymbol={stockSymbol} setSelectedStock={setSelectedStock} />
                ))}
            </select>  
        </div>
    )
}

export default Dropdown