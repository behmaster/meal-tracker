import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router"

function EditMealForm() {
    const navigate = useNavigate()
    const { id } = useParams()

    const [ meal, setMeal ] = useState({
        name: "",
        user_id: "",
        recipe: "",
    })

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`http://localhost:4000/meals/${id}`);
          const resData = await response.json();
          setMeal(resData);
        };
        fetchData();
      }, [id]);

      async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:4000/meals/${meal.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(meal)
		})
		navigate(`/meals/${meal.id}`)
	}

    return(
        <main>
			<h1>Edit Meal</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Meal Name</label>
					<input
						required
						value={meal.name}
						onChange={e => setMeal({ ...meal, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="recipe">Recipe</label>
					<textarea
						required
						value={meal.recipe}
						onChange={e => setMeal({ ...meal, recipe: e.target.value })}
						className="form-control"
						id="recipe"
						name="recipe"
					/>
				</div>
				<a className="btn btn-secondary" onClick={() => navigate(`/meals/${meal.id}`)}>Go Back</a>
				<input className="btn btn-primary" type="submit" value="Save" />
			</form>
		</main>
    )
}

export default EditMealForm