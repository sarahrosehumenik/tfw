import React from "react";


export default function ButtonMotiv({setLoveText, formState, setText, setClassName, setIsLoading, setImage}) {

const getLoveCalc = () => {
        setClassName("")
        setIsLoading(true)
        setText('')
        setImage()
        setLoveText()
}

    return(<button className="love" onClick={()=> getLoveCalc()}>Love</button>)

}