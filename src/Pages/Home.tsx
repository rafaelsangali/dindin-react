import Footer from "../components/Footer";
import Header from "../components/Header";
import FirstSection from "../components/HomeComponents/FirstHomeSection";
import SecondSection from "../components/HomeComponents/SecondHomeSection";
import ThirdtSection from "../components/HomeComponents/ThirdHomeSection";
import FourthSection from "../components/HomeComponents/FourthHomeSection";


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