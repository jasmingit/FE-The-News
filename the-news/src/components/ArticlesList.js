import {fetchArticles} from "./API/Articles";
import {useState, useEffect} from 'react';

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
                console.log(article)
                return (
                    <article className="article-card" key={article.article_id}>
                        <h2>{article.title}</h2>
                        <h4 className="topic-name">{article.topic}</h4>
                        <p className="author-name">@{article.author}</p>
                        
                    </article>
                )
            })}
        </section>
    )
}