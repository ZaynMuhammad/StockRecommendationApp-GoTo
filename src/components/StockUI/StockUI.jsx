import { useState, useEffect } from "react"
import StockSelection from "../StockSelection/StockSelection"
import generateStockData from "../../data/generateStockData"
import Graph from "../Graph/Graph"

const StockUI = () => {
    const [stockData, setStockData] = useState([])
    const [date, setDate] = useState(null)
    const [selectedStock, setSelectedStock] = useState('AMZN')

    useEffect(() => {
      setStockData(generateStockData(date))
    }, [date])

    return (
        <>
            <StockSelection
                stockData={stockData}
                setDate={setDate}
                setSelectedStock={setSelectedStock}

            />
            <Graph 
                date={date} 
                stockData={stockData}
                selectedStock={selectedStock}
            />
        </>
    )
}

export default StockUI