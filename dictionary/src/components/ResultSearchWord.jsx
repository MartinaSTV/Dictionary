
const ResultSearchWord = ({word})=>{
    console.log(word)

    //sound
    const srcSound = word.phonetics.map((sound, index)=> { return <audio key={index} controls src={sound.audio}></audio>})

  
    //Behövs denna
    const Meaning = word.meanings.map((meaning)=> {return meaning})
    const noun = Meaning.map((noun)=>  noun.partOfSpeech
    )
    const NounElem = noun.map((n, index)=> { return <p key={index}>{n}</p>})


    const definitions =  Meaning.map((mean)=>{return mean.definitions})
    console.log(definitions[0],'definitions')

    /*  console.log(definition[0].definition,'F'); */ 


    return(
        <section> 
            <p>Ord: {word.word}</p>
            <p>Uttal: {word.phonetic}</p>
            <p>{word.license.name}</p>
            <article>
                { NounElem }
                <p>Meanings</p>
                <section></section>
               

            </article>
            <article>{srcSound}</article>



        </section>
    )


}
export default ResultSearchWord