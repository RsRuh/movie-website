import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';
import Movies from '../components/Movies/Movies';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Movies></Movies>
            <Movie></Movie>
        </div>
    );
};

export default Main;