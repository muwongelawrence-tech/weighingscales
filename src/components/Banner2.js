import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner2() {
  return (
    <div className = " relative  h-screen bg-banner_background bg-cover bg-no-repeat bg-center ">
      
      
      {/* bg-gradient-to-t from-gray-500 to-gray-800  */}
      {/* bg-banner_background bg-cover bg-no-repeat bg-center bg-opacity-0 */}
      <div className=' h-screen  w-full bg-gradient-to-t from-gray-400 to-gray-500   '/>

     <div className=' absolute p-10 top-40 left-80 z-40'>

      <h2 className='text-4xl text-white my-4 pl-6 '>
           Hiweigh TECH systems limited. 
      </h2>
      
      <div className=' border-t-2 w-[550px] h-4 border-gray-50 '/>

      <div className=' w-[500px] h-96 pl-6'>
      
       <p className=' text-base text-white text-center'>
            We are a registered company governed by rules and licensed by UNBS dealing in sales,
            service , calibration and stamping of weighing Scales.
            Our Solutions are but not limited to Selling of new Weighing Scales,
            Calibration Services and Maintenance.
      </p>

     </div>

   </div>

    





    {/* <div className = " relative  w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/> */}
   
   
{/* 
     <Carousel
        autoPlay 
        infiniteLoop
        showStatus = {false }
        showIndicators = { false }
        showThumbs = { false }
        interval = { 5000 }
        > 
        <div>
            <img  loading = "lazy" src="/scales/pexels-mali-maeder-50634.jpg" alt="first"/>
        </div>

        <div>
            <img  loading = "lazy" src="/scales/pexels-mali-maeder-50634.jpg" alt="second"/>
        </div>
        
        <div>
        <img  loading = "lazy"  src="/scales/pexels-mali-maeder-50634.jpg" alt="third"/>
        </div>
        
        </Carousel> */}
  </div>
  );
}

export default Banner2