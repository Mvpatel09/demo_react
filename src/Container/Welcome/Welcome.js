import { Box, Grid } from "@mui/material"
import { Png } from "../../Asserts/Images/Png"
import { Jpg } from "../../Asserts/Images/Jpg"



export default function Welcome() {
    let heading = [
        {
            heading: "Submersible Pump",
            image: Png.WcImage1
        },
        {
            heading: "Industrial Spares & Parts",
            image: Jpg.WcImage2
        },
        {
            heading: "Food & Beverage",
            image: Jpg.WcImage3
        },
    ]
    return (
        <>
            <Box component="h1" className="wc-main-heading">
                V-Max exim
            </Box>
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
                                        <Box className="wc-main-image1-div">
                                            <img className="wc-main-image1-tag" src={data.image} />
                                        </Box>
                                        <Box className="wc-main-image1-heading">
                                            {data.heading}
                                        </Box>
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