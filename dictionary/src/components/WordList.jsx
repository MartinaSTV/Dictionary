import { useState } from "react"
import { useSelector} from "react-redux"
import './Sass/WordList.scss'
import './Sass/WordList.scss'
import FavoriteData from "./FavoriteData"

//Här här favoritListan som sparas i redux store
// set error message lyser rött men jag behöver inte använda den så det är okej.

const WordList = ()=>{

    const darkMode = useSelector((state)=>{ return state.DarkMode})
    console.log(darkMode)

    const [errorMessage, setErrorMessage] = useState('No word added yet')
    const [showList , setShowList ] = useState(false)

    const wordList = useSelector((state)=>{ return state.WordList})

    const listElem = wordList.map((item, idx)=> <FavoriteData key={ idx } item={item}/>)

    return(
        <article className={darkMode? "wordList": `wordList-dark`}>
            <h4 className="wordList__header" onClick={ ()=>{ setShowList(!showList)}}>Your favorite words</h4>
           {showList?  wordList.length > 0 ? listElem: errorMessage : null}
        </article>
    )
}
export default WordList