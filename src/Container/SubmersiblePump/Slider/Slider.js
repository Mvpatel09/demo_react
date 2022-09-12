import React from 'react'

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';


import Slide from "./Slide"
const img1 = "https://wallpaperaccess.com/full/51363.jpg"
const img2 = "https://wallpaperaccess.com/full/51360.jpg"
const img3 = "https://wallpaperaccess.com/full/51364.jpg"
const img4 = "https://wallpaperaccess.com/full/51365.jpg"

function Slider() {
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };

    const content1 = "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    return (
        <OwlCarousel options={options}>
            <Slide img={img1} title="Think Big Do Creative Grow Business " content={content1} loop />
            <Slide img={img2} title="Think Big Do Creative Grow Business " content={content1} loop />
            <Slide img={img3} title="Think Big Do Creative Grow Business " content={content1} />
            <Slide img={img4} title="Think Big Do Creative Grow Business " content={content1} />
        </OwlCarousel>
    );
}

export default Slider