import {fetchArticles} from "./API/Articles";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ArticleById from "./Routes/ArticleById";

export default function ArticleList() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles().then((articlelist) => {
            setArticles(articlelist)
        })
    }, [])

    return (
        <section className="article-card-list">
            {articles.map((article) => {
                return (
                    <article className="article-card" key={article.article_id}>
                        <Link onClick={<ArticleById article_id={article.article_id}/>} className="article-head-link" style={{color: 'black'}}to={`/articles/${article.article_id}`}><h2>{article.title}</h2></Link>
                        <h4 className="topic-name">{article.topic}</h4>
                        <p className="author-name">@{article.author}</p>
                        
                    </article>
                )
            })}
        </section>
    )
}