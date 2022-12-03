import React from "react";
import { useEffect, useRef, useState } from "react";
import DrawTool from "./components/DrawTool.js";
import "./DrawIndex.css"
export default function DrawIndex() {


    const canvasRef = useRef(null);
    const ctxRef = useRef(null);


    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);




    // Initialization when the component
    // mounts for the first time
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;


    }, [lineColor, lineOpacity, lineWidth]);







    // Function for starting the drawing
    const startDrawing = (e) => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        setIsDrawing(true);
    };

    // Function for ending the drawing
    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    };

    const endDrawingTwo = (e) => {
        let canvas = document.querySelector("canvas")
        console.log(canvas)


    }



    const draw = (e) => {
        if (!isDrawing) {
            return;
        }

        ctxRef.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );

        ctxRef.current.stroke();


    };






    return (
        <div>
            {/* <img id="S2" className="canvasimg" src="https://i.imgur.com/G4WIrCL.png"></img> */}
            <canvas id="myCanvas"
                style={{ backgroundColor: "rgba(255, 255, 255, .3)" }}
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                ref={canvasRef}
                // width={`700px`}
                height={`400px`}
            />

            <DrawTool

                setLineColor={setLineColor}
                setLineWidth={setLineWidth}
                setLineOpacity={setLineOpacity}
            />
            <button className="clear"
                onClick={() => {
                    const ctx = canvasRef.current.getContext('2d');
                    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                }}
            >
                Clear
            </button>

        </div>


    )
};