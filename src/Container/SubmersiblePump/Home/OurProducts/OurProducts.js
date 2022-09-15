import { Box } from "@mui/system";
import { Grid } from "@mui/material";

export default function OurProducts() {
    return (
        <>
            <Box className="our-product-main-heading" component='h1'>
                OUR PRODUCTS
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box className='our-product-child-div'>
                            <Box component='h2' className="our-product-heading">
                                SUBMERSIBLE PUMP
                            </Box>
                            <Box className="our-product-heading">
                                A submersible pump pushes water to the surface by converting rotary energy into kinetic energy into pressure energy. This is done by the water being pulled into the pump.
                            </Box>
                            <Box className="our-product-heading">
                                <img className="our-product-img" src="https://florexpump.com/wp-content/uploads/2018/09/florex_pump_1-5-300x263.png" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box className='our-product-child-div'>
                            <Box className="our-product-heading">
                                <img className="our-product-img" src="https://florexpump.com/wp-content/uploads/2018/09/11-300x263.png" />
                            </Box>
                            <Box component='h2' className="our-product-heading">
                                OPENWELL PUMP
                            </Box>
                            <Box className="our-product-heading">
                                An Openwell Submersible Pump In Stainless Steel Motor Body Construction. It Has Wide Applications In Agriculture And Domestic Segment. Designed For Underwater Applications
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box className='our-product-child-div'>
                            <Box component='h2' className="our-product-heading">
                                CABLES
                            </Box>
                            <Box className="our-product-heading">
                                A self-priming pump is a pump that will clear its passages of air and start pumping. .A self-priming pump can mix air and water to create a pump able fluid on which it operates until it is fully primed.
                            </Box>
                            <Box className="our-product-heading">
                                <img className="our-product-img" src="https://florexpump.com/wp-content/uploads/2018/09/Florex_cables-300x263.png" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}