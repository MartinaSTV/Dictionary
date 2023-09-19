import { useState } from 'react'
import './Sass/ResultSearchWord.scss'

const ResultSearchWord = ({word})=>{

    const [isOpen, setIsopend] = useState(false)
    const [showSynonyms, setShowSynonyms] = useState(false)

    console.log(word)

    //Audio
    const srcSound = word.phonetics.map((sound, index)=> { return <article key={index}> {sound.audio === '' ? null :<audio  controls src={sound.audio}></audio>} <p>{sound.text}</p></article> })

    
    const Meaning = word.meanings.map((meaning, idx)=> {
        return <article key={ idx }>
                   
                    <p>Your Word: { word.word}</p>
                    <p>{word.license.name}</p>

                    <p>Part of Speetch: { meaning.partOfSpeech}</p>
                    <button onClick={ ()=>{ setIsopend(!isOpen)}} >Show Definitions</button>
                    {isOpen? <ul> { meaning.definitions.map((definition, idx)=> <article key={idx}>
                            <li>{definition.definition}{definition.example? <p>Example: {definition.example}</p>: null}</li></article> )}</ul>: null}
                    
                        <button onClick={ ()=>{ setShowSynonyms(!showSynonyms)}}>Show Synonyms</button>
                            {showSynonyms? <ol>{meaning.synonyms.map((synonyms, idx) => <li key={idx}>{synonyms}</li>)} </ol>: null}
                        <h1>Audio</h1>
                    
                </article>})

    return(
        <section className='SearchWord'>         
            <article>{ Meaning }</article>
            <article><h1>Audio</h1>{word.phonetics.length > 0 ? srcSound: null}</article>
        </section>
    )
}
export default ResultSearchWord