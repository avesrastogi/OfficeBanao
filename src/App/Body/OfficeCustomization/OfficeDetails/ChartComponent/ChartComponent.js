import React, { useEffect, useRef } from "react";
import OfficePieChart from "./OfficePieChart";
import './ChartComponent.css';

const DonutChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      OfficePieChart(ref.current, data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <div className="mt-5 pt-5">
      <div className="graph" ref={ref} />
    </div>
  );
};

export default DonutChart;