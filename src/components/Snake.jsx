import React, { useEffect, useRef, useState } from "react";

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);

  const gridSize = 20;
  const canvasSize = 400;

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    document.addEventListener("keydown", handleKeyPress);
    const gameInterval = setInterval(moveSnake, 100);
    drawGame(ctx);
    return () => {
      clearInterval(gameInterval);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [snake]);

  const drawGame = (ctx) => {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = "green";
    snake.forEach((segment) => ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize));
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
  };

  const moveSnake = () => {
    if (gameOver) return;
    const newSnake = [...snake];
    let head = { ...newSnake[0] };

    switch (direction) {
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "RIGHT":
        head.x += 1;
        break;
      default:
        break;
    }

    if (checkCollision(head)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      setFood({ x: Math.floor(Math.random() * (canvasSize / gridSize)), y: Math.floor(Math.random() * (canvasSize / gridSize)) });
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const checkCollision = (head) => {
    return (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= canvasSize / gridSize ||
      head.y >= canvasSize / gridSize ||
      snake.some((segment) => segment.x === head.x && segment.y === head.y)
    );
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case "ArrowUp":
        if (direction !== "DOWN") setDirection("UP");
        break;
      case "ArrowDown":
        if (direction !== "UP") setDirection("DOWN");
        break;
      case "ArrowLeft":
        if (direction !== "RIGHT") setDirection("LEFT");
        break;
      case "ArrowRight":
        if (direction !== "LEFT") setDirection("RIGHT");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Snake Game</h1>
      {gameOver && <h2>Game Over!</h2>}
      <canvas ref={canvasRef} width={canvasSize} height={canvasSize} style={{ border: "1px solid black" }}></canvas>
    </div>
  );
};

export default SnakeGame;
