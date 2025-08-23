import HomeLayout from "@/app/HomeLayout";
import Call2Action from "@/components/HomePage/Call2Action";
import axios from "axios";

async function DishDetails({ params }) {
  const { id } = await params;
  const response = await axios.get(`https://dishcraft-ss.vercel.app/dish/${id}`);
  const dish = await response.data;
  return (
    <HomeLayout>
      <div className="w-full md:w-[95%] mx-auto my-5">
        <div className=" grid grid-cols-2">
          <div className="mt-5">
            <img
              className="mx-auto w-[400px] rounded-sm shadow"
              src={dish?.imageUrl}
              alt={dish?.name}
            />
          </div>
          <div className="">
            <h1 className="text-2xl font-extrabold text-[#b75d69] text-center">
              {dish?.name}
            </h1>

            <div className="">
              <p className="text-[#0081a7]">{dish?.description}</p>
            </div>
            <div className="mt-3">
              <h2 className="text-xl text-[#b75d69]">Ingredients</h2>
              <ul>
                {dish?.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-[#0081a7]">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3">
              <h2 className="text-xl text-[#b75d69]">
                Nutritional Information
              </h2>
              <ul>
                {Object.entries(dish?.nutritionalValues || {}).map(
                  ([key, value]) => (
                    <li
                      key={key}
                      className="text-[#0081a7] capitalize font-bold"
                    >
                      {key}: {value}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="mt-3">
              <p className="text-[#0081a7] font-bold">Price: ${dish?.price}</p>
              <button className="ml-auto mt-2 px-4 py-2 bg-[#0081a7] text-white rounded">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <Call2Action />
      </div>
    </HomeLayout>
  );
}

export default DishDetails;
