import { useState } from "react"
import { useSelector } from "react-redux"
import './Sass/WordList.scss'
import './Sass/WordList.scss'
import FavoriteData from "./FavoriteData"

//Här är favoritListan som sparas i redux store.
// Listan skrivs sedan ut i komponeneten favoriteData

const WordList = () => {

    const darkMode = useSelector((state) => { return state.DarkMode })
    const [showList, setShowList] = useState(false)

    const wordList = useSelector((state) => { return state.WordList })

    const listElem = wordList.map((item, idx) => <FavoriteData key={idx} item={item} />)

    return (
        <article className={darkMode ? "wordList" : `wordList-dark`}>
            <h4 className={darkMode ? "wordList__header" : 'wordList-dark__header'} onClick={() => { setShowList(!showList) }}>Your favorite words {wordList.length < 1 ? null : wordList.length}</h4>
            {showList ? wordList.length > 0 ? listElem : 'No word added yet' : null}
        </article>
    )
}
export default WordList