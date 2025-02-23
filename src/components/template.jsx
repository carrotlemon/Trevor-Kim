import React, { useRef, useEffect } from "react";

const NAMEOFCOMPONENT = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // let circleX = 50;
    // let circleY = canvas.height / 2;
    // let counter = 0;
    // let phase = 0;
    // let direction = 1;
    // let radius = 50;
    // let numRays = 800;
    // let lightX = canvas.width / 2;
    // let lightY = canvas.height / 2;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // // Draw Rays
      // for (let theta = 0; theta < 2 * Math.PI; theta += 2 * Math.PI / numRays) {
      //   let otherPoint = getRayCollision(lightX, lightY, theta, circleX, circleY, radius, canvas.width, canvas.height);
      //   //console.log("light: %d, %d other: %d, %d", lightX, lightY, otherPoint[0], otherPoint[1]);
      //   drawLine(ctx, lightX, lightY, otherPoint[0], otherPoint[1]);
      // }

      // // Draw the moving circle
      // drawCircle(ctx, circleX, circleY, radius);

      // // Update position
      // circleX += direction * 10;
      // counter += 1;
      // circleY = canvas.height/2 + 200*Math.cos(0.05*counter)*Math.sin(0.01*circleX);
      // if (circleX > canvas.width - radius || circleX < radius) {
      //   direction *= -1;
      // }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="w-[80vw] h-[80vh] border" />;
};