import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import './Sass/WordList.scss'
import { removeFromList } from "../Redux/Actions"
import './Sass/WordList.scss'

const WordList = ()=>{

    const dispatch = useDispatch()

    const [errorMessage, setErrorMessage] = useState('No word added yet')
    const [showList , setShowList ] = useState(false)

    const wordList = useSelector((state)=>{ return state.WordList})
    console.log(wordList)

    const listElem = wordList.map((item, idx)=>{ return <section className="wordList__elem" key={idx}><p>{item.word}</p><button className="wordList__button" onClick={ ()=>{ dispatch(removeFromList(item.id)) }}>X</button></section> })

    return(
        <article className="wordList">
            <h4 className="wordList__header" onClick={ ()=>{ setShowList(!showList)}}>Dina Favorit ord</h4>
           {showList?  wordList.length > 0 ? listElem: errorMessage : null}
        </article>
    )
}
export default WordList