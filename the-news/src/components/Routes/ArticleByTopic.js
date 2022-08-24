import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {fetchArticleByTopic} from '../API/GetArticleByTopic'

export default function ArticleByTopic() {

    const [topicArticles, setTopicArticles] = useState([])
    const { topic } = useParams()
    useEffect(() => {
        fetchArticleByTopic(topic).then((articlelist) => {
            setTopicArticles(articlelist)
        })
    }, [topic])

    return (
        <>
         <h4 className="topic-name">{topicArticles[0]['topic']}</h4>
        <section className="article-card-list">
            {topicArticles.map((article) => {
                return (
                    <article className="article-card" key={article.article_id}>
                        <h2>{article.title}</h2>
                        <p className="author-name">@{article.author}</p>
                    </article>
                )
            })}
        </section>
        </>
    )
}