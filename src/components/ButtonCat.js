import React from "react";

export default function ButtonCat({ setText, setClassName, setIsLoading, setImage }) {

    const getCatImage = () => {
        setClassName("")
        setIsLoading(true)
        setText([])
        
        const options = {
            method: 'GET',
           };
        fetch('https://api.thecatapi.com/v1/images/search', options)
            .then(response => response.json())
            .then(response => {
                setImage(response[0].url)
                setClassName("fadeIn")
                setIsLoading(false)
            })
            .catch(err => console.error(err));
}



    return(<button className="cat" onClick={()=> getCatImage()} className="cat">Meow</button>)
}