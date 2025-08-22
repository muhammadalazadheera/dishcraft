import React from 'react'
import DishCards from './DishCards'

function PopularDishes() {
  return (
    <div className='py-10'>
        <div className="mb-5">
            <h1 className="text-4xl md:text-6xl font-extrabold outlined-text text-center text-[#b75d69]">Popular Dishes</h1>
            <p className="text-xl text-center text-[#0081a7]">
                Discover our most popular dishes.
            </p>
        </div>
        <DishCards />
        <div className="px-4">
            <button className="py-2 bg-[#0081a7] btn-block text-white">
                View All Dishes
            </button>
        </div>
    </div>
  )
}

export default PopularDishes