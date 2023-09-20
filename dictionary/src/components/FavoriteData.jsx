import { removeFromList } from "../Redux/Actions"
import {  useDispatch } from "react-redux"

const FavoriteData =({item})=>{

    const dispatch = useDispatch()
    console.log(item.id)

    return(

        <section className="wordList__elem" ><p>{item.word}</p>
            <button className="wordList__button" onClick={ ()=>{ dispatch(removeFromList(item.id)) }}>X</button>
         </section> 
    )
}

export default FavoriteData