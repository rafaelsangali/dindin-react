import { Link } from "react-router-dom";
import "../assets/styles/global.css"

export default function Footer(){
    return (
         <footer>
        <div className="container">
            <h2>
                <Link to={"/"}>Din Din - Educação Financeira</Link>
            </h2>
            <nav>
                <ul>
                    <li><Link to={"/cursos"}>Cursos</Link></li>
                    <li><Link to={"/blog"}>Blog</Link></li>
                    <li><Link to={"#"}>Contato</Link></li>
                </ul>
            </nav>
            <div>
                <ul className="links-anexos">
                    <li><Link to={"#"}>Quero ser prof</Link ></li>
                    <li><Link to={"#"}>Aqui tem outro link</Link></li>
                </ul>
            </div>
        </div>
    </footer>
    )
}