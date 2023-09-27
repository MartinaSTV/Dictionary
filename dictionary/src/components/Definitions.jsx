
// Här skrivs definitionerna ut.
const Definitions = ({ definition }) => {

    return (
        <article>
            <li className="meaning__listDefinintion">
                {definition.definition}
                {definition.example ? <p>Example: {definition.example}</p> : null}
            </li>
            {definition.antonyms.length > 0 ? <article className="meaning__antonyms">Antonyms:
                <ol>{definition.antonyms.map((antonyms, idx) => <li key={idx}>{antonyms}</li>)}</ol>
            </article> : null}
        </article>
    )
}
export default Definitions