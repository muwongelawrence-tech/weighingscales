import { ChevronDownIcon } from '@heroicons/react/outline';
import React from 'react';

function DropDown({ menu }) {
  return (
    <div className=''>
        <p className='flex items-center'>
            { menu }

            <span className='ml-2'> 
                <ChevronDownIcon className='text-blue-600 h-2' />
            </span>
        </p>
    </div>
  );
}

export default DropDown;