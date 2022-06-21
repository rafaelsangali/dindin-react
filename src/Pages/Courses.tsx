import CourseContent from "../components/CoursesComponents/CourseContent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1 from "../assets/images/image3.svg";
import img2 from "../assets/images/image2.svg";
import img3 from "../assets/images/image4.svg";
import "../assets/styles/courses.css";

export default function Courses(){
return (
    <>
   <Header />
    <main>
        <section className="titulo-principal">
            <h1>Cursos</h1>
            <p>Educação financeira é tudo de bom</p>
        </section>
        <CourseContent
        src={img1}
        title="Investimento para iniciantes"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        />
        <hr />
         <CourseContent
        src={img2}
        title="Poupando e Rendendo"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        />
        <hr />
         <CourseContent
        src={img3}
        title="Independência Financeira"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        />
    </main>
    <Footer />
    </>
)
}