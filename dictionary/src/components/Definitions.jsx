// Här skrivs definitionerna ut i en lista

const Definitions = ({definition})=>{
    
    return(
        <article>
                <li className="meaning__listDefinintion">
                       {definition.definition}
                       {definition.example? <p>Example: {definition.example}</p>: null}
                </li>
        </article>
    )
}
export default Definitions