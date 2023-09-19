import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import './Sass/WordList.scss'
import { removeFromList } from "../Redux/Actions"
const WordList = ()=>{

    const dispatch = useDispatch()

    const [errorMessage, setErrorMessage] = useState('No word added yet')
    const [showList , setShowList ] = useState(false)

    const wordList = useSelector((state)=>{ return state.WordList})
    console.log(wordList)

    const listElem = wordList.map((item, idx)=>{ return <section key={idx}><p>{item.word}</p><button onClick={ ()=>{ dispatch(removeFromList(item.id)) }}>x</button></section> })

    return(
        <article>
            <h1 onClick={ ()=>{ setShowList(!showList)}}>Dina Favorit ord</h1>
           {showList?  wordList.length > 0 ? listElem: errorMessage : null}
        </article>
    )
}
export default WordList