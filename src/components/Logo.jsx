import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='px-4 py-1'>
      <img src="https://cdn-icons-png.flaticon.com/128/3669/3669967.png" alt="" 
      className='h-10 w-10  rounded-lg sm:h-12 sm:w-12'
      />
    </div>
  )
}


export default Logo