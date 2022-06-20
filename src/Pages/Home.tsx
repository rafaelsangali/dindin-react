import Footer from "../components/Footer";
import Header from "../components/Header";
import FirstSection from "../components/HomeComponents/FirstSection";
import SecondSection from "../components/HomeComponents/SecondSection";
import ThirdtSection from "../components/HomeComponents/ThirdSection";
import FourthSection from "../components/HomeComponents/FourthSection";


export default function Home(){
return (
    <>
    <Header />
    <main>
        <FirstSection />
        <SecondSection />
        <ThirdtSection />
        <FourthSection />
    </main>
    <Footer />
    </>
)
}