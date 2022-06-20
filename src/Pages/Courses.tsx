import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog(){
return (
    <>
   <Header />
   <main>
    <section className="titulo-principal">
            <h1>Cursos</h1>
            <p>Educação financeira é tudo de bom</p>
        </section>

        <div className="card-cursos">
            <img src="assets/images/image3.svg" alt="Foto ilustrativa do curso" />
            <section className="resumo-curso">
                <h2>Investimento para iniciantes</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                <a href="cursos-2.html">começar agora</a>
            </section>
        </div>
   </main>
    <Footer />
    </>
)
}