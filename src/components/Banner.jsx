import React from 'react'

const Banner = ({ bannerAPI: { title, text, btnText, imgSrc } }) => {
  return (
   <> <div className='w-full pt-12 h-[70vh] bg-gradient-to-b from-[hsl(0,0%,0%)]  to-[#5e7088] '>
      <div className='relative w-full max-w-5xl ml-auto mr-auto mt-0 mb-3 xl:w-[95vw] rounded-lg '>
        <div className='relative flex items-center'>
            <img src={imgSrc} alt='banner/api' className='h-[65vh] w-full rounded-lg' />
        </div>
        <div className='absolute top-24 left-12 w-full flex flex-col items-start md:items-center md:justify-center md:left-0 md:top-14'>
            <h1 className='text-[35px] font-bold text-slate-100 drop-shadow-lg filter'>{title}</h1>
            <p className='text-base sm:text-sm text-[#b1cefc]'>{text}</p>
            <button type='button' className='py-1.5  bg-gradient-to-b from-[#06d3f3] to-[#0662f7] shadow-lg shadow-[#6a92cb] rounded-full text-lg sm:text-sm px-9 mt-3 transition-all duration-200 active:scale-90 text-slate-200 sm:w-48'>{btnText}</button>
        </div>
      </div>
      </div>
   </>
  )
}

export default Banner