import React, { useState } from "react";
import Chart from "../components/Chart";
import QuickSort from "../components/QuickSort";

export default function Sort() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);

  return (
      <>
        <main>
          <h1>Sort</h1>
        </main>
      </>
  );
}
