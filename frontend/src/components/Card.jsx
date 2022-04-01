import React from 'react'

export const Card = ({ name, data }) => {
  return (
    <div className="bg-lblue w-[360px] h-52 rounded-lg py-8 px-6 shadow-lg flex flex-col justify-around items-center">
      <h1 className='text-3xl font-semibold'>{name}</h1>
      <h1 className='text-lg'>{data}</h1>
    </div>
  )
}
