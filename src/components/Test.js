import React from 'react'
import {scaleLinear} from 'd3-scale'

var x = scaleLinear()
    .domain([10, 130])
    .range([0, 960]);

console.log(x(20), x(130));

const Test = () => {
  return (
    <h1>Test</h1>
  );
};

export default Test;