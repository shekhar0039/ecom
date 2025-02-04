import React, { useContext } from 'react';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import CountryDropDown from '../CountryDropdown';
import { FaRegUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';


function Header() {

  const context=useContext(MyContext);
  return (
    <>
      <div className='headerWrapper'>
        <div className='top-strip'>
          <div className='container-fluid'>
            <p className='mb-0 mt-0 text-center bg-purple'>
              Due to <b>COVID-19</b> epidemic, order may be processed with a slight delay
            </p>
          </div>
        </div>
        <header className="header">
          <div className="container">
            <div className='row'>
              <div className='logoWrapper d-flex align-items-center col-sm-2'>
                <Link to={'/'}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className='col-sm-10 d-flex align-items-center part2'>
                {
                 context?.countryList?.length!==0 &&
                  <CountryDropDown/>
                }
               
                <SearchBox/>
                  <div className='part3 d-flex align-item-center ml-auto'>
                  <Button className="circle me-3">
                    <FaRegUser/>
                  </Button>
                  <div className="ml-auto cartTab d-flex align-item-center">
                    <span className='price'>$2.33</span>
                    <div className='position-relative ms-2'>
                    <Button className="circle">
                    <IoMdCart/>
                  </Button>
                  <span className='count d-flex align-item-center justify-content-center'>1</span>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </header>
        <Navigation/>

        
      </div>
    </>
  );
}

export default Header;
