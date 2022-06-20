import img from "../../assets/images/rectangle21.svg"

interface CardBlogProps {
    title: string,
    text: string,
}

export default function CardBlogContent(props: CardBlogProps){
    return(
        <div className="area-postagens">
            <article className="card-postagem">
                <img src={img} alt="Foto Da Postagem" />
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </article>
        </div>
    )
}