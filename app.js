const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
function generateChart() {
  const info = {
    labels: data.map((chart) => chart.day),
    datasets: [
      {
        data: data.map((chart) => chart.amount),
        backgroundColor: ["hsl(10, 79%, 65%)"],
        borderRadius: 5,
        hoverBackgroundColor: "hsl(10, 79%, 75%)",
      },
    ],
  };
  const titleTooltip = (e) => `$${e[0].formattedValue}`;
  const labelTooltip = (e) => "";
  const options = {
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        yAlign: "bottom",
        displayColors: false,
        callbacks: {
          title: titleTooltip,
          label: labelTooltip,
        },
      },
    },
  };
  const config = {
    type: "bar",
    data: info,
    options,
  };
  const myChart = new Chart(document.getElementById("myChart"), config);
}
generateChart();
