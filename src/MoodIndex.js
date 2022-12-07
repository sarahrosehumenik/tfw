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
    const [loveText, setLoveText] = useState()
    const initialState = {nameOne: "", nameTwo: ""}
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const handleSubmit = (event) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '37ca969405msh1437660d6e030dbp15c6ebjsna316a5d2a3f8',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
        };
        
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${formState.nameOne}&fname=${formState.nameTwo}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setLoveText(response)})
            .catch(err => console.error(err));

       
       
       
       
       
       
       
       
        event.preventDefault(); 
        setFormState(initialState);
      };


   
   return (
       <>
       <div className="quote-container">
            
               
            <>
               {!image && !text ? <div className="love-container">
               <h1 className="love-title">Love Calculator</h1>
               {loveText ?
               <>
               <h1 className="love-text percent">{loveText.percentage}%</h1>
               <h1 className="love-text result">{loveText.result}</h1>
               </> : "" }
               <form className="love-form" onSubmit={handleSubmit} >
               <input 
               className="love-input"
               name="nameOne" 
               onChange={handleChange} 
               value={formState.nameOne} 
               type="text"
               placeholder="Your name"
               ></input>
               <input 
               className="love-input"
               name="nameTwo" 
               onChange={handleChange} 
               value={formState.nameTwo} 
               type="tect"
               placeholder="your love interest"></input>
               <input className="love-button" type="submit"></input>
               </form>
               </div>: <>   
             
                  {!image ? 
                    <h1 id="text" className={className}>{text}</h1> :
                    <div className="image-container">
                        <img className="image" src={image}/>
                    </div> }
                  </>
                    }</>
       </div>
            <div className="all-buttons">
                <ButtonJoke setIsLoading={setIsLoading} setClassName={setClassName} setText={setText}  setImage={setImage} />
                <ButtonMotiv formState={formState} setLoveText={setLoveText} setIsLoading={setIsLoading} setClassName={setClassName} setText={setText}  setImage={setImage} />
                <ButtonUwu setIsLoading={setIsLoading} setClassName={setClassName} setText={setText} setImage={setImage} />
                <ButtonBored setIsLoading={setIsLoading} setClassName={setClassName} setText={setText} setImage={setImage} />
                <ButtonCat setIsLoading={setIsLoading} setClassName={setClassName} setText={setText} setImage={setImage} />
            </div>
       </>
    )
}