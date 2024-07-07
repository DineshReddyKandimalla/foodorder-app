import { useState, useEffect } from "react";
import Items from "./item";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          console.error("Failed to fetch meals");
          return;
        }

        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <Items key={meal.id} meal={meal}/>
      ))}
    </ul>
  );
}
