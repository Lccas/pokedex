import { Container }  from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './index.css';

function Footer() {
    return(
        <footer>
        <Box className="footerBox">
            <Container className="footerContainer">
                <Grid container spacing={2}>
                    <Grid item xs={4} sm={4}>
                        <Box>
                            <Link href="https://github.com/Lccas">
                                <GitHubIcon className="githubIcon"/>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <Box>
                            <Link href="https://www.instagram.com/leoboakk/">
                                <InstagramIcon className="instagramIcon" />
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <Box>
                            <Link href="https://www.linkedin.com/in/leonardocarvalho133/">
                                <LinkedInIcon  className="linkedinIcon"/>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 8}}>
                    Leonardo Carvalho Dev @ 2022
                </Box>
            </Container>
        </Box>
        </footer>
    )
}

export default Footer;