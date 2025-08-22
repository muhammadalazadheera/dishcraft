import axios from "axios";
import React from "react";
import Link from "next/link";
import HomeLayout from "../HomeLayout";

async function AllDishes() {
  const response = await axios.get("http://localhost:5000/dishes");
  const dishes = await response.data;
  return (
    <HomeLayout>
      <div className="w-full md:w-[95%] mx-auto my-5">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {dishes.map((dish) => (
            <div
              key={dish._id}
              className="bg-white shadow overflow-hidden flex flex-col transition-shadow "
            >
              <img
                src={dish.imageUrl}
                alt={dish.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-2 text-[#b75d69]">
                  {dish.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 flex-grow">
                  {dish.description.length > 150
                    ? dish.description.substring(0, 150) + "..."
                    : dish.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-gray-800">${dish.price}</span>
                  <Link
                    href={`/dish/${dish._id}`}
                    className="px-3 py-1 text-sm text-white bg-[#0081a7]"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AllDishes;
