import { Link } from "react-router-dom";
import CardContent from "./CardHomeContent";

export default function FourthHomeSection() {
    return (
        <section className="mais-conteudo-index">
            <h2>MAIS CONTEÚDO PARA VOCÊ</h2>
            <div className="conteudos-index">
            <CardContent 
            title="Itaque earum rerum" 
            text="hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            />
            <CardContent 
            title="Itaque earum rerum" 
            text="hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            />
            <CardContent 
            title="Itaque earum rerum" 
            text="hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            />
            </div>
            <div className="conteudos-button">
                <Link to={""}>ver todos os posts</Link>
            </div>
        </section>
    )
}
