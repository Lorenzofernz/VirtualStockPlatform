"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chart_js_1 = require("chart.js");
chart_js_1.Chart.register(...chart_js_1.registerables);
function fetchTeslaStockData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('/api/tesla-stock'); // Your API endpoint
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Error fetching stock data:", error);
            return { dates: [], prices: [] };
        }
    });
}
function createChart() {
    return __awaiter(this, void 0, void 0, function* () {
        const stockData = yield fetchTeslaStockData();
        const ctx = document.getElementById('myChart');
        if (ctx && stockData.dates.length > 0) {
            new chart_js_1.Chart(ctx, {
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
    });
}
// Call the createChart function on page load
createChart();
