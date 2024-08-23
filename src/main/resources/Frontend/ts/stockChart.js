"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chart_js_1 = require("chart.js");
chart_js_1.Chart.register(...chart_js_1.registerables);
// Your chart setup code here
const ctx = document.getElementById('myChart');
const myChart = new chart_js_1.Chart(ctx, {
    type: 'line', // or bar, pie, etc.
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
                label: 'Tesla Stock Prices',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
    },
});
