import React from 'react'

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
  return (
   <>
      <footer className='bg-black pt-24 pb-7'>
        <div className='grid items-center grid-cols-3 justify-items-center'>
          {titles?.map((val, i) => (
            <div key={i} className="grid items-center justify-items-center">
              <h1 className='text-xl lg:text-base uppercase font-semibold text-slate-100'>{val.title}</h1>
            </div>
          ))}
          {links?.map((list, i) => (
            <ul key={i} className="grid items-center justify-items-center gap-1 text-slate-300">
              {list?.map((val, i) => (
                <li key={i} className="font-mono text-sm sm:text-xs">{val.link}</li>
              ))}
            </ul>
          ))}
        </div>
        <div className='w-7/12 lg:w-[95vw] m-auto mt-9'>
          <div className='h-[0.1vh] bg-white/30 my-7 md:my-5'></div>
          <div className='flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse text-slate-200'>
            <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights 2023 <span className='font-semibold'>IIIDMJ DEVELOPERS</span></p>
            <div className='flex items-center gap-3'>
              {sociallinks?.map((val, i)=> (
                <img key={i} src={val.icon} alt="social/icons" className='w-7 h-7' />
              ))}                
            </div>
          </div>
        </div>
      </footer>
   </>
  )
}

export default Footer