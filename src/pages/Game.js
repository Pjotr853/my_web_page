import React, { useRef, useEffect, useState } from 'react';
import './Game.css';

function Game(){

    const canvasRef = useRef(null);
    const colorRectangel="grey";
    const widthRectangel=30;
    const heightRectangel=30;
    const canvasWidht= 600;
    const canvasHeight= 600;
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function drawRectangel(ctx, x,y,width,height,color){
        ctx.fillStyle=colorRectangel;
        ctx.fillRect(x,y,width,height);  
    }

    function drawPlayGround(ctx){
        drawRectangel()

    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Nastavenie rozmerov canvasu
        canvas.width = canvasWidht;
        canvas.height = canvasHeight;

        // Kreslenie štvorca
        drawRectangel(ctx, x,y,widthRectangel,heightRectangel,colorRectangel);
        //ctx.fillStyle = 'blue';
       // ctx.fillRect(50, 50, 100, 100);
    }, []);


    return(
        <div>
            <h1>Hello Game</h1>
            <canvas ref={canvasRef} className='borderCanvas' />
        </div>
    );
}

export default Game;