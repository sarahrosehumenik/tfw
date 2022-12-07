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

const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
        e.nativeEvent.offsetX,
        e.nativeEvent.offsetY
    );
    setIsDrawing(true);
};

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
    )
        ctxRef.current.stroke();
 };

    return (
        <>
           <div className="canvas-container">
            <canvas id="canvas"
                style={{ backgroundColor: "white" }}
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                ref={canvasRef}
                width={`400px`}
                height={`590px`}
            />
           </div>
            <DrawTool
                canvasRef={canvasRef}
                setLineColor={setLineColor}
                setLineWidth={setLineWidth}
                setLineOpacity={setLineOpacity}
            />
      </>
    )
};