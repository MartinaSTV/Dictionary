import { removeFromList } from "../Redux/Actions"
import {  useDispatch , useSelector} from "react-redux"
import ResultSearchWord from "./ResultSearchWord"
import { useState } from "react"
import './Sass/FavoriteData.scss'

const FavoriteData =({item})=>{

    const dispatch = useDispatch()
    const [showData ,setShowData] = useState(false)

    const darkMode = useSelector((state)=>{ return state.DarkMode})

   //skriver ut datan igen på favorit från infon i redux
    const InfoElem = item.response.map((word, idx)=>{ return <ResultSearchWord word={word} key={ idx }/> })


    return(
        <section className="favoriteData__elem" >
            <article className={darkMode? "favoriteData__name": "favoriteData-dark__name"} onClick={ ()=>{  setShowData(!showData)}} >
                {item.word}
                 <button className={darkMode? "favoriteData__button": 'favoriteData-dark__button'} onClick={ ()=>{ dispatch(removeFromList(item.id)) }}>X</button>
            </article>
             {showData? <article>{item? InfoElem: null}</article>: null}
         </section> 
    )
}

export default FavoriteData