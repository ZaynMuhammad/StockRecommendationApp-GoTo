import { useState, useEffect } from "react"
import Dropdown from "../Dropdown/Dropdown"
import DateInput from "../DateInput/DateInput"

import './StockSelection.scss'
    
const StockSelection = ({ stockData, setDate, setSelectedStock }) => {

    return (
        <form className="stockSelecetionContainer">
            <Dropdown
                stockData={stockData}
                setSelectedStock={setSelectedStock}
            />
            <DateInput setDate={setDate} />
        </form>
    )
}

export default StockSelection