import React from 'react'

const Card = (elem) => {
  return (
    <div className='bg-red-400  p-4 h-65 text-center flex flex-wrap w-60  text-2xl rounded-2xl '>
      <h1 className='w-46 h-10 underline text-black-600  text-center'>Name</h1>
      <h2 className='w-46 h-10 underline text-black-600 text-center'>Gender</h2>
      <h2 className='w-46 h-10 underline text-black-600 text-center'>Color</h2>
      <h2 className='w-46 h-10 underline text-black-600 text-center'>Animal</h2>
      <button className='bg-red-600 text-center w-28 rounded-2xl active:scale-95 text-white'>Remove</button>
    </div>
  )
}

export default Card
