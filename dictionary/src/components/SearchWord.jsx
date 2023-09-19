import { useState } from "react"
import { fetchDictionary } from "../Dictionary"
import ResultSearchWord from "./ResultSearchWord"
import { useDispatch } from "react-redux"
import { addToList } from "../Redux/Actions"
import { v4 as uuidv4 } from 'uuid';

const SearchWord = ()=>{
    
    const id = uuidv4()
    const dispatch = useDispatch()
    const [searchWord, setSearchWord] = useState('')
    const [dictionaryResponse , setDictionaryResponse ]= useState([])
    const [erroMessage, setErrorMessage] = useState('Sök Ord')
 
    const favoritWord ={ 
        word: searchWord,
        id: id
    }

    const WordElem = dictionaryResponse.map((word, idx)=> <ResultSearchWord word={word} key={idx}/>)

    return(
        <section>
            <form  onSubmit={(e)=>{ e.preventDefault()} }>
                <input value={ searchWord } type="text" onChange={(e)=> setSearchWord(e.target.value) }/>
                <button type="submit" onClick={ ()=>{ fetchDictionary( setErrorMessage , setDictionaryResponse, searchWord) } } >Search</button>
                <button onClick={ ()=>{ dispatch(addToList(favoritWord)) }}>Add word to favorites</button>
            </form>
            <section>{ searchWord ? WordElem: erroMessage }</section>
        </section>
    )
} 
export default SearchWord