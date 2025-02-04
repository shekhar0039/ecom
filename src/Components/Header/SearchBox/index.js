import React from 'react'
import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5';
function SearchBox() {
    return (
        <>
            <div className='headerSearch ml-3 me-3'>
                <input type='text' className="form-control" placeholder="Search..." />
                <Button className="btn">
                    <IoSearch />
                </Button>

            </div>
        </>
    )
}

export default SearchBox