import React, { useRef, useEffect, useState } from 'react';

const DrivingSimulator = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [carPosition, setCarPosition] = useState({ x: 400, y: 300 });
  const [carRotation, setCarRotation] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [isBraking, setIsBraking] = useState(false);

  const carWidth = 60;
  const carHeight = 30;
  const maxSpeed = 5;
  const acceleration = 0.1;
  const brakeDeceleration = 0.2;
  const steeringSpeed = 5;

  const moveCar = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        setCarRotation((prevRotation) => prevRotation - steeringSpeed); // Turn left
        break;
      case 'ArrowRight':
        setCarRotation((prevRotation) => prevRotation + steeringSpeed); // Turn right
        break;
      case 'ArrowUp':
        setSpeed((prevSpeed) => Math.min(prevSpeed + acceleration, maxSpeed)); // Accelerate
        break;
      case 'ArrowDown':
        setSpeed((prevSpeed) => Math.max(prevSpeed - acceleration, 0)); // Decelerate
        break;
      case ' ':
        setIsBraking(true); // Brake
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === ' ') {
      setIsBraking(false); // Stop braking when spacebar is released
    }
  };

  const updateCarPosition = () => {
    const angle = (carRotation * Math.PI) / 180;
    const moveSpeed = isBraking ? Math.max(speed - brakeDeceleration, 0) : speed;
    setCarPosition((prevPosition) => {
      const newX = prevPosition.x + Math.cos(angle) * moveSpeed;
      const newY = prevPosition.y + Math.sin(angle) * moveSpeed;
      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => moveCar(e);
    const handleKeyUpEvent = (e: KeyboardEvent) => handleKeyUp(e);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUpEvent);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUpEvent);
    };
  }, [carRotation, speed]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateCarPosition();
    }, 16); // 60 FPS

    return () => clearInterval(interval);
  }, [carRotation, speed, isBraking]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the road background
        ctx.fillStyle = '#87CEEB'; // Sky blue background
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw road
        ctx.fillStyle = '#808080'; // Gray road
        ctx.fillRect(0, canvas.height / 2 - 100, canvas.width, 200); // Road lane

        // Draw the dashed lines in the middle of the road
        ctx.setLineDash([20, 20]);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#fff'; // White dashed lines
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();

        // Draw the car
        ctx.save();
        ctx.translate(carPosition.x, carPosition.y);
        ctx.rotate((carRotation * Math.PI) / 180);
        ctx.fillStyle = '#FF5733'; // Car color
        ctx.fillRect(-carWidth / 2, -carHeight / 2, carWidth, carHeight); // Car shape
        ctx.restore();
      }
    }
  }, [carPosition, carRotation, speed]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#000' }}>Driving Simulator</h1>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: '1px solid black', backgroundColor: '#fff' }}
      />
      <div style={{ color: '#000', textAlign: 'center' }}>
        <p>Speed: {speed.toFixed(1)} units</p>
        <p>Rotation: {carRotation}°</p>
        <p>Use Arrow Keys to Drive: Up for acceleration, Down for deceleration, Left/Right for steering</p>
        <p>Press Space to Brake</p>
      </div>
    </div>
  );
};

export default DrivingSimulator;
