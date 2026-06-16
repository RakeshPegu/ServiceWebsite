import About from "../components/AboutSection";
import Contact from "../components/ContactSection";
import CTASection from "../components/CTASection";
import FAQ from "../components/FAQSection";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/PricingSection";
import ServiceSection from "../components/ServiceSection";
import TrustedSection from "../components/TrustedSection";
import WhyChooseUs from "../components/WhyChooseUs";


function Home(){
       
    return(
        < >
        <div className="flex flex-col gap-20">
        <HeroSection/>
        <TrustedSection/>
        <ServiceSection/>
        <WhyChooseUs/>
        <Portfolio/>
        <HowItWorks/>
        <Pricing/>
        <FAQ/>
        <Contact/>
        <About/>
        <CTASection/>
        </div>
        </>
    )
}
export default Home;