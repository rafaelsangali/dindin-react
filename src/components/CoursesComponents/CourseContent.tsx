import { Link } from "react-router-dom";

interface CourseProps {
    src:string,
    title:string,
    text:string,
}

export default function CourseContent(props: CourseProps){
return (
    <>
  <div className="card-cursos">
            <img src={props.src} alt="Foto ilustrativa do curso"/>
            <section className="descricao-curso">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <Link to={"/conteudo"}>começar agora</Link>
            </section>
        </div>
    </>
)
}