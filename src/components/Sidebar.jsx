import React,{ useState } from "react";

const Sidebar = ({documents, onSelect}) => {
    return(
        <div className="sidebar">
            <h2>Мой документ</h2>
            <ul>
                {documents.map((doc) => {
                    <li key={doc.id} onClick={() => onSelect(doc.id)}>
                        {doc.title}
                    </li>
                })}
            </ul>
            <button onClick={() => onSelect(null)}>Создать новый документ</button>
        </div>
    )
}

export default Sidebar;