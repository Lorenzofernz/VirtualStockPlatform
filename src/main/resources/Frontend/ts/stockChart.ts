import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface StockData {
    dates: string[];
    prices: number[];
}

async function fetchTeslaStockData(): Promise<StockData> {
    try {
        const response = await fetch('/api/tesla-stock'); // Your API endpoint
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching stock data:", error);
        return { dates: [], prices: [] };
    }
}

async function createChart() {
    const stockData = await fetchTeslaStockData();

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    if (ctx && stockData.dates.length > 0) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: stockData.dates,
                datasets: [{
                    label: 'Tesla Stock Price',
                    data: stockData.prices,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day'
                        }
                    },
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }
}

// Call the createChart function on page load
createChart();
