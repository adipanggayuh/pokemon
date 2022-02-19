import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../../media/logopoke.png'
import Grid from '@mui/material/Grid';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
const Header = () => {


    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <Link to="/">
                                <img src={logo} alt='' height={70} />
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign={'right'}>
                        <Link to="/pokedex">
                            <Badge badgeContent={4} color="secondary">
                                <CatchingPokemonIcon color="action" />
                            </Badge>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
};
export default Header;
