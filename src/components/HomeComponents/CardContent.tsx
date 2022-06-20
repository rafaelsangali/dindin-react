interface CardContentProps {
    title: string,
    text: string,
}

export default function CardContent(props: CardContentProps){
    return(
        <div className="card-conteudos-index">
            <img />
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}