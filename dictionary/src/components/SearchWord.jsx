import { useState } from "react"
import { fetchDictionary } from "../Dictionary"
import ResultSearchWord from "./ResultSearchWord"
import { useDispatch } from "react-redux"
import { addToList } from "../Redux/Actions"

const SearchWord = ()=>{
    
    const dispatch = useDispatch()
    const [searchWord, setSearchWord] = useState('')
    const [dictionaryResponse , setDictionaryResponse ]= useState([])
    const [erroMessage, setErrorMessage] = useState('Sök Ord')
    console.log(dictionaryResponse)

    let id = 1
    const word ={ 
        word: searchWord,
        id: id++
    }

    const handleCLick = ()=>{
    
        try{
            fetchDictionary( setErrorMessage , setDictionaryResponse, searchWord)
            dispatch(addToList(word))
            
        }catch(error){
            setErrorMessage('Could not get information, check your Wifi')
        }
    }

    const WordElem = dictionaryResponse.map((word, idx)=> <ResultSearchWord word={word} key={idx}/>)

    return(
        <section>
            <form  onSubmit={(e)=>{ e.preventDefault()} }>
                <input value={ searchWord } type="text" onChange={(e)=> setSearchWord(e.target.value) }/>
                <button type="submit" onClick={ ()=>handleCLick() } >Sök</button>
            </form>
            <section>{ dictionaryResponse.length > 0? WordElem: erroMessage }</section>
        </section>
    )
} 
export default SearchWord