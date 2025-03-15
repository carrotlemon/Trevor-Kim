import React, { useRef, useEffect } from "react";

const Flow = ({ data }) => {
    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Set canvas size
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // init vars
        const BOARD_SIZE = 8;
        const COLOR_COUNT = 8;
        let board = [BOARD_SIZE][BOARD_SIZE];
        let colors = [COLOR_COUNT];
        for(let i = 0; i < COLOR_COUNT; ++i) {
            const rgbColor = hsvToRgb(color / (COLOR_COUNT+COLOR_OFFSET), 1.0, 1.0);
            colors[i] = rgbColor;
        }

        // make completed board

        // place 2 random (same color) on edge
        // connect them along the wall
        // place 2 more on new edge
        // connect them along wall
        // etc

        // how do i force number of colors? 
        
        // what if theres one space at end? can there be?

        for(let i = 0; i < COLOR_COUNT; ++i) {
            // detect new edge squares
            // find two points
            // find shortest path along edge
            // 
        }

        // uncomplete board

        
        // 

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            

            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return <canvas ref={canvasRef} className="w-[80vw] h-[80vh] border" />;
};

export default Flow;

const drawCircle = (ctx, circleX, circleY, radius) => {
    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

const drawLine = (ctx, x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

function hsvToRgb(h, s, v) {
    let r, g, b;
    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
  
    switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
    }
  
    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
  }