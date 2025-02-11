import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const QuickSort = () => {
  const [data, setData] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const initialArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setData(initialArray);
    const sortSteps = [];
    quicksort([...initialArray], 0, initialArray.length - 1, sortSteps);
    setSteps(sortSteps);
  }, []);

  const quicksort = (arr, left, right, steps) => {
    if (left < right) {
      const pivotIndex = partition(arr, left, right, steps);
      quicksort(arr, left, pivotIndex - 1, steps);
      quicksort(arr, pivotIndex + 1, right, steps);
    }
  };

  const partition = (arr, left, right, steps) => {
    const pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push([...arr]); // Push the current array state to steps
        i++;
      }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    steps.push([...arr]);
    return i;
  };

  return (
    <div>
      <h1>Quicksort</h1>
      <SortDisplay data={data} steps={steps} />
    </div>
  );
};

export default QuickSort;

const SortDisplay = ({ data, steps }) => {
    const [currentStep, setCurrentStep] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentStep((prevStep) => {
          const nextStep = prevStep + 1;
          return nextStep < steps.length ? nextStep : prevStep;
        });
      }, 500);
  
      return () => clearInterval(interval);
    }, [steps.length]);
  
    useEffect(() => {
      renderBars(steps[currentStep]);
    }, [currentStep]);
  
    const renderBars = (array) => {
      const svg = d3.select("#quicksort-svg");
      svg.selectAll("*").remove(); // Clear previous bars
  
      svg
        .selectAll("rect")
        .data(array)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 30)
        .attr("y", (d) => 300 - d * 3)
        .attr("width", 25)
        .attr("height", (d) => d * 3)
        .attr("fill", "steelblue");
    };
  
    return <svg id="quicksort-svg" width="600" height="300"></svg>;
  };
  