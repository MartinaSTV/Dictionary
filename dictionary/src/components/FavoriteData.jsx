import { removeFromList } from "../Redux/Actions"
import {  useDispatch } from "react-redux"
import ResultSearchWord from "./ResultSearchWord"
import { useState } from "react"

const FavoriteData =({item})=>{

    const dispatch = useDispatch()
    const [showData ,setShowData] = useState(false)

   //skriver ut datan igen på favorit
    const InfoElem = item.response.map((word, idx)=>{ return <ResultSearchWord word={word} key={ idx }/> })

    return(
        <section className="wordList__elem" ><p onClick={ ()=>{  setShowData(!showData)}} >{item.word}</p>
            {showData? <article>{item? InfoElem: null}</article>: null}
            <button className="wordList__button" onClick={ ()=>{ dispatch(removeFromList(item.id)) }}>X</button>
         </section> 
    )
}

export default FavoriteData