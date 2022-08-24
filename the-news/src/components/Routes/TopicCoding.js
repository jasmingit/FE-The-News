import { useEffect, useState } from "react";
import {fetchCodingArticles} from '../API/CodingArticles';
import codingpic from '../../images/coding.jpg';

export default function TopicCoding() {
    const [coding, setCoding] = useState([])
    
    useEffect(() => {
        fetchCodingArticles().then((codinglist) => {
            setCoding(codinglist)
        })
    }, [])

    return (
        <div>
            <h2 className="topic-header">Coding</h2>
            <img className="topic-img"src={codingpic} alt='laptop with coding programme open'/>
            {coding.map((article) => {
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
        </div>
    )
}