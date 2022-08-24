import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import fetchArticleById from '../API/GetArticlesById';
import Vote from '../Vote';

export default function ArticleById() {
    const [articleWithId, setArticleWithId] = useState([])
    const {article_id} = useParams()
    
    useEffect(() => {
        fetchArticleById(article_id).then((article) => {
            setArticleWithId(article)
        })
    }, [article_id])

    return (
        <div className="single-article">
            <h2 className="topic-head">{articleWithId.title}</h2>
            <section className="article-info">
            <h3 className="author-name" >@{articleWithId.author}</h3>
            <h4 className="topic-name">{articleWithId.topic}</h4>
            </section>
            <p>{articleWithId.body}</p>
            <Vote votes={articleWithId.votes}/>
        </div>
    )

}