import recommendationAlgo from '../../utils/recommendationAlgorithm'
import generateStockData from '../../data/generateStockData'
import getDateXDaysAgo from '../../utils/getDateXDaysAgo'


describe("Test stock reccommend algorithm", () => {

    it('should return an empty map when no params are passed', () => {
        const result = recommendationAlgo()
        expect(result.size).toBe(0)
    })

    it('should return an empty map when an invalid stock is entered', () => {
        const stockData = generateStockData()
        const result = recommendationAlgo('fakestock', stockData)
        expect(result.size).toBe(0)
    })
    
    it('should return a map of size 10', () => {
        const stockData = generateStockData()
        const result = recommendationAlgo('AMZN', stockData)
        expect(result.size).toBe(10)
    })

    it('should return a map of size 20', () => {
        const stockData = generateStockData(getDateXDaysAgo(20))
        const result = recommendationAlgo('AMZN', stockData, getDateXDaysAgo(20))
        expect(result.size).toBe(20)
    })

})