
import CardComment from "./CardHomeComment"
import img1 from "../../assets/images/Group22.svg"
import img2 from "../../assets/images/Group21.svg"
import img3 from "../../assets/images/whoopi.svg"
import img4 from "../../assets/images/jane.svg"
import "../../assets/styles/index.css"

export default function ThirdtHomeSection(){
    return (
        <section className="sobre-nos-index">
            <h3>O QUE FALAM SOBRE NÓS</h3>
            <div className="depoimentos">
                <CardComment
                href={img1}
                text={"”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”"}
                name={"Wally, 25"}
                />
                <CardComment
                href={img2}
                text={"”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”"}
                name={"Jaden Smith, 23"}
                />
                <CardComment
                href={img3}
                text={"”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”"}
                name={"Whoopi Goldberg, 37"}
                />
                <CardComment
                href={img4}
                text={"”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”"}
                name={"Janes Joplin, 29"}
                />  
            </div>    
        </section>
         
    )
}