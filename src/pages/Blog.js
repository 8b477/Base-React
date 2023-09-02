import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from "axios";
import Articles from '../components/Articles';

const Blog = () => {
    //--------
    // Hook
    //--------
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState(false);
    const [blogData, setBlogData] = useState([]);

    useEffect(() => getData(), []);

    //--------
    // Logique
    //--------

    // A la soumisions de mon form je m'assure d'avoir respecter mes conditions si non je set une erreur.
    const handleSubmit = (e) => {
        e.preventDefault();

        if (content.length < 140) {
            setError(true);
        }
        else {
            // ajoute de la data de ma fake db via Axios
            // Fake DB géré via `json server`
            axios
                .post("http://localhost:3001/articles", {
                    author,
                    content,
                    date: Date.now()
                });
            setError(false);
            setAuthor("");
            setContent("");
            getData();
        }
    };
    // Récupe data de ma fake db via Axios
    // Fake DB géré via `json server`
    const getData = () => {
        axios
            .get("http://localhost:3001/articles")
            .then((res) => setBlogData(res.data));
    };
    //--------
    // Rendu
    //--------
    return (
        <div className="blog-container">
            <Logo />
            <Navigation />
            <h1>Blog</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder='Nom'
                    value={author}
                    onChange={(e) => {
                        setAuthor(e.target.value)
                    }}
                />
                <textarea
                    style={{ border: error ? "solid 1px red" : "solid 1px #61dafb" }}
                    placeholder='Message'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}>
                </textarea>

                {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
                <input
                    type="submit"
                    value="Envoyer"
                />
            </form>
            <ul>
                {blogData
                    .sort((a, b) => b.date - a.date)
                    .map((article) =>
                        (<Articles key={article.id} article={article} />)
                    )
                }
            </ul>
        </div>
    );
};

export default Blog;

//------------
// COMMENTAIRE
//------------
// Ligne 35, on injecte du style via à une ternaire ! c'est génial.