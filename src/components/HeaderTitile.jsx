import React from "react"

function HeaderTitile({ children }) {
  return (
    <div>
      <div className='hero'>
        <div className='text-center  hero-content'> </div>
        <div className='max-w-full'>
          <h1 className=' text-8xl   font-bold mb-8'>
            <div className='w-full flex justify-center'></div>
            <div>
              <h3 className='text-5xl mt-5 text-center mx-auto'>{children}</h3>
            </div>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HeaderTitile
