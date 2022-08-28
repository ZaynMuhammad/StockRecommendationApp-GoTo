import getDateXDaysAgo from "./getDateXDaysAgo"
import getDatesInRange from "./getDatesInRange"
import { STOCK_SYMBOLS } from "./constants"

const getStockStats = (selectedStock, stockData, startDate) => {    
    let sumOfPriceForSelectedStock = 0
    let sumOfPostsOnSocialMedia = 0
    
    for (const data of stockData) {
        if (data.symbol === selectedStock) {
            sumOfPriceForSelectedStock += data.price
            sumOfPostsOnSocialMedia += data.socialMedia.linkedIn
            sumOfPostsOnSocialMedia += data.socialMedia.twitter
            sumOfPostsOnSocialMedia += data.socialMedia.facebook
            sumOfPostsOnSocialMedia += data.socialMedia.instagram
        }
    }
    
    const avgPriceForStock = sumOfPriceForSelectedStock / startDate
    return {
        avgPriceForStock,
        sumOfPostsOnSocialMedia
    }
}

const recommendationAlgo = (selectedStock, stockData, startDate) => {
    if (!STOCK_SYMBOLS.includes(selectedStock) || selectedStock === undefined || stockData.length === 0)
        return new Map()

    if (startDate === null || startDate === undefined) 
        startDate = getDateXDaysAgo(10)
    
    const endDate = new Date() - 1
    const numberOfDays = getDatesInRange(startDate, endDate)

    const { avgPriceForStock, sumOfPostsOnSocialMedia } = getStockStats(selectedStock, stockData, numberOfDays.length)
    const reccomendationMap = new Map()
    
    for (const data of stockData) {
        if (data.symbol === selectedStock) {
            let priceRatio = data.price / avgPriceForStock
            switch (true) {
                case priceRatio <= 0.3 :
                    reccomendationMap.set(data.price, { recommend: 'buy'})
                    break
                case priceRatio <= 0.5:
                    if (sumOfPostsOnSocialMedia > 1500) {
                        reccomendationMap.set(data.price, { recommend: 'buy'})
                    } else {
                        reccomendationMap.set(data.price, { recommend: 'hold'})
                    }
                    break
                case priceRatio <= 1.2:
                    if (sumOfPostsOnSocialMedia < 1000) {
                        reccomendationMap.set(data.price, { recommend: 'hold'})
                    } else {
                        reccomendationMap.set(data.price, { recommend: 'buy'})
                    }
                    break
                default:
                    reccomendationMap.set(data.price, { recommend: 'sell'})
                    break
            }
        }
    }

    return reccomendationMap
}

export default recommendationAlgo