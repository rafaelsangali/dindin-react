interface ClassContentProps{
    src?:string,
    title:string,
    text:string,
}

export default function ClassContent(props: ClassContentProps){
    return(
        <article className="aula">
            <video src="" width="320" height="240" controls poster=""></video>
                <section>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </section>
        </article>
    )
}