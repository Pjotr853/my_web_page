import React, { useRef, useEffect, useState } from 'react';
import './Game.css';

function Game(){

    const canvasRef = useRef(null);

    const widthRectangel = 30;
    const heightRectangel = 30;

    const canvasWidht = 600;
    const canvasHeight = 600;

    const tileCountWidth = canvasWidht / widthRectangel;
    const tileCounthHeigh = canvasHeight / heightRectangel;

    const [snakePositionX, setSnakePositionX] = useState(4*widthRectangel);
    const [snakePositionY, setSnakePositionY] = useState(canvasHeight/2);
    const [directX, setDirectX] = useState(1); 
    const [directY, setDirectY] = useState(0);
    const speed = 100;

    const [isPress, setIsPress] = useState(false);
   // const [isIntervalRunning, setIsIntervalRunning] = useState(false);

   const [foodX, setFoodX] =useState(canvasWidht-2*widthRectangel);
   const [foodY, setFoodY] =useState(canvasHeight/2);
    

    function drawRectangel(ctx, x, y, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);  
    }

    function drawPlayGround(ctx){
        drawRectangel(ctx, 0, 0, canvasWidht, canvasHeight, "silver");

        for(let i = 0; i < tileCountWidth; i++){
            for(let j = 0; j < tileCounthHeigh; j++){
                drawRectangel(ctx, widthRectangel * i, heightRectangel * j, widthRectangel - 1, heightRectangel - 1, "white");
            }
        }

        //food
        drawRectangel(ctx,foodX,foodY,widthRectangel,heightRectangel,"green");
    }

    function animation(ctx){
        drawPlayGround(ctx);
        drawRectangel(ctx, snakePositionX, snakePositionY, widthRectangel, heightRectangel, "red");
    }

    function handleKeyDown(e) {
        if(!isPress){
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

        function resetFood(){

        }
    
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
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = canvasWidht;
        canvas.height = canvasHeight;

       // setIsIntervalRunning(true);
        const interval = setInterval(() => {
            moveSnake();
        }, speed); 


        window.addEventListener('keydown', handleKeyDown); 
        animation(ctx);

        return () => {
            clearInterval(interval); 
            window.removeEventListener('keydown', handleKeyDown);
            setIsPress(false);
          //  setIsIntervalRunning(false); 
        };
    }, [directX, directY,snakePositionX, snakePositionY]); 

    

    return(
        <div>
            <h1>Hello Game</h1>
            <canvas ref={canvasRef} className='borderCanvas' />
        </div>
    );
}

export default Game;
