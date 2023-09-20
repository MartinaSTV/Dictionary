import { useState } from "react"
import './Sass/Meaning.scss'

const Meanings = ({meaning})=>{
    
    const [isOpen, setIsopend] = useState(false)
    const [showSynonyms, setShowSynonyms] = useState(false)

    return(
        <article className="meaning">
             <p>Part of Speetch: { meaning.partOfSpeech}</p>
             <button className='meaning__button' onClick={ ()=>{ setIsopend(!isOpen)}} >Show Definitions</button>
               {isOpen? <ul> { meaning.definitions.map((definition, idx)=> <article key={idx}>
                       <li className="meaning__listDefinintion">{definition.definition}
                       {definition.example? <p>Example: {definition.example}</p>: null}
                           { definition.synonyms.map((synonym, idx)=> <p key={idx}>Synonym:{synonym}</p>) }
                           { definition.antonyms.map((antonyms, idx)=> <p key={idx}>Antonyms:{antonyms}</p>) }
                       </li></article> )}</ul>: null}
               
               <button className='meaning__button' onClick={ ()=>{ setShowSynonyms(!showSynonyms)}}>Show Synonyms</button>
                    {showSynonyms? <ol className='result__synonyms'>{meaning.synonyms.map((synonyms, idx) => <li key={idx}>{synonyms}</li>)} </ol>: null}
        </article>
    )
}
export default Meanings