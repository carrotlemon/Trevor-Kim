import React, { useState } from "react";
import Rays from '../components/Rays';

export default function JS() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);

  return (
      <> 
          <h1>JS is fun!</h1>
          <p>ssss</p>
          <Rays />
      </>
  );
}
