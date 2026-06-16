
import {lazy} from 'react'

import LazyLoaderSection from '../utils/LazyLoaderSection';
const  About = lazy(()=>(import("../components/AboutSection")))
const Contact = lazy(()=>import( "../components/ContactSection"));
const  CTASection = lazy(()=>import("../components/CTASection"));
const FAQ  = lazy(()=>import("../components/FAQSection"));
const  HeroSection = lazy(()=>import("../components/HeroSection"));
const  HowItWorks = lazy(()=>import("../components/HowItWorks")) ;
const Portfolio = lazy(()=>import("../components/Portfolio"));
const Pricing  = lazy(()=>import("../components/PricingSection"));
const  ServiceSection = lazy(()=>import("../components/ServiceSection"));
const TrustedSection = lazy(()=>import("../components/TrustedSection"));
const  WhyChooseUs = lazy(()=>import("../components/WhyChooseUs")) ;



function Home(){
       
    return(
        < >    

        <div className="flex flex-col gap-20">
           <LazyLoaderSection Component={HeroSection} height={600} count={4}/>
  
           <LazyLoaderSection Component={TrustedSection} height={100} count={1}/>
  
           <LazyLoaderSection Component={ServiceSection} height={200} count={3}/>

           <LazyLoaderSection Component={WhyChooseUs} height={200} count={3}/>
 
          <LazyLoaderSection Component={Portfolio} height={200} count={3}/>
  
          <LazyLoaderSection Component={HowItWorks} height={200} count={3}/>
  
         <LazyLoaderSection Component={Pricing} height={150} count={3}/>
  
         <LazyLoaderSection Component={FAQ} height={200} count={3}/>

         <LazyLoaderSection Component={Contact} height={200} count={3}/>
  
          <LazyLoaderSection Component={About} height={200} count={3}/>

         <LazyLoaderSection Component={CTASection} height={200} count={3}/>
</div>
        

        </>
    )
}
export default Home;