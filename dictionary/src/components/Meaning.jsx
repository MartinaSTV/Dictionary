import { useState } from "react"
import { useSelector} from "react-redux"
import './Sass/Meaning.scss'

// I denna komponenten så renderas datan från innehållet meanings

const Meanings = ({meaning})=>{
   
    // Toggel visa data på knapp tryck
    const [isOpen, setIsopend] = useState(false)
    const [showSynonyms, setShowSynonyms] = useState(false)


    // hämtar bolean
    const darkMode = useSelector((state)=>{ return state.DarkMode})
    
    return(
        <article className={ darkMode? `meaning`: `meaning-dark` }>
             <p className="meaning__speech">Part of Speech: <span className="meaning__noun">{ meaning.partOfSpeech}</span></p>
             <button className={ darkMode? `meaning__button`: `meaning-dark__button` } onClick={ ()=>{ setIsopend(!isOpen)}} >Show Definitions</button>
               {isOpen? <ul> { meaning.definitions.map((definition, idx)=> <article key={idx}>
                       <li className="meaning__listDefinintion">{definition.definition}
                       {definition.example? <p>Example: {definition.example}</p>: null}
                           { definition.synonyms.map((synonym, idx)=> <p key={idx}>Synonym:{synonym}</p>) }
                           { definition.antonyms.map((antonyms, idx)=> <p key={idx}>Antonyms:{antonyms}</p>) }
                       </li></article> )}</ul>: null}
               
               <button className={ darkMode? `meaning__button`: `meaning-dark__button` }  onClick={ ()=>{ setShowSynonyms(!showSynonyms)}}>Show Synonyms</button>
                    {showSynonyms? <ol className='result__synonyms'>{meaning.synonyms.map((synonyms, idx) => <li key={idx}>{synonyms}</li>)} </ol>: null}
        </article>
    )
}
export default Meanings