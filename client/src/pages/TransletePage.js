import React from 'react';

export const TransletePage = () => {
    return (
        <div>
            <h1>
                Translete Page
            </h1>
            <select id="langs">
                <option value="rus" selected>Русский</option>
                <option value="eng">English</option>
            </select>
            <div className="transleteArea">
                <div className="transleteInputDiv">
                    <input className="transleteInput" type="text"></input>
                </div>
                <div className="transleteInputDiv">
                    <input className="transleteInput" type="text"></input>
                </div>
            </div>
            <button className="transleteButton">Перевести</button>

            <input type="file" id="file" />
            <div id="log"></div>
            <button type="button" id="start">Считать текст с изображения</button>
        </div>
    )
}