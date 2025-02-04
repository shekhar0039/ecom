import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from 'react-icons/io5';
import { IoClose } from "react-icons/io5";

import { MyContext } from '../../App';

function CountryDropDown() {

    const [isOpenModal, setisOpenModal] =useState(false)

    const context =useContext(MyContext);

   
    return (
        <>
            <Button className='countryDrop' onClick={()=>setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='lable'>Your Location</span>
                    <span className='name'>India</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>


            <Dialog  open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locationModal'>
                <h4 className='mb-0'>Choose Delivery Location</h4>
                <p>Enter Your AddressEnter Your AddressEnter Your Address</p>
                <Button className='close_' onClick={()=>setisOpenModal(false)}><IoClose/></Button>

                <div className='headerSearch w-100'>
                <input type='text' className="form-control" placeholder="Your Area..." />
                <Button className="btn">
                    <IoSearch />
                </Button>
            </div>
            <ul ClassName="countryList mt-3">
                {
                context.countryList?.length!==0 && context.countryList?.map((item,index)=>{
                    return(
                        <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
                    )
                })
                }
                
                
            </ul>
            </Dialog>
        </>
    )
}

export default CountryDropDown