import React, { useRef } from 'react'

const Hero = ({ hero: { title, btn1, btn2, text, img } }) => {
  const playerRef = useRef(true);
  return (
   <>
      <div className='flex flex-col bg-gradient-to-b from-[rgb(0,0,0)] to-[#657487] h-auto w-auto'>
        <div className='travigo-container grid items-start justify-items-center'>
          <div className='grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12'>
            <h1 className='text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-[#d6d3d1] filter drop-shadow-lg'>{title}</h1>
            <h1 className='text-7xl flex font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-[#4fadd8] filter drop-shadow-lg'>Then Go <h1 className='ml-3 text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-[#d6d3d1] filter drop-shadow-lg'>Explore</h1>
            </h1>
            <p className='text-base text-[#cffafe] my-5 text-center sm:text-sm'>{text}</p>
            <div className='flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full'>
              <button type='button' className='button-emrald'>{btn1}</button>
              <button type='button' className='button-light'>{btn2}</button>
            </div>
          </div>
          <div className='flex items-center justify-center mb-11'>
            
            <img src={img} alt='dashbaord/img' className='h-[85vh] w-[900px] object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] sm:object-contain drop-shadow-emrald rounded-[3rem]'/>
            {/* <ReactPlayer url={video}  className='h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] sm:object-contain drop-shadow-emrald'/> */}
          </div>
        </div>
      </div>
   </>
  )
}

export default Hero