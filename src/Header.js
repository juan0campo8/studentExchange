import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
    return (
      

      
      <div className='header'> 
          
          <Link to='/'>
            <img className='header_logo' 
            src='https://i.imgur.com/njMdepp.png' 
            alt='Duck Exchange' />
         </Link>
  
                
          <div className='header_search'> 
              <input className='header_searchInput' 
              type='text' placeholder='Search Duck Exchange'/> 
              <SearchIcon className='header_searchIcon' />
          </div>
  
          <div className='header_nav'>      
            <div className='header_option'>
              <span 
              className='header_optionLineOne'>
                Sign</span>
              <span 
              className='header_optionLineTwo'>
                In</span>
            </div>
  
            <div className='header_option'>
              <span 
              className='header_optionLineOne'>
                Your</span>
              <span 
              className='header_optionLineTwo'>
                Orders</span>
            </div>
  
            <div className='header_option' onClick={() => navigate('/uploadItem')}>
              <span 
              className='header_optionLineOne'>
                Sell</span>
              <span 
              className='header_optionLineTwo'>
                item</span>
            </div>
  
            <div className='header_optionBasket'>
              <ShoppingBasketIcon />
              <span className='header_optionLineTwo header_basketCount'>0</span>
  
            </div>
          </div>   
      </div>
    )
  }
  
  export default Header