import React from "react";

export default function ButtonJoke({ setText, setClassName, setIsLoading, setImage }) {


    const jokeQuote = () => {

        setClassName("")
        setIsLoading(true)
        setImage([])

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '37ca969405msh1437660d6e030dbp15c6ebjsna316a5d2a3f8',
                'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
            }
        };
        fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options)


            .then(response => response.json())
            .then(response => {
                setText(response[0].joke)
                setClassName("fadeIn")
                setIsLoading(false)
            })
            .catch(err => console.error(err));



        let body = document.querySelector("body")
        body.style.background = 'linear-gradient(pink,blue)'

    }


    return (

        <button className="LOL" onClick={() => jokeQuote()}>LOL</button>
    )
}