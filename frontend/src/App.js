// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import React from 'react'

import Home from './Home'
import LoginForm from './users/LoginForm'
import SignUpForm from './users/SignUpForm'
import Schedule from './schedule/Schedule'
import MealView from './meals/MealView'
import NewMealForm from './meals/NewMealForm'
import MealDetails from './meals/MealDetails'
import EditMealForm from './meals/EditMealForm'
import Header from './Header'
import CurrentUserProvider from './contexts/CurrentUser'



function App() {
  return (
    <div>
    <CurrentUserProvider>
      <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/sign-up" element={<SignUpForm />} />
          <Route exact path="/meals" element={<MealView />} />
          <Route exact path="/meals/new" element={<NewMealForm />} />
          <Route exact path="/meals/:id" element={<MealDetails />} />
          <Route exact path="/meals/:id/edit" element={<EditMealForm />} />
          <Route exact path="/schedule" element={<Schedule />} />
        </Routes>
        </Container>
      </BrowserRouter>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
