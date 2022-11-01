          <div id="container" className="container-fluid">
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
        </div>