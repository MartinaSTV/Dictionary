import { removeFromList } from "../Redux/Actions"
import {  useDispatch , useSelector} from "react-redux"
import ResultSearchWord from "./ResultSearchWord"
import { useState } from "react"
import './Sass/FavoriteData.scss'

const FavoriteData =({item})=>{

    // show data togglar mellan att visa favorit listan och inte visa den.
     // dispach används för att ta bort ord från favorit lista
    const dispatch = useDispatch()
    const [showData ,setShowData] = useState(false)

    const darkMode = useSelector((state)=>{ return state.DarkMode})

   //skriver ut datan i komponent på favorit från infon i redux
    const InfoElem = item.response.map((word, idx)=>{ return <ResultSearchWord word={word} key={ idx }/> })

    return(
        <section className="favoriteData__elem" >
            <article className="favoriteData__article"  >
                <p data-testid="name" className={darkMode? "favoriteData__name": "favoriteData-dark__name"} onClick={ ()=>{ setShowData(!showData)}}>{item.word}</p>
                 <button className={darkMode? "favoriteData__button": 'favoriteData-dark__button'} onClick={ ()=>{ dispatch(removeFromList(item.id)) }}>X</button>
            </article>
             {showData? <article className="favoriteData__FavoriteInfoElem">{item? InfoElem: null}</article>: null}
         </section> 
    )
}

export default FavoriteData