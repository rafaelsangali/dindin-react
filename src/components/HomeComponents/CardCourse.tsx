import { Link } from "react-router-dom";

interface CardCourseProps {
    href: string,
    alt:string,
    title: string,
    text:string
}
export default function CardCourse(props: CardCourseProps){
    return (
         <div className="card-curso-index">
                <img src={props.href} alt={props.alt} />
                <h4>{props.title}</h4>
                <p>{props.text}</p>
                <Link to={""}>começar agora</Link>
            </div>
    )
}