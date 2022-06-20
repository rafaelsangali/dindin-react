interface CardCommentProps {
    href:string,
    text:string,
    name:string,
}

export default function CardHomeComment(props: CardCommentProps) {
    return (
        <div className="card-depoimento">
            <img src={props.href} />
                <p>
                    {props.text}
                    <br />
                 <span>{props.name}</span>
                </p>
        </div>

    )
}
