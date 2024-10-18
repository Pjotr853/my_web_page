import React, { useRef, useEffect, useState } from 'react';
import './Game.css';

function Game() {

    const canvasRef = useRef(null);

    const widthRectangel = 30;
    const heightRectangel = 30;

    const canvasWidht = 600;
    const canvasHeight = 600;

    const tileCountWidth = canvasWidht / widthRectangel;
    const tileCounthHeigh = canvasHeight / heightRectangel;

    const [snakePositionX, setSnakePositionX] = useState(4 * widthRectangel);
    const [snakePositionY, setSnakePositionY] = useState(canvasHeight / 2);
    const [directX, setDirectX] = useState(1);
    const [directY, setDirectY] = useState(0);
    const speed = 100;
    const [snakeLenght, setSnakeLenght] = useState(3);
    const [tail, setTail] = useState([
        { x: 4 * widthRectangel - widthRectangel, y: canvasHeight / 2 }
    ]);

    const [isPress, setIsPress] = useState(false);

    const [foodX, setFoodX] = useState(canvasWidht - 2 * widthRectangel);
    const [foodY, setFoodY] = useState(canvasHeight / 2);

    const [score, setScore] = useState(0);

    function drawRectangel(ctx, x, y, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    function drawPlayGround(ctx) {
        drawRectangel(ctx, 0, 0, canvasWidht, canvasHeight, "silver");

        for (let i = 0; i < tileCountWidth; i++) {
            for (let j = 0; j < tileCounthHeigh; j++) {
                drawRectangel(ctx, widthRectangel * i, heightRectangel * j, widthRectangel - 1, heightRectangel - 1, "white");
            }
        }

        // food
        drawRectangel(ctx, foodX, foodY, widthRectangel, heightRectangel, "green");
    }

    function animation(ctx) {
        drawPlayGround(ctx);
        drawRectangel(ctx, snakePositionX, snakePositionY, widthRectangel, heightRectangel, "red");

        tail.forEach(segment => {
            drawRectangel(ctx, segment.x, segment.y, widthRectangel, heightRectangel, "blue");
        });

        
    }

    function handleKeyDown(e) {
        if (!isPress) {
            setIsPress(true);
            if ((e.key === 'w' || e.key === 'ArrowUp') && directY !== 1) {
                setDirectX(0);
                setDirectY(-1);
            } else if ((e.key === 's' || e.key === 'ArrowDown') && directY !== -1) {
                setDirectX(0);
                setDirectY(1);
            } else if ((e.key === 'a' || e.key === 'ArrowLeft') && directX !== 1) {
                setDirectX(-1);
                setDirectY(0);
            } else if ((e.key === 'd' || e.key === 'ArrowRight') && directX !== -1) {
                setDirectX(1);
                setDirectY(0);
            }
        }
    }

    function moveSnake() {
        setSnakePositionX(prevX => {
            const newX = prevX + directX * widthRectangel;
            if (newX < 0) {
                return canvasWidht - widthRectangel;
            }
            if (newX >= canvasWidht) {
                return 0;
            }
            return newX;
        });

        setSnakePositionY(prevY => {
            const newY = prevY + directY * heightRectangel;
            if (newY < 0) {
                return canvasHeight - heightRectangel;
            }
            if (newY >= canvasHeight) {
                return 0;
            }
            return newY;
        });
        snakeTail();
    }

    function snakeTail() {
        
        setTail(prevTail => {
            const newTail = [...prevTail, { x: snakePositionX, y: snakePositionY }];
            return newTail.slice(-snakeLenght);
        });
    }

    function eatFood(){

        if(snakePositionX==foodX && snakePositionY==foodY){
            setSnakeLenght(snakeLenght+1);
            setScore(score+1);
            generateFood();
        }
    }
    
    function generateFood(){
        const newFoodX = Math.floor(Math.random() * 16) * widthRectangel;
        const newFoodY = Math.floor(Math.random() * 16) * heightRectangel;
        
        const isCollidingWithSnake = tail.some(segment => segment.x === newFoodX && segment.y === newFoodY);
        
        if ((newFoodX === snakePositionX && newFoodY === snakePositionY)||isCollidingWithSnake) {
            generateFood(); 
        } else {
            setFoodX(newFoodX);
            setFoodY(newFoodY);
        }

    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = canvasWidht;
        canvas.height = canvasHeight;

        const interval = setInterval(() => {
            moveSnake();
            eatFood();
           // snakeTail();
        }, speed);

        window.addEventListener('keydown', handleKeyDown);
        animation(ctx);

        return () => {
            clearInterval(interval);
            window.removeEventListener('keydown', handleKeyDown);
            setIsPress(false);
        };
    }, [directX, directY, snakePositionX, snakePositionY]);

    return (
        <div>
            <h1>Hello Game</h1> <h2>Score {score}</h2>
            <canvas ref={canvasRef} className='borderCanvas' />
        </div>
    );
}

export default Game;
