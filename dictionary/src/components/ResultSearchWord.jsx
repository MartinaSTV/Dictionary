import './Sass/ResultSearchWord.scss'
import Meaning from './Meaning'
import { useSelector } from "react-redux"

// skriver ut informationen från APIt på sidan
const ResultSearchWord = ({ word }) => {

    const darkMode = useSelector((state) => { return state.DarkMode })

    // Loopar ut Audio element på sidan
    const infoElem = word.phonetics.map((sound, index) => {
        return <article key={index}>
            {sound.audio === '' ? null : <audio data-testid="audio" controls src={sound.audio}></audio>}</article>
    })

    // Lopar ut informationen som ligger i meaning på sidan i fler komponeneter.
    const wordElem = word.meanings.map((meaning, i) =>
        <Meaning key={i} meaning={meaning} />)

    return (
        <section className={darkMode ? 'result' : 'result-dark'}>
            <p>Your Word: <span className='result__word'>{word.word}</span> </p>
            <p>{word.phonetic}</p>
            {wordElem}
            <article className='result__phonetics'>{word.phonetics.length > 0 ? infoElem : null}</article>
            <p>Source: {word.sourceUrls}</p>
            <p>{word.license.name}</p>
            <p>{word.license.url}</p>
        </section>
    )
}
export default ResultSearchWord