// Chart.js
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Chart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 200;
    
    // Clear any previous elements
    svg.selectAll("*").remove();

    // Set up scaling for the data
    const xScale = d3
      .scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, width])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // Draw the bars
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d))
      .attr("fill", "teal");
  }, [data]);

  return <svg ref={svgRef} width="500" height="200"></svg>;
};

export default Chart;
