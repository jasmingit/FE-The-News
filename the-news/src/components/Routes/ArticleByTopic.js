import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {fetchArticleByTopic} from '../API/GetArticleByTopic'
import ArticleById from './ArticleById';

export default function ArticleByTopic() {

    const [topicArticles, setTopicArticles] = useState([])
    const { topic } = useParams()
    useEffect(() => {
        fetchArticleByTopic(topic).then((articlelist) => {
            setTopicArticles(articlelist)
        })
    }, [topic])



    return (
        <div>
            <h4 className='topic-head'>{topic}</h4>
        <section className="article-card-list">
            {topicArticles.map((article) => {
                return (
                    <article className="article-card" key={article.article_id}>
                        <Link onClick={<ArticleById article_id={article.article_id}/>} className="article-head-link" style={{color: 'black'}}to={`/articles/${article.article_id}`}><h2>{article.title}</h2></Link>
                        <p className="author-name">@{article.author}</p>
                    </article>
                )
            })}
        </section>
        </div>
    )
    // onClick={<ArticleById article_id={article.article_id}/>}
}