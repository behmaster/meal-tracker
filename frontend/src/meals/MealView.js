import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextTruncate from 'react-text-truncate';
import Container from 'react-bootstrap/Container'

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
      <div style={{padding: 1.5 + 'em'}} className="col-sm-6" key={meal.id}>
        <h4>
          <a href={`/meals/${meal.id}`}>
            {meal.name}
          </a>
        </h4>
        <TextTruncate line={3} element="span" truncateText="…" text={meal.recipe} />
      </div>
    );
  });

  return (
    <main >
      <h1>Meal View</h1>
      <div className="row">{showMeals}</div>
    </main>
  );
}
export default MealIndex;
