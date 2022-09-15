import { Box, Container, Grid } from "@mui/material";

const data = [
    {
        img: "https://florexpump.com/wp-content/uploads/2018/09/florex_8.jpg",
        heading: "ENERGY SAVING",
        description: "We having the Best ever Products Which Can save More Electricity as Compared to the Other Products"
    },
    {
        img: "https://florexpump.com/wp-content/uploads/2018/09/csm_VAHLE-Icon-Maintenance-free_430c5c12f7.png",
        heading: "LESS MAINTENANCE",
        description: "Our Products Require Less Maintenance Because It’s Made Up of the High Quality Raw Material"
    },
    {
        img: "https://florexpump.com/wp-content/uploads/2018/09/download-1.png",
        heading: "ENERGY EFFICIENT",
        description: "Florex Pump Are More Energy Efficient So At the End It’s Beneficial To Your Pockets."
    },
    {
        img: "https://florexpump.com/wp-content/uploads/2018/09/florex_7.png",
        heading: "LONG DURABILITY",
        description: "High Quality Material And Best Workman Ship Can Give You the Long Durability that you can find in Florex Pump"
    },
    {
        img: "https://florexpump.com/wp-content/uploads/2018/09/images.png",
        heading: "GOVERNMENT APPROVED",
        description: "All of the Florex Products Are Government approved and Tested In Government Labs"
    },
    {
        img: "https://florexpump.com/wp-content/uploads/2018/09/florex_9.png",
        heading: "EXPORT QUALITY",
        description: "We are Exporting Our Pumps in different Countries ,so You Have No doubt About Our Products And services."
    },
]

export default function WhyWe() {
    return (
        <>
            <Box component="h1" className="why-we-heading-main">
                WHY WE ?
            </Box>
            <Container>
                <Grid container spacing={5}>
                    {
                        data.map((data) => {
                            return (
                                <>
                                    <Grid item md={4} lg={4} sm={12} xs={12}>
                                        <Grid container spacing={5}>
                                            <Grid item xs={3} md={4} lg={4} sm={12}>
                                                <Box>
                                                    <img className="why-we-image" src={data.img} />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={9} lg={9} sm={12}>
                                                <Box component="h2" className="why-we-heading">
                                                    {data.heading}
                                                </Box>
                                                <Box className="why-we-descrption">
                                                    {data.description}
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
            </Container>
        </>
    )
}