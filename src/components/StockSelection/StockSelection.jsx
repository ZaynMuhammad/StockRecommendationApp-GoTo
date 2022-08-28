import { useState, useEffect } from "react"
import Dropdown from "../Dropdown/Dropdown"
import DateInput from "../DateInput/DateInput"
import generateStockData  from '../../data/generateStockData'

const StockSelection = ({ stockData, setDate, setSelectedStock }) => {

    return (
        <form>
            <Dropdown
                stockData={stockData}
                setSelectedStock={setSelectedStock}
            />
            <DateInput setDate={setDate} />
        </form>
    )
}

export default StockSelection