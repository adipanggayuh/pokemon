import React, { useEffect, useState } from 'react';
import { Container, Grid, } from '@mui/material';
import axios from 'axios';
import { GET_POKEMON_LIST_URL } from '../constant/apiUrl';
import PokemonList from '../components/pokemonList/pokemonList';
import NavigationList from '../components/pokemonList/navigation';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [pokemonList, setPokemonList] = useState({
        count: "",
        next: "",
        previous: "",
        results: []
    })

    const fetchData = (url) => {
        axios.get(url).then((res) => {
            setPokemonList(res.data);
        })
    };
    useEffect(() => {
        fetchData(GET_POKEMON_LIST_URL);
    }, []);

    const onNext = () => {
        pokemonList.next && fetchData(pokemonList.next);
    };
    const onPrev = () => {
        pokemonList.previous && fetchData(pokemonList.previous);
    }

    return (
        <Container>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <PokemonList data={pokemonList.results} />
                <NavigationList onNextData={onNext} onPrevData={onPrev} />
            </Grid>
        </Container>
    )
}

export default Home;