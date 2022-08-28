import { STOCK_SYMBOLS } from "../utils/constants"
import getDatesInRange from '../utils/getDatesInRange'
import getDateXDaysAgo from "../utils/getDateXDaysAgo"

const generateStockData = (startDate) => {
    const stockData = {}
    stockData.array = []
    const MAX_PRICE = 100.00
    const MAX_FOLLOWER_COUNT = 100000
    const genRandomNumSocialMediaCount = () => Math.floor(Math.random() * MAX_FOLLOWER_COUNT) 
    const endDate = new Date() - 1
    
    console.log('start', startDate)

    if (startDate === undefined || startDate === null)
        startDate = getDateXDaysAgo(10)
            
    const dates = getDatesInRange(startDate, endDate)

    // Remove time from date
    for (let i = 0; i < dates.length; i++)
        dates[i] = dates[i].toLocaleDateString()
    
    // Bad time complexity O(n^2) :(
    for (const stock of STOCK_SYMBOLS) {
        let dayCount = 0
        while (dayCount < dates.length) {
            let randomNumPrice = Math.random() * MAX_PRICE

            const obj = {
                symbol: stock,
                price: randomNumPrice,
                date: dates[dayCount],
                socialMedia: {
                    linkedIn: genRandomNumSocialMediaCount(),
                    twitter: genRandomNumSocialMediaCount(),
                    facebook: genRandomNumSocialMediaCount(),
                    instagram: genRandomNumSocialMediaCount(),
                }
            }
            stockData.array.push(obj)
            dayCount++
        }
    }

    return stockData.array
}

export default generateStockData