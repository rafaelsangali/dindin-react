import Footer from "../components/Footer";
import Header from "../components/Header";
import FirstSection from "../components/BlogComponents/FirstBlogSection";
import SecondSection from "../components/BlogComponents/SecondBlogSection";
import "../../src/assets/styles/blog.css"

export default function Blog(){
return (
    <>
    <Header />
    <main>
        <FirstSection />
        <SecondSection />
    </main>
    <Footer />
    </>
)
}