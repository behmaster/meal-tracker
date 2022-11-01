import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

function MealDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  //   const { currentUser } = useContext(CurrentUser);
  const [meal, setMeal] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/meals/${id}`);
      const resData = await response.json();
      setMeal(resData);
    };
    fetchData();
  }, [id]);

  function editMeal() {
    navigate(`/meals/${meal.id}/edit`)
}

async function deleteMeal() {
    await fetch(`http://localhost:4000/meals/${meal.id}`, {
        method: 'DELETE'
    })
    navigate('/meals')
}

  return (
    <>
      <div class="meal-details" key={meal.id}>
        <h3>{meal.name}</h3>
        <p className="text-center">{meal.recipe}</p>
        <a className="btn btn-secondary" href={`/meals`}>Go Back</a>
        <a className="btn btn-warning" onClick={editMeal}>
          Edit
        </a>
        <button type="submit" className="btn btn-danger" onClick={deleteMeal}>
          Delete
        </button>
      </div>
    </>
  );
}

export default MealDetails;
