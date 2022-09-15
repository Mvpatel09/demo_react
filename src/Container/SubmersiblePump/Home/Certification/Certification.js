import { Box, Grid, Container } from "@mui/material"

const data = [
    "https://florexpump.com/wp-content/uploads/2018/09/sub_logo3.png",
    "https://florexpump.com/wp-content/uploads/2018/09/sub_logo7.png",
    "https://florexpump.com/wp-content/uploads/2018/09/sub_logo1.png",
    "https://florexpump.com/wp-content/uploads/2018/09/sub_logo2.png",
    "https://florexpump.com/wp-content/uploads/2018/09/sub_logo5.png",
    "https://florexpump.com/wp-content/uploads/2018/09/sub_logo6.png"
]

export default function Certification() {
    return (
        <>
            <Container className="certification-main-container">
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item md={4} lg={4} sm={12} xs={12}>
                        <Box component="h1" className="certification-heading">
                            CERTIFICATION
                        </Box>
                        <Box className="certification-descrption">
                            Florex is enlisted as an authorized brand towards government purchases and government-sponsored supplies in most Indian States
                        </Box>
                    </Grid>
                    <Grid item md={8} lg={8} sm={12} xs={12}>
                        <Box>
                            <Grid container spacing={2}>
                                {
                                    data.map((data) => {
                                        return (
                                            <>
                                                <Grid item md={4} lg={4} sm={4} xs={4}>
                                                    <img src={data} />
                                                </Grid>
                                            </>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}