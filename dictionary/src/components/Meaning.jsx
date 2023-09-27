import { useState } from "react"
import { useSelector } from "react-redux"
import './Sass/Meaning.scss'
import Definitions from "./Definitions"

// I denna komponenten så renderas datan från innehållet meanings
const Meanings = ({ meaning }) => {

    // Toggla mellan att visa data på knapp tryck och dölja på knapptryck
    const [isOpen, setIsopend] = useState(false)
    const [showSynonyms, setShowSynonyms] = useState(false)
  
    // hämtar boolean för light eller dark mode
    const darkMode = useSelector((state) => { return state.DarkMode })

    return (
        <article className={darkMode ? `meaning` : `meaning-dark`}>

            <p className="meaning__speech">Part of Speech: <span className="meaning__noun">{meaning.partOfSpeech}</span></p>

            <button className={darkMode ? `meaning__button` : `meaning-dark__button`} onClick={() => { setIsopend(!isOpen) }} >Show Definitions</button>
            {isOpen ? <ul className=" meaning__definitions"> {meaning.definitions.map((definition, idx) => <Definitions key={idx} definition={definition} />)}</ul> : null}

            <button className={darkMode ? `meaning__button` : `meaning-dark__button`} onClick={() => { setShowSynonyms(!showSynonyms) }}>Show Synonyms</button>
            {showSynonyms ? <ol className='result__synonyms'>{meaning.synonyms.map((synonyms, idx) => <li key={idx}>{synonyms}</li>)} </ol> : null}

            {meaning.antonyms.length > 0 ? <article className="meaning__antonyms">Antonyms:
                <ol>{meaning.antonyms.map((antonyms, idx) => <li key={idx}>{antonyms}</li>)}</ol>
            </article> : null}

        </article>
    )
}
export default Meanings