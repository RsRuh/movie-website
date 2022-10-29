import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import MovieCart from '../MovieCart/MovieCart';
import './Home.css'

const Home = () => {
    const movieApi = useLoaderData();

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img id='item1' src="https://img.freepik.com/free-photo/front-view-whiskey-with-orange-cognac-glass-with-copy-space_23-2148673804.jpg?w=1380&t=st=1665055573~exp=1665056173~hmac=d55793a2a5acd7321462d54f342668045bd76db09aae72958303c24eab68c372" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="text-4xl text-white">❮</a>
                        <a href="#slide2" className="text-4xl text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img id='item2' src="https://img.freepik.com/free-vector/set-stemware-glasses-with-cocktail_1441-122.jpg?w=740&t=st=1665055692~exp=1665056292~hmac=8897bf77941c85a2e5b339e85efe1d91bb3eb6fda5e392087eba117faf07a4f0" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="text-4xl text-white">❮</a>
                        <a href="#slide3" className="text-4xl text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img id='item3' src="https://img.freepik.com/free-vector/realistic-beer-promo-template-with-ice-cubes_52683-67884.jpg?w=740&t=st=1665055721~exp=1665056321~hmac=b69f5142c21c64fd6851e1c02385f6590ddcc7580c01044795ca1e0a86df43ed" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="text-4xl text-white">❮</a>
                        <a href="#slide4" className="text-4xl text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img id='item4' src="https://img.freepik.com/free-vector/mojito-bottle-glass-with-liquor-lime-ice_33099-1801.jpg?w=740&t=st=1665055775~exp=1665056375~hmac=d36dc42c44e970966d6f8ffce54a648318759ad8b1213fabb65c664795115b40" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="text-4xl text-white">❮</a>
                        <a href="#slide1" className="text-4xl text-white">❯</a>
                    </div>
                </div>
            <div className="flex top-[640px] absolute justify-center w-full py-2 gap-2">
                <a href="#item1" className="badge bg-white badge-xs"></a>
                <a href="#item2" className="badge bg-white badge-xs"></a>
                <a href="#item3" className="badge bg-white badge-xs"></a>
                <a href="#item4" className="badge bg-white badge-xs"></a>
            </div>
            </div>
            <h1 className='text-3xl mt-10 ml-5 font-bold'>What's Popular</h1>

            
         <div className='relative flex items-center'>
            <div className='flex w-full h-[500px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
            {
                movieApi.map(movie => <MovieCart key={movie.id} movie={movie}></MovieCart>)
            }
          </div>
         </div>
         <div>
            <h1>This is </h1>
         </div>
        </div>
    );
};

export default Home;