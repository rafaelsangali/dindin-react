import { Link } from "react-router-dom";
import "../../assets/styles/index.css"

export default function FirstHomeSection(){
    return (
         <section className="index-banner">
            <h1>Educação Financeira é tudo de bom</h1>
    
            <p>Vem comigo que te mostro por onde começar</p>
    
            <Link to={""}>quero saber mais</Link>
        </section>
    )
}