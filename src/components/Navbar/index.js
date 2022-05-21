import { AppBar, Toolbar, Typography } from "@mui/material";
import './index.css';
import pokeball from '../../assets/pokeball.png';
import "@fontsource/roboto";

function Navbar() {
    return(
        <AppBar position='static'>
        <Toolbar className="header">
            <a href="#" className='linkPokeball'>
                <img src={pokeball} height={45} width={45} alt="pokeball" className='pokeballImage'/>
            </a>
            <Typography variant="h5" component="div" className="headerTitle">
              Pokedex
            </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;