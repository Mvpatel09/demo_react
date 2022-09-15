import SubmersiblePumpHeader from "../../../Components/SubmersiblePump/Header/Header"
import 'react-owl-carousel2/lib/OwlCarousel';
import Slider from "./Slider/Slider";
import OurProducts from "./OurProducts/OurProducts";
import WhyWe from "./WhyWe/WhyWe";
import Certification from "./Certification/Certification";
import ContactFooter from "./ContactFooter/ContactFooter";


export default function submersiblePumpHome() {

    return (
        <>
            <SubmersiblePumpHeader />
            <Slider />
            <OurProducts />
            <WhyWe />
            <Certification />
            <ContactFooter />
        </>
    )
}