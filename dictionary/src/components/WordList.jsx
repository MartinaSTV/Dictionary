import { useState } from "react"
import { useSelector} from "react-redux"
import './Sass/WordList.scss'
import './Sass/WordList.scss'
import FavoriteData from "./FavoriteData"

const WordList = ()=>{

    const [errorMessage, setErrorMessage] = useState('No word added yet')
    const [showList , setShowList ] = useState(false)

    const wordList = useSelector((state)=>{ return state.WordList})
    console.log(wordList)

  
    console.log(wordList, 'wordList')
    const listElem = wordList.map((item, idx)=> <FavoriteData key={ idx } item={item}/>)

    return(
        <article className="wordList">
            <h4 className="wordList__header" onClick={ ()=>{ setShowList(!showList)}}>Your favorite words</h4>
           {showList?  wordList.length > 0 ? listElem: errorMessage : null}
        </article>
    )
}
export default WordList