import React from "react";

export default function ButtonBored({ setLoveText, setText, setClassName, setIsLoading, setImage }) {

    const boredQuote = () => {
        setClassName("")
        setIsLoading(true)
        setImage()
        setLoveText()
        
      
      const options = {
            method: 'GET',
            headers: {
                'X-Api-Key': '5wIIGV2ogQPLPw6T5eUmZA==Pgkj16aiQ1VozKBl'
            }
       };
        fetch(' https://api.api-ninjas.com/v1/facts?limit=1', options)
            .then(response => response.json())
            .then(response => {
                // setImage(response.memes.url)
                console.log(response)
                setText(response[0].fact)
                setIsLoading(false)
                setClassName("fadeIn")
            })
            .catch(err => console.error(err));
}

        return (<button className="bored" onClick={()=> boredQuote()}> Bored</button>)

}