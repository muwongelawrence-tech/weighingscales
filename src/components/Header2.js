import React from 'react'
import DropDown from './DropDown';

function Header2() {
  return (
    <div className='flex justify-start p-6 bg-white space-x-2'>

        <DropDown menu='SCALES'/>
        <DropDown menu='PRECISCION'/>
        <DropDown menu='HEAVY WEIGHT'/>
        <DropDown menu='DIGITAL SCALES'/>
      
    </div>
  );
}

export default Header2;