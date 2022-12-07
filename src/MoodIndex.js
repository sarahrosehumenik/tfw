import React from "react";
import { useState, useEffect } from "react";
import "./MoodIndex.css"
import ButtonJoke from "./components/ButtonJoke";
import ButtonMotiv from "./components/ButtonMotiv";
import ButtonUwu from "./components/ButtonUwu";
import ButtonBored from "./components/ButtonBored";
import ButtonCat from "./components/ButtonCat";

export default function MoodIndex() {

    const [text, setText] = useState(["Pick your feels"])
    const [isLoading, setIsLoading] = useState(false)
    const [className, setClassName] = useState("fadeIn")
    const [image, setImage] = useState()
   
   return (
       <>
       <div className="quote-container">
            {isLoading ?
                <h1 className="">Loading...</h1> :
                    <>
                  {!image ? 
                    <h1 id="text" className={className}>{text}</h1> :
                    <div className="image-container">
                        <img className="image" src={image}/>
                    </div> }
                    </>}
       </div>
            <div className="all-buttons">
                <ButtonJoke setIsLoading={setIsLoading} setClassName={setClassName} setText={setText}  setImage={setImage} />
                <ButtonMotiv setIsLoading={setIsLoading} setClassName={setClassName} setText={setText}  setImage={setImage} />
                <ButtonUwu setIsLoading={setIsLoading} setClassName={setClassName} setText={setText} setImage={setImage} />
                <ButtonBored setIsLoading={setIsLoading} setClassName={setClassName} setText={setText} setImage={setImage} />
                <ButtonCat setIsLoading={setIsLoading} setClassName={setClassName} setText={setText} setImage={setImage} />
            </div>
       </>
    )
}