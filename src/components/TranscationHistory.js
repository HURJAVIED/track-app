import React from 'react'

export const TranscationHistory = () => {
    return (
        <div>
            <h3>Transcation History</h3>
            <ul className="list">
                <li className="plus">
                    project1 income
                    <span>$5000</span>
                    <button className="delete-btn">X</button>

                </li>
                <li className="minus">
                    project2 expense
                    <span>$2000</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}
