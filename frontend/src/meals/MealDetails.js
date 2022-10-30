import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

function MealDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
//   const { currentUser } = useContext(CurrentUser);
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/meals/${id}`);
      const resData = await response.json();
      setMeal(resData);
    };
    fetchData();
  }, [id]);

  let showMeal = ((meal) => {
    return (
      <div className="col-sm-6" key={meal.id}>
        <h3>
            {meal.name}
        </h3>
        <p className="text-center">{meal.recipe}</p>
      </div>
    );
  });

  return (
    <div className="col-sm-6" key={meal.id}>
        <h3>
            {meal.name}
        </h3>
        <p className="text-center">{meal.recipe}</p>
      </div>

  )
}

export default MealDetails;
