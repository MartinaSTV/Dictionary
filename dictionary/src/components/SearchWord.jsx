import { useState } from "react"
import { fetchDictionary } from "../Dictionary"
import ResultSearchWord from "./ResultSearchWord"
import { useDispatch, useSelector } from "react-redux"
import { addToList } from "../Redux/Actions"
import { v4 as uuidv4 } from 'uuid';
import './Sass/SearchWord.scss'

// favorit ord och sökord sparas i redux Store
// i klicket så hämtas datan från funktionen fetchdictionary som ligger i en annan fil. Datan skrivs ut och loppas ut i Wordelem som i sig använder sig av flera komponenetr för att skriva ut datan.

const SearchWord = ()=>{

    const darkMode = useSelector((state)=>{ return state.DarkMode})
    console.log(darkMode,' searchword')
    
    const id = uuidv4()
    const dispatch = useDispatch()
    const [searchWord, setSearchWord] = useState('')
    const [dictionaryResponse , setDictionaryResponse ]= useState([])
    const [erroMessage, setErrorMessage] = useState('')
 
    const favoritWord ={ 
        word: searchWord,
        response: dictionaryResponse,
        id: id
    }

    const WordElem = dictionaryResponse.map((word, idx)=> <ResultSearchWord word={word} key={idx}/>)

    const Ligth = 'searchWord'
    const Dark = 'searchWord-dark'

    return(
        <section className={darkMode? Ligth: Dark}>
            <form  onSubmit={(e)=>{ e.preventDefault()} }>
                <input className="searchWord__input" placeholder="Search Word" value={ searchWord } type="text" onChange={(e)=> setSearchWord(e.target.value) }/>
                <button className="searchWord__button" type="submit" onClick={ ()=>{ fetchDictionary( setErrorMessage , setDictionaryResponse, searchWord) } } >Search</button>
                {dictionaryResponse.length > 0? <button className="searchWord__button" onClick={ ()=>{ dispatch(addToList(favoritWord)) }}>Add word to favorites</button>: null}
            </form>
            <section className="searchWord__wordElem">{ searchWord ? WordElem: erroMessage }</section>
        </section>
    )
} 
export default SearchWord