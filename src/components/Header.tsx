import { Link } from "react-router-dom";
import "../assets/styles/global.css"

export default function Header(){
    return (
         <header>
        <div className="container">
            <h2>
                <Link to={"/"}>Din Din - Educação Financeira</Link>
            </h2>
            
            <nav>
                <ul>
                    <li><Link to={"/cursos"}>Cursos</Link></li>
                    <li><Link to={"/blog"}>Blog</Link></li>
                    <li><Link to={""}>Contato</Link></li>
                </ul>
            </nav>

        </div>
    </header>
    )
}