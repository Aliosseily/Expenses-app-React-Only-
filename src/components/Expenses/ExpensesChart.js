import React from "react";
import Chart from "../Chart/Chart";
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    console.log("props.expenses",props.expenses);
    // get our expense Month
    const expenseMonth = expense.date.getMonth(); // start at 0 index
    console.log("expenseMonth",expenseMonth);
    // increase the value of a given month by the expense amount
    chartDataPoints[expenseMonth].value += expense.amount;
    console.log("expense",expense);

    console.log("chartDataPoints",chartDataPoints);

  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;