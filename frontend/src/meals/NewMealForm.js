import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function NewMealForm() {
  const navigate = useNavigate();

  const [meal, setMeal] = useState({
    name: "",
    user_id: "1",
    recipe: "",
  });

  const [ingredient, setIngredient] = useState({
    name: "",
  });

  const [meal_ingredient, setMeal_ingredient] = useState({
    quantity: "",
    unit: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:4000/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meal),
    });
    navigate("/meals");
  }

  function addNewRow() {
    let table = document.getElementById("add-ingredients");
    let rowCount = table.rows.length;
    let cellCount = table.rows[0].cells.length;
    let row = table.insertRow(rowCount);
    for (let i = 0; i < cellCount; i++) {
      let cell = row.insertCell(i);
      if (i < cellCount - 1) {
        cell.innerHTML = '<input type="text" class="form-control" />';
      } else {
        cell.innerHTML =
          '<input class="btn btn-danger" type="button" value="delete" onclick="deleteRow(this)" />';
      }
    }
  }

  /* This method will delete a row */
  function deleteRow(ele) {
    let table = document.getElementById("add-ingredients");
    let rowCount = table.rows.length;
    if (rowCount <= 1) {
      alert("There is no row available to delete!");
      return;
    }
    if (ele) {
      //delete specific row
      ele.parentNode.parentNode.remove();
    } else {
      //delete last row
      table.deleteRow(rowCount - 1);
    }
  }

  return (
    <main>
      <h2>Build a New Meal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Meal Name</label>
          <input
            required
            value={meal.name}
            onChange={(e) => setMeal({ ...meal, name: e.target.value })}
            className="form-control"
            id="name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipe">Recipe Instructions</label>
          <textarea
            required
            value={meal.recipe}
            onChange={(e) => setMeal({ ...meal, recipe: e.target.value })}
            className="form-control"
            id="recipe"
            name="recipe"
          />
        </div>
        {/* <div id="container" className="container-fluid">
          <h3>Add Ingredients</h3>
          <Button onclick="addNewRow()" className="btn btn-primary">
            Add New Row
          </Button>
          <Button onclick="deleteRow()" className="btn btn-danger">
            Delete Row
          </Button>
          <Table
            striped
            bordered
            hovercd
            variant="light"
            responsive="md"
            attribute="data-align"
          >
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Name</th>

                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    required
                    value={meal_ingredient.quantity}
                    onChange={(e) =>
                      setMeal_ingredient({
                        ...meal_ingredient,
                        quantity: e.target.value,
                      })
                    }
                    className="form-control"
                    id="quantity"
                    name="quantity"
                  />
                </td>
                <td>
                  <input
                    required
                    value={meal_ingredient.unit}
                    onChange={(e) =>
                      setMeal_ingredient({
                        ...meal_ingredient,
                        unit: e.target.value,
                      })
                    }
                    className="form-control"
                    id="unit"
                    name="unit"
                  />
                </td>
                <td>
                  <input
                    required
                    value={ingredient.name}
                    onChange={(e) =>
                      setIngredient({ ...ingredient, name: e.target.value })
                    }
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </td>

                <td>
                  <span onClick={deleteRow}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-danger"></i>
                    </Button>
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
          <Button variant="primary" onClick={addNewRow} >Add New Row</Button> 
        </div> */}
        <input className="btn btn-primary" type="submit" value="Save Meal" />
      </form>
    </main>
  );
}

export default NewMealForm;
