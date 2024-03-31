import { Container, Grid, Typography } from "@mui/material"
import image from "../../assets/head.png"

import "./main.css"
const Main = () => {
    return (
        <main className="main">
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Typography variant="h4" sx={{pt:5, m: 2, textAlign: 'start'}}>
                        Send Email without email and by @sender
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <img src={image} alt="head background" className="main-image"/>
                </Grid>
            </Grid>
            <Container>
            </Container>
        </main>
    )
}

export default Main