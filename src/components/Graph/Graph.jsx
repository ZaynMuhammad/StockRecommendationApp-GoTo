import { useState, useEffect } from 'react';
import recommendationAlgo from '../../utils/recommendationAlgorithm';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Graph = ({ stockData, selectedStock, date }) => {
    const [stockRecommendation, setStockRecommendation] = useState([])

    useEffect(() => {
        setStockRecommendation(recommendationAlgo(selectedStock, stockData, date))
    }, [selectedStock, stockData, date])

    const labels = []
    const dataPoints = []
    if (stockData) {
        let xCoord = 0
        for (const data of stockData)
            if (data.symbol === selectedStock) {
                labels.push(`${data.symbol} ${data.date}`)
                let recommendation = stockRecommendation.get(data.price)
                dataPoints.push({
                    x: xCoord,
                    y: data.price,
                    linkedIn: data.socialMedia.linkedIn,
                    twitter: data.socialMedia.twitter,
                    facebook: data.socialMedia.facebook,
                    instagram: data.socialMedia.instagram,
                    recommendation: recommendation.recommend
                })
                xCoord++
            }
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Price of ${selectedStock} stocks`,
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        let roundedPrice = Math.round(context.raw.y * 100) / 100
                        return `price: ${roundedPrice}$ linkedIn: ${context.raw.linkedIn} twitter: ${context.raw.twitter} facebook: ${context.raw.facebook} instagram: ${context.raw.instagram} recommend: ${context.raw.recommendation}`
                    }
                }
            }
        },
    };
    
    const data = {
        labels,
        datasets: [
            {
                label: 'Price Of Stock',
                data: dataPoints,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }
        ]
    }

    return (
        <Line options={options} data={data} />
    )
}

export default Graph