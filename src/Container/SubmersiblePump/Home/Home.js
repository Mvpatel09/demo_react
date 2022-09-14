import SubmersiblePumpHeader from "../../../Components/SubmersiblePump/Header/Header"
import 'react-owl-carousel2/lib/OwlCarousel';
import Slider from "./Slider/Slider";
import AboutUs from "./OurProducts/OurProducts";

export default function submersiblePumpHome() {

    return (
        <>
            <SubmersiblePumpHeader />
            <Slider />
            <AboutUs />
        </>
    )
}