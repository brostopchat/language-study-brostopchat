import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/register', 'POST', { ...form })
            message(data.message)
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) { }
    }

    return (
        <div className="row">
            <div className="col s8 offset-3"
                style={{ float: 'none', marginLeft: 'auto', marginRight: 'auto' }}
            >
                <h1>Language study</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text block-size">
                        <span className="card-title">Авторизация</span>
                        <div>

                            <div className="input-field col s12 auth-input">
                                <input
                                    placeholder="Введите email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="yellow-input"
                                    value={form.email}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="first_name">email</label>
                            </div>

                            <div className="input-field col s12 auth-input">
                                <input
                                    placeholder="Введите пароль"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="first_name">password</label>
                            </div>


                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{ marginRight: 10 }}
                            onClick={loginHandler}
                            disabled={loading}
                        >
                            Войти
                        </button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}