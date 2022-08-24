import { useEffect, useState } from "react";
import { fetchCookingArticles } from "../API/CookingArticles";
import cookingpic from '../../images/cooking.jpg';

export default function TopicCooking() {
    const [cooking, setCooking] = useState([])
    
    useEffect(() => {
        fetchCookingArticles().then((cookinglist) => {
            setCooking(cookinglist)
        })
    }, [])

    return (
        <div>
            <h2 className="topic-header">Cooking</h2>
            <img className="topic-img"src={cookingpic} alt='burgers and lettuce set on a rustic wood table'/>
            <section>
            {cooking.map((article) => {
                return (
                    <>
                    <li key={article.article_id} className="topic-article-list">
                        <h3>{article.title}</h3>
                        <p className="author-name">@{article.author}</p>
                        <p>{article.body.substring(0, 150)}...</p>
                    </li>
                    </>
                )
            })}
            </section>
        </div>
    )
}