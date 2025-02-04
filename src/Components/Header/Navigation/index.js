import React from 'react'
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <>
    <nav>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-2 navpart1'>
                <Button className='allCatTab align-item-center'>
                  <span className='icon1 me-2'><IoIosMenu/></span>
                  <span class='text'>ALL CATEGORIES</span>
                  <span className='icon2 ms-2'><FaAngleDown/></span>
                </Button>
              </div>

              <div className='col-sm-10 navpart2 d-flex align-item-center'>
                <ul className='list list-inline '>
                  <li className='list-inline-item'><Link to="/"><Button> Home </Button></Link></li>
                  <li className='list-inline-item'><Link to="/"><Button> Fashion</Button></Link></li>
                  <li className='list-inline-item'><Link to="/"><Button> Electronic</Button></Link></li>
                  <li className='list-inline-item'><Link to="/"><Button> Bakery</Button></Link></li>
                  <li className='list-inline-item'><Link to="/"><Button> Grocery</Button></Link></li>
                  <li className='list-inline-item'><Link to="/"><Button> Mobiles</Button></Link></li>
                  <li className='list-inline-item'><Link to="/"><Button> Blog</Button></Link></li>
                  <li className='list-inline-item'><Link to="/"><Button> Contact</Button></Link></li>
                </ul>

              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navigation