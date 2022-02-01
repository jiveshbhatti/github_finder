import React from 'react'
import loadingGif from './assets/isLoading.gif'
export default function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img src={loadingGif} alt='loading'/>
      
    </div>
  )
}
