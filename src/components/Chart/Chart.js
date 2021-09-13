import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    //return array of only datapoint values
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    console.log("dataPointValues",dataPointValues)
    //Math.max(1,2,3) so we use spread operator to get the valus inside array
    const totalMaximum = Math.max(...dataPointValues);
    console.log("totalMaximum",totalMaximum)


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
