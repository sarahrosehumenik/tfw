
export default function ButtonUwu({setImage, setIsLoading, setClassName, setText}) {

    const uwuQuote = () => { 
    setIsLoading(true)
    setText([])
    setClassName("")
             
    const options = {
        method: 'GET',
       };
    fetch('https://api.waifu.pics/sfw/waifu', options)
        .then(response => response.json())
        .then(response => {
           setImage(response.url)
           setIsLoading(false)
           setClassName("fadeIn")
        })
        .catch(err => console.error(err));
}

return (<button className="uwu" onClick={()=> uwuQuote()}>uWu</button>)
}
    
 
