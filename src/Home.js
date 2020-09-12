import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <div className = "home_container">
                <img
                className = "home_image"
                src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt =  ""></img>

            <div className ="home_row">
                <Product 
                id = "45856525"
                title = 'New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray' 
                price = {2000.99}
                image = "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg"
                rating = {4}
                />
                <Product 
                title = 'Apple MacBook Air (13-inch Retina display, 1.6GHz dual-core Intel Core i5, 128GB) - Space Gray (Renewed)' 
                price = {1599.99}
                image = "https://m.media-amazon.com/images/I/51-9oSG8jAL._AC_UY218_.jpg"
                rating = {3}
                />
                
            </div>

            <div className ="home_row">
            <Product 
                id = "45856525"
                title = 'HP 345495 Business Z27n G2 27" LED LCD Monitor - 16:9-5 ms GTG' 
                price = {341.99}
                image = "https://m.media-amazon.com/images/I/91j0hlxSykL._AC_UY218_.jpg"
                rating = {4}
                />
                
                <Product 
                id = "45856525"
                title = 'Apple MacBook Pro 13-inch 2.3GHz Core i5, 256GB - Space Gray - 2017 (Renewed)' 
                price = {999.99}
                image = "https://m.media-amazon.com/images/I/61o62q+1GUL._AC_UY218_.jpg"
                rating = {2}
                />
                
                
            </div>

            <div className ="home_row">
            <Product 
                id = "45856525"
                title = 'LG Commercial Lite UV340H 65UV340H 64.6 2160p LED-LCD TV - 16:9-4K UHDTV - ATSC - 178° / 178'
                image = "https://m.media-amazon.com/images/I/41bfIxjIetL._AC_UY218_.jpg"
                price = {1299.99}
                rating = {5}
                />
            </div>
        </div>
    </div>
    )
}

export default Home;
