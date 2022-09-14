import { Box, Grid } from "@mui/material"
import { Png } from "../../Asserts/Images/Png"
import { Jpg } from "../../Asserts/Images/Jpg"
import { Link } from "react-router-dom"



export default function Welcome() {
    let heading = [
        {
            heading: "Submersible Pump & Motor",
            image: Png.WcImage1,
            link: "/submersible-pump/"
        },
        {
            heading: "Industrial Spares & Parts",
            image: Jpg.WcImage2,
            link: "/industrial-spares-parts/"
        },
        {
            heading: "Food & Beverage",
            image: Jpg.WcImage3,
            link: "/food-beverage/"
        },
    ]
    return (
        <>
            <Box className="wc-main-heading">
                <img className="logo-image" src={Jpg.Logo} />
            </Box>
            <span className="wc-main-message">
                Go to our product range...
            </span>
            <Grid
                container
                spacing={1}
            >
                {
                    heading.map((data) => {
                        return (
                            <>
                                <Grid item lg={4} md={4} xs={12}>
                                    <Box className="wc-main-image1-main-div">
                                        <Link className="link-underline" to={`${data.link}`}>
                                            <Box className="wc-main-image1-div">
                                                <img className="wc-main-image1-tag" src={data.image} />
                                            </Box>
                                            <Box className="wc-main-image1-heading">
                                                {data.heading}
                                            </Box>
                                        </Link>
                                    </Box>
                                </Grid>
                            </>
                        )
                    })
                }
            </Grid>
        </>
    )
}