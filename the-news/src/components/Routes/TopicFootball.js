import { useEffect, useState } from "react";
import {fetchFootballArticles} from '../API/FootballArticles';
import footballpic from '../../images/football.jpg';

export default function TopicFootball() {
    const [football, setFootball] = useState([])
    
    useEffect(() => {
        fetchFootballArticles().then((footballList) => {
            setFootball(footballList)
        })
    }, [])

    return (
        <div>
            <h2 className="topic-header">Football</h2>
            <img className="topic-img"src={footballpic} alt='laptop with coding programme open'/>
            {football.map((article) => {
                return (
                    <>
                    <article key={article.article_id} className="topic-article-list">
                        <h3>{article.title}</h3>
                        <p className="author-name">@{article.author}</p>
                        <p>{article.body.substring(0, 150)}...</p>

                    </article>
                    </>
                )
            })}
        </div>
    )
}