import { useState } from "react"
import { useSelector } from "react-redux"

const WordList = ()=>{

    const [errorMessage, setErrorMessage] = useState('No word searched yet')
    const [showList , setShowList ] = useState(false)

    const wordList = useSelector((state)=>{ return state.WordList})
    console.log(wordList)

    const listElem = wordList.map((item, idx)=>{ return <section key={idx}><p>{item.word}</p><button>x</button></section> })

    return(
        <article>
            <h1 onClick={ ()=>{ setShowList(!showList)}}>Din sök Lista</h1>
           {showList? <p>{ wordList.length > 0 ? listElem: errorMessage }</p>: null}
        </article>
    )
}
export default WordList