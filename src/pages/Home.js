import React from "react";
import bestSeller from '../images/bestSeller.png';
import fbt from '../images/fbt.png';
import reccomendations from '../images/reccomendations.png';
import crossSell from '../images/crossSell.png';
import '../css/App.css';
import { Outlet, Link } from "react-router-dom";
import FBT from '../components/FBT/FBT';
import CatRecs from '../components/Cart/CatRecs';

function Home() {
    
    return (
        <div className="home_root"><main><div className="header_1"><h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl">
        Click on Best Seller for Shopping...🚧 </h1></div><div className="header_2"><Link to="/productListing"><p>Best Seller</p><img src={bestSeller} alt='Best seller'></img></Link></div><div className="header_3"><Link to="/fbt"><p>Frequently Bought Together</p><img src={fbt} alt='Frequently Bought Together'></img></Link></div><div className="header_4"><Link to="/categoryProducts"><p>Recommendation</p><img src={reccomendations} alt='Recommendation'></img></Link></div><div className="header_5"><p>Cross Selling Products</p><img src={crossSell} alt='Recommendation'></img></div></main></div>
    ) 
}

export default Home;