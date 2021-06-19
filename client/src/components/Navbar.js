import React, {useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/main')
    }

    return (
        <nav>
            <div className="nav-wrapper #3949ab indigo darken-1">
                <span className="brand-logo">Language-study</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to={"/main"}>Главная</NavLink></li>
                    <li><NavLink to={"/translete"}>Переводчик</NavLink></li>
                    <li><NavLink to={"/create"}>Создать карточки</NavLink></li>
                    <li><NavLink to={"/cards"}>Мои карточки</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}