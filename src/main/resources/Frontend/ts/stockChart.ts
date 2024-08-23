import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// Your chart setup code here
const ctx = document.getElementById('myChart') as HTMLCanvasElement;

const myChart = new Chart(ctx, {
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
