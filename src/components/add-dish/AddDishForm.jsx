"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddDishForm() {
  const [loading, setLoading] = useState(false);
  const [dish, setDish] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    ingredients: [""], // start with 1 empty input
    nutritionalValues: {
      calories: "",
      protein: "",
      fat: "",
      carbs: "",
    },
  });

  // Update text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDish({ ...dish, [name]: value });
  };

  // Update nutritional values
  const handleNutritionalChange = (e) => {
    const { name, value } = e.target;
    setDish({
      ...dish,
      nutritionalValues: { ...dish.nutritionalValues, [name]: value },
    });
  };

  // Update individual ingredient input
  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...dish.ingredients];
    updatedIngredients[index] = value;
    setDish({ ...dish, ingredients: updatedIngredients });
  };

  // Add new ingredient input
  const addIngredientField = () => {
    setDish({ ...dish, ingredients: [...dish.ingredients, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("https://dishcraft-ss.vercel.app/dish", dish)
      .then((response) => {
        setLoading(false);
        toast.success("Dish added successfully!");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response && error.response.status === 400) {
          // Validation errors
          error.response.data.errors.forEach((err) => {
            toast.error(err);
          });
        } else {
          toast.error("Failed to add dish.");
        }
      });
  };

  return (
    <form
      id="add-dish-form"
      onSubmit={handleSubmit}
      className="w-full md:w-[95%] mx-auto p-6 relative"
    >
      {loading && (
        <div className="w-full h-full absolute top-0 left-0 bg-black/80 flex justify-center items-center">
          <span class="loading loading-xl loading-spinner text-secondary"></span>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-6">Add New Dish</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Dish Name</label>
            <input
              type="text"
              name="name"
              value={dish.name}
              onChange={handleChange}
              placeholder="Enter dish name"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={dish.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full border p-2 rounded"
              rows={4}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={dish.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={dish.imageUrl}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Nutritional Values */}
          <div>
            <div className="space-y-2">
              {Object.entries(dish.nutritionalValues).map(([key, value]) => (
                <div key={key}>
                  <label className="block font-medium mb-1 capitalize">
                    {key}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={value}
                    onChange={handleNutritionalChange}
                    placeholder={`Enter ${key}`}
                    className="w-full border p-2 rounded"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-semibold mb-2 text-[#b75d69]">Ingredients</h3>
            {dish.ingredients.map((ing, index) => (
              <div key={index} className="mb-2">
                <label className="block font-medium mb-1">
                  Ingredient {index + 1}
                </label>
                <input
                  type="text"
                  value={ing}
                  onChange={(e) =>
                    handleIngredientChange(index, e.target.value)
                  }
                  placeholder={`Ingredient ${index + 1}`}
                  className="w-full border p-2 rounded"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredientField}
              className="btn bg-[#b75d69] text-white"
            >
              + Add Ingredient
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-block bg-[#0081a7] text-white mt-3"
      >
        Save Dish
      </button>
    </form>
  );
}
