import { Box, Grid, Container } from "@mui/material";

export default function ContactFooter() {
    return (
        <>
            <Box className="contact-footer-main-div">
                <Container className="contact-footer-main-div">
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={8} lg={4} sm={4}>
                            <Box component='h2' className="contact-footer-text-heading">
                                CONTACT INFO
                            </Box>
                            <Box>
                                <img className="contact-footer-image-logo" src="https://florexpump.com/wp-content/uploads/2018/08/logo-2.png" />
                            </Box>
                            <Box className="contact-footer-text">

                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4} lg={4} sm={4}>
                            <Box component='h2' className="contact-footer-text-heading">
                                QUICK LINKS
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4} lg={4} sm={4}>
                            <Box component='h2' className="contact-footer-text-heading">
                                OUR PRODUCTS
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}