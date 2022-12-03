import React from "react";
import { useState } from "react";
import "./DrawTool.css"





export default function DrawTool({ setLineColor, setLineOpacity, setLineWidth }) {



    return (
        <div className="menu">
            <label>Brush Color
                <input className="picker"
                    type="color"
                    onChange={(e) => {
                        setLineColor(e.target.value);
                    }}
                />
            </label>

            <label>Brush Width
                <input
                    type="range"

                    min="1"
                    max="100"
                    onChange={(e) => {
                        setLineWidth(e.target.value);
                    }}
                />
            </label>
            <label>Brush Opacity
                <input
                    type="range"
                    min="0.1"
                    max="90"
                    onChange={(e) => {
                        setLineOpacity(e.target.value / 90);
                    }}
                />
            </label>


        </div>
    )


}