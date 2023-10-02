import React from 'react'

const Newslatter = () => {
  return (
   <><div className='bg-[#5e7088] '>
      <div className='p-6 bg-[#0788eb]/70 ring-1 ring-emerald-200 shadow-md shadow-[#267bbd] rounded-lg max-w-5xl w-full ml-auto mr-auto mt-0 xl:w-[95vw] relative top-12 '>
        <div className='flex items-center justify-between lg:flex-col lg:gap-7'>
            <div className='grid items-center sm:text-center'>
                <h1 className='text-4xl md:text-3xl sm:text-2xl filter drop-shadow-lg font-bold text-[#7730cf]
                '>Get In Touch With Us</h1>
                <p className='text-base sm:text-sm xsm:text-xs font-medium'>Questions and Feedback? We would love to hear for you.</p>
            </div>
            <form className='flex items-center justify-center relative'>
                <input
                    placeholder='Email Address'
                    name='email'
                    type={'email'}
                    className="py-2 px-5 ring-1 ring-slate-400 flex items-center shadow-md shadow-[#7730cf] w-96 lg:w-[85vw] text-base rounded-full relative placeholder:text-slate-500 focus:outline-[#6b30b3]"
                />
                <button
                    type='button'
                    className='text-base px-9 py-2 text-white bg-gradient-to-t from-[#7e22ce] to-[#c026d3] rounded-r-full transition-all duration-200 active:scale-90 absolute right-0 shadow-lg shadow-[#7f57af]'
                >
                    Submit
                </button>
            </form>
        </div>
      </div>
      </div>
   </>
  )
}

export default Newslatter