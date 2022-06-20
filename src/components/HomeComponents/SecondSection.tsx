
import CardCourse from "./CardCourse"
import Img2 from "../../assets/images/image2.svg"
import Img3 from "../../assets/images/image3.svg"
import Img4 from "../../assets/images/image4.svg"
import "../../assets/styles/index.css"

export default function SecondSection(){
    return (
         <section className="links-cursos-index">
            <CardCourse 
            href={Img3} 
            alt="ilustração Investimento para iniciantes"
            title="Investimento para iniciantes"
            text="Duis aute irure dolor in reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla pariatur."/>
            <CardCourse 
            href={Img2} 
            alt="ilustração Poupando e Rendendo"
            title="Poupando e Rendendo"
            text="Duis aute irure dolor in reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla pariatur."/>
            <CardCourse 
            href={Img4} 
            alt="ilustração Independência Financeira"
            title="Independência Financeira"
            text="Duis aute irure dolor in reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla pariatur."/>
        </section>
        
    )
}