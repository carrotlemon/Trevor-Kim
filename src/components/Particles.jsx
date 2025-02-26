import { Point, Rectangle, Quadtree } from '../js/Quadtree.jsx'
import React, { useRef, useEffect } from "react";

const Particles = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Create Particles
    const numParticles = 4000;
    let qt = new Quadtree(new Rectangle(0, 0, canvas.width, canvas.height), 5);
    let theta = 0;
    let r = 0;
    for(let i = 0; i < numParticles; ++i) {
      // qt.insert(new Point(canvas.width*Math.random(), canvas.height*Math.random(), null, "yellow"));
      theta = 2*Math.PI*Math.random();
      r = 250*Math.random();
      console.log(canvas.width/2+r*Math.cos(theta) + " " + canvas.height/2+r*Math.sin(theta));
      qt.insert(new Point(canvas.width/2+r*Math.cos(theta), canvas.height/2+r*Math.sin(theta), null, "yellow"));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw all points and boundary of quadtree
      qt.draw(ctx, true)

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

export default Particles;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}