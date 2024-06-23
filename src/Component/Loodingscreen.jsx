import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Loodingscreen = ({ endLoading }) => {
  return (
    <div className='bg-black w-screen h-screen flex justify-center items-center'>
      <div className='rounded-full w-4 h-4 flex justify-center items-center bg-white circle'>
        {/* <p className='text'>click the link</p> */}
        <button onClick={endLoading} class="text border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">

  <div class="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
  <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
  <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
  <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
  <p class="flex items-center group z-10">Continue <Icon className='group-hover:translate-x-6  ' width={35} icon="grommet-icons:form-next-link"  /> </p>
</button>


      </div>
    </div>
  );
};

export default Loodingscreen;
