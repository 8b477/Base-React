import axios from 'axios';
import React, { useState } from 'react';

const Articles = ({ article }) => {

    //------
    // State
    const [isEditing, setIsEditing] = useState(false);
    const [textEdit, setTextEdit] = useState("")

    //--------
    // Function
    const dateFormater = (date) => {
        let dateTransform = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        return dateTransform;
    }

    const handleEdit = () => {
        const data = {
            author: article.author,
            content: textEdit ? textEdit : article.content,
            date: article.date,
            updateDate: Date.now()
        };
        axios
            .put('http://localhost:3001/articles/' + article.id, data)
            .then(() => { setIsEditing(false) });
    };

    const handleDelete = () => {
        axios.delete("http://localhost:3001/articles/" + article.id);
        window.location.reload();
    };

    //-------
    // RENDER
    return (
        <div className='article' style={{ background: isEditing ? "#f3feff75" : "white" }}>
            <div className="card-header">
                <h3>{article.author}</h3>
                {
                    article.updateDate
                        ?
                        <em>Modifié le : {dateFormater(article.updateDate)}</em>
                        :
                        <em>Posté le {dateFormater(article.date)}</em>
                }
            </div>
            {
                isEditing
                    ?
                    <textarea
                        defaultValue={textEdit ? textEdit : article.content}
                        autoFocus
                        onChange={(e) => setTextEdit(e.target.value)}>
                    </textarea>
                    :
                    <p>{textEdit ? textEdit : article.content}</p>
            }
            <div className="btn-container">
                {
                    isEditing
                        ?
                        <button onClick={() => handleEdit()}>Valider</button>
                        :
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                }
                <button onClick={() => {
                    if (window.confirm("Voulez-vous vraiment supprimer cette article ?")) {
                        handleDelete();
                    }
                }}
                >Supprimer
                </button>
            </div>
        </div >
    );
};

export default Articles;