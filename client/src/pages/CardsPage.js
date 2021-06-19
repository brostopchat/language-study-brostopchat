import React, {useState} from 'react';

export const CardsPage = () => {
    const [card, setCard] = useState(null)
    return (
        <div>
            <div>
                <h1>
                    Card Page
                </h1>
            </div>
            <div className="board">
                <div className="card">
                    <h4>Frog</h4>
                    <h5>Лягушка</h5>
                </div>
                <div className="card">
                    <h4>Apple</h4>
                    <h5>Яблоко</h5>
                </div>
                <div className="card">
                    <h4>Table</h4>
                    <h5>Стол</h5>
                </div>
                <div className="card">
                    <h4>Door</h4>
                    <h5>Дверь</h5>
                </div>
                <div className="card">
                    <h4>Dog</h4>
                    <h5>Собака</h5>
                </div>
                <div className="card">
                    <h4>Ukraine</h4>
                    <h5>Украина</h5>
                </div>
                <div className="card">
                    <h4>Juice</h4>
                    <h5>Сок</h5>
                </div>
                <div className="card">
                    <h4>書く</h4>
                    <h5>Писать</h5>
                </div>
                <div className="card">
                    <h4>話す</h4>
                    <h5>Говорить</h5>
                </div>
                <div className="card">
                    <h4>行く</h4>
                    <h5>Идти</h5>
                </div>
                <div className="card">
                    <h4>Молоко</h4>
                    <h5>Mléko</h5>
                </div>
                <div className="card">
                    <h4>Книга</h4>
                    <h5>Rezervovat</h5>
                </div>
            </div>
        </div>
    )
}