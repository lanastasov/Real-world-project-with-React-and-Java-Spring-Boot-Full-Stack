import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap'
import movies from '../movies'
import Movies from '../components/Movies';
import axios from 'axios'
import { fetchData } from '../util/helper';

const HomeScreen = () => {




    const [movies, setMovies] = useState([])
    const MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?api_key=134394aa4ce3b3f13628fa60f2f17bfe';


    useEffect(() => {
        const axiosMovies = async() => {
            const response = await fetchData('movie/popular');
            console.log(response);
            setMovies(response.results);
        }
        axiosMovies();

    }, [])



    return (
       <>
        Latest Movies

        <Row>
            {movies.map(movie => (
                <Col key={movie.id} sm={12} md={4} lg={4}xl={3}>
                    <Movies movie={movie} />
                </Col>
            ))}

        </Row>
       
       </>
        
        
        );
}
 
export default HomeScreen;