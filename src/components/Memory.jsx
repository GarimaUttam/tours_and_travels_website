import React from 'react'

const Memory = ({ memory: { title, text, subtitle, img, experience } }) => {
    // console.log(memory)
  return (
   <>
      <div className='relative md:mb-7 bg-gradient-to-b from-[#657487] to-[rgb(0,0,0)]'>
        <div className='travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse'>
            <div className='flex items-center justify-start lg:justify-center w-full max-w-md'>
                <img src={img} alt="memory/img" className='w-auto h-[55vh] object-fill rounded-tr-[15rem] rounded-bl-[15rem] pb-5' />
            </div>
            <div className='grid items-center w-full max-w-2xl lg:text-center'>
                <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-[#d6d3d1] filter drop-shadow-lg'>{title}</h1>
                <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-[#89d5ef] filter drop-shadow-lg'>{subtitle}</h1>
                <p className='text-base my-5 sm:text-sm text-[#d6d3d1]'>{text}</p>
                <div className='grid items-center grid-cols-3 gap-7 xl:gap-3'>
                    {experience?.map((val, i) => (
                        <div key={i} className="bg-gradient-to-b from-[#22d3ee] to-[#3b82f6] shadow-lg shadow-[#4f668a] flex items-center justify-center flex-col py-7 px-5 xl:p-5 rounded-lg text-[#d6d3d1] filter cursor-pointer hover:scale-105 transition-all duration-400">
                            <h1 className='text-3xl xl:text-2xl sm:text-xl font-bold drop-shadow-lg'>{val.number}</h1>
                            <p className='text-lg xl:text-base sm:text-sm xsm:text-xs font-medium'>{val.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
   </>
  )
}

export default Memory