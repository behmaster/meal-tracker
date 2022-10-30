import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextTruncate from 'react-text-truncate';

function MealIndex() {
  const navigate = useNavigate();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/meals`);
      const resData = await response.json();
      setMeals(resData);
    };
    fetchData();
  }, []);



  let showMeals = meals.map((meal) => {
    return (
      <div className="col-sm-6" key={meal.id}>
        <h3>
          <a href="#" onClick={() => navigate(`/meals/${meal.id}`)}>
            {meal.name}
          </a>
        </h3>
        <TextTruncate line={3} element="span" truncateText="…" text={meal.recipe} />
      </div>
    );
  });

  return (
    <main>
      <h1>Meal View</h1>
      <div className="row">{showMeals}</div>
    </main>
  );
}
export default MealIndex;
