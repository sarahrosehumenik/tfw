import React from "react";

export default function ButtonBored({ setText, setClassName, setIsLoading, setImage }) {

    const boredQuote = () => {
        setClassName("")
        setIsLoading(true)
        setText('')
      
      const options = {
            method: 'GET',
       };
        fetch(' https://api.imgflip.com/get_memes', options)
            .then(response => response.json())
            .then(response => {
                // setImage(response.memes.url)
                setImage(response.data.memes[2].url)
                setIsLoading(false)
                setClassName("fadeIn")
            })
            .catch(err => console.error(err));
}

        return (<button className="bored" onClick={()=> boredQuote()}> Bored</button>)

}