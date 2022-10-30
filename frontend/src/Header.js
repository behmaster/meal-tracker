import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { CurrentUser } from './contexts/CurrentUser';

function Header() {
    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.first_name} {currentUser.last_name}
            </li>
        )
    }

    return(
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => navigate("/")}>
                        Weekly Planner
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => navigate("/meals")}>
                        Meals
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => navigate("/meals/new")}>
                        Build a Meal
                    </a>
                </li>
                {loginActions}
            </ul>
        </nav>
    )
}

export default Header