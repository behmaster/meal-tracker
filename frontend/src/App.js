// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import React from 'react'

import Home from './Home'
import LoginForm from './users/LoginForm'
import SignUpForm from './users/SignUpForm'
// import Schedule from './schedule/schedule'
import MealView from './meals/MealView'
import NewMealForm from './meals/NewMealForm'
import MealDetails from './meals/MealDetails'
import EditMealForm from './meals/EditMealForm'
import Header from './Header'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Container>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/sign-up" element={<SignUpForm />} />
          <Route exact path="/meals" element={<MealView />} />
          <Route exact path="/meals/new" element={<NewMealForm />} />
          <Route exact path="/meals/:id" element={<MealDetails />} />
          <Route exact path="/meals/:id/edit" element={<EditMealForm />} />
        </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
