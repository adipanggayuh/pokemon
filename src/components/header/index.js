import * as React from 'react';
import logo from '../../media/logopoke.png';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = () => {

    return (

        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link to="/">
                            <img src={logo} alt='' height={70} />
                        </Link>
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src={logo} alt='' height={70} />
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
        // <AppBar position="static">
        //     <Container maxWidth="lg">
        //         <Grid container spacing={2}>
        //             <Grid item xs={6}>
        //                 <Typography
        //                     noWrap
        //                     component="div"
        //                     sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        //                 >
        //                     <Link to="/">
        //                         <img src={logo} alt='' height={70} />
        //                     </Link>
        //                 </Typography>
        //             </Grid>
        //             <Grid item xs={6} textAlign={'right'}>
        //                 <Link to="/pokedex">
        //                     <Badge badgeContent={pokedex.length} color="secondary">
        //                         <CatchingPokemonIcon color="action" />
        //                     </Badge>
        //                 </Link>
        //             </Grid>
        //         </Grid>
        //     </Container>
        // </AppBar>
    );
};
export default Header;
