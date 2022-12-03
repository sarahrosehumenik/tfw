import React from "react";


export default function ButtonMotiv({setText, setClassName, setIsLoading, setImage}) {


    const motivationalQuote = () => {
        setClassName("")
        setIsLoading(true)
        setImage([])
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '37ca969405msh1437660d6e030dbp15c6ebjsna316a5d2a3f8',
                'X-RapidAPI-Host': 'inspiring-quotes.p.rapidapi.com'
            }
        };
        fetch('https://inspiring-quotes.p.rapidapi.com/random?author=Albert', options)
            .then(response => response.json())
            .then(response => {
                setText(response.quote)
                setClassName("fadeIn")
                setIsLoading(false)
            })
            .catch(err => console.error(err));

        let body = document.querySelector("body")
        body.style.background = 'linear-gradient(rgb(47, 187, 166), rgb(140, 104, 104))'



    }

    return(
        <button className="motivate" onClick={()=> motivationalQuote()}>Motivate me</button>


    )

}