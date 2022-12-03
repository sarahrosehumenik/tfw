import React from "react";

export default function ButtonBored({ setText, setClassName, setIsLoading, setImage }) {

    const boredQuote = () => {
        setClassName("")
        setIsLoading(true)
        setImage([])

        const options = {
            method: 'GET',
       
        };
        fetch('http://www.boredapi.com/api/activity/', options)


            .then(response => response.json())
            .then(response => {
                setText(`You can...${response.activity}`)
                setIsLoading(false)
                setClassName("fadeIn")
            })
            .catch(err => console.error(err));



        let body = document.querySelector("body")
        body.style.background = 'linear-gradient(red,purple)'


       

    }

    


    return (

        <button className="bored" onClick={()=> boredQuote()}>I'm Bored</button>
    )

}