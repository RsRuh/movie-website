import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Popular from './components/Popular/Popular';
import Upcoming from './components/Upcoming/Upcoming';
import TopTated from './components/TopRated/TopTated';
import TvShows from './components/TvShows/TvShows';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    { path: '/', children: [
      { path: '/home',
      loader: async()=>{
        return fetch('text.json')
        
      },
      element: <Home></Home> },
      { path: 'popular', element: <Popular></Popular> },
      { path: 'upcoming', element: <Upcoming></Upcoming> },
      { path: 'top_rated', element: <TopTated></TopTated> },
      { path: 'tv_shows', element: <TvShows></TvShows> }
    ], element: <Main></Main> },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
