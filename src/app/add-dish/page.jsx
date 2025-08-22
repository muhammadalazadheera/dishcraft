"use client";
import { useState } from "react";
import HomeLayout from "../HomeLayout";

export default function AddDishForm() {
  const [dish, setDish] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
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
    console.log("Dish Submitted:", dish);
    alert("Dish added! Check console.");
  };

  return (
    <HomeLayout>
      <div className="overflow-auto max-h-[80vh] p-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-2xl font-bold">Add New Dish</h2>

          <input
            type="text"
            name="name"
            value={dish.name}
            onChange={handleChange}
            placeholder="Dish Name"
            className="w-full border p-2 rounded"
          />

          <textarea
            name="description"
            value={dish.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-2 rounded"
            rows={4}
          />

          <input
            type="number"
            name="price"
            value={dish.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="imageUrl"
            value={dish.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border p-2 rounded"
          />

          {/* Ingredients */}
          <div>
            <h3 className="font-semibold mb-1">Ingredients</h3>
            {dish.ingredients.map((ing, index) => (
              <input
                key={index}
                type="text"
                value={ing}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
                className="w-full border p-2 rounded mb-2"
              />
            ))}
            <button
              type="button"
              onClick={addIngredientField}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              + Add Ingredient
            </button>
          </div>

          {/* Nutritional Values */}
          <div>
            <h3 className="font-semibold mb-1">Nutritional Values</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(dish.nutritionalValues).map(([key, value]) => (
                <input
                  key={key}
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleNutritionalChange}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  className="border p-2 rounded"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded font-semibold"
          >
            Save Dish
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}
