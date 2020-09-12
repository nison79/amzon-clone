import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";





function Header() {

    const [{ basket,user }, dispatch] = useStateValue();

    const handleAuthetication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className ="header">
            <Link to = "/">
            <img 
            className = "header_logo"
            src = "https://completemusicupdate.com/wp-content/uploads/2016/05/amazon1250.jpg"
            ></img>

            </Link>


            <div 
            className ="header_search">
                <input
                className = "header_searchInput"
                type="text"/>
                <SearchIcon className = "header_searchIcon"/>
            </div>

        

            <div className = "header_nav">
                <Link to = {!user &&'/login'}>
                <div  onClick={handleAuthetication} className = "header_option">
                    <span className = "header_option_lineOne">
                    Hello
                    {!user ?
                    'Guest': user.email}
                    </span>
                    <span className = "header_option_lineTwo">{user ?
                    'Sign Out' : 'Sign In'} </span>
                </div>
                </Link>

                <div className ="header_option">
                    <span className = "header_option_lineOne">
                    Returns 
                    </span>
                    <span className = "header_option_lineTwo">
                    & Orders
                    </span>
                </div>

                <div className ="header_option">
                    <span className = "header_option_lineOne">
                    Your
                    </span>
                    <span className = "header_option_lineTwo">
                    Prime
                    </span>
                </div>


                <Link to ="/checkout">
                <div className ="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className = "header_option_lineTwo header_basketCount">{basket?.length}</span>
                </div>
                </Link>

            </div>
        </div>
        
    )
}

export default Header;
