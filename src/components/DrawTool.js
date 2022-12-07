import React from "react";
import { useState } from "react";
import "./DrawTool.css"

export default function DrawTool({ canvasRef, setLineColor, setLineOpacity, setLineWidth }) {

   return (
        <div className="menu">
            <label className="brush-color">Brush Color
                <input className="picker"
                    type="color"
                    onChange={(e) => {
                        setLineColor(e.target.value);}}
                />
            </label>
            <label className="brush-width">Brush Width
                <input
                    type="range"
                    min="1"
                    max="100"
                    onChange={(e) => {
                        setLineWidth(e.target.value);}}
                />
            </label>
            <label className="brush-opacity">Brush Opacity
                <input
                    type="range"
                    min="1"
                    max="100"
                    onChange={(e) => {
                        setLineOpacity(e.target.value / 1000);}}
                />
            </label>
            <button className="clear"
                onClick={() => {
                    const ctx = canvasRef.current.getContext('2d');
                    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);}}
            >
            Clear
            </button>
       </div>
    )
}