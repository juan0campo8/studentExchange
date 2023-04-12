import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';


function Header() {
    return (
      

      
      <div className='header'> 
          
          <img  
              className='header_logo' 
              src='https://i.imgur.com/njMdepp.png'
              as={Link} to={"/"}
          />
  
                
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
  
            <div className='header_option'>
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
          <div>
            <Routes>
              <Route path='/Header' element = {<Header/>} />
              <Route path='/' element = {<Home/>} />
              <Route path='/SellItem' element = {<SellItem/>} />
            </Routes>
          </div>
      </div>
    )
  }
  
  export default Header