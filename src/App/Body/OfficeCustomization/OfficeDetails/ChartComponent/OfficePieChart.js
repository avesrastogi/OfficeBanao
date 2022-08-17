import './OfficePieChart.css'
import * as d3 from "d3";

const OfficePieChart = (element, data) => {
  const colors = ["#05BBD2", "#2070C4", "#EB80F1", "#F5C842", "#37D400"];
  const boxSize = 500;

  d3.select(element).select("svg").remove(); // Remove the old svg
  // Create new svg
  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "70%")
    .attr("width", "70%")
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
    .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

  const arcGenerator = d3.arc().innerRadius(0).outerRadius(250);

  const pieGenerator = d3.pie().value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => colors[i % data.length]);


    // Append text labels
  arcs
  .append("text")
  .attr("text-anchor", "middle")
  .text((d) => `${d.data.value}%`) // label text
  .style("fill", "#fff") // label color
  .style("font-size", "30px") // label size
  .attr("transform", (d) => {
    const [x, y] = arcGenerator.centroid(d);
    return `translate(${x}, ${y})`;
  })
  .style("font-size", 0)
  .transition()
  .duration(700)
  .style("font-size", "26px");
};

export default OfficePieChart;