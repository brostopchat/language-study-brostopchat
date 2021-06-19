import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/authContext';
import { useMessage } from '../hooks/message.hook';

export const CreatePage = () => {
    const message = useMessage()
    const auth = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [link, setForm] = useState({
        title: '', subtitle: ''
    })


    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const cardSaveHandler = async () => {
        try {
            console.log(link)
            console.log(auth)
            const data = await request('/create', 'POST', {from: link}, {
                Authorization: `Bearer ${auth.token}`
              })
            message(data.message)
        } catch (e) { console.log(e) }
    }

    const changeHandler = event => {
        setForm({ ...link, [event.target.name]: event.target.value })
    }

    return (
        <div className="row">
        <div className="col s8 offset-3"
            style={{ float: 'none', marginLeft: 'auto', marginRight: 'auto' }}
        >
            <div className="card">
                <div className="card-content white-text block-size">
                    <div>

                        <div className="input-field col s12 auth-input">
                            <input
                                placeholder="Введите слово"
                                id="title"
                                type="text"
                                name="title"
                                className="yellow-input"
                                value={link.title}
                                onChange={changeHandler}
                                
                            />
                            <label htmlFor="first_name">Слово</label>
                        </div>

                        <div className="input-field col s12 auth-input">
                            <input
                                placeholder="Введите перевод"
                                id="subtitle"
                                type="text"
                                name="subtitle"
                                className="yellow-input"
                                value={link.subtitle}
                                onChange={changeHandler}
                            />
                            <label htmlFor="first_name">Перевод</label>
                        </div>


                    </div>
                </div>
                <div className="card-action">
                    <button
                        className="btn yellow darken-4"
                        style={{ marginRight: 10 }}
                        onClick={cardSaveHandler}
                        disabled={loading}
                    >
                        Создать
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}