import {fetchArticles} from "./API/Articles";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ArticleById from "./Routes/ArticleById";

export default function ArticleList() {

    const [articles, setArticles] = useState([])
    const [sortBy, setSortBy] = useState([])

    useEffect(() => {
        const sort_by = sortBy[0]
        const order = sortBy[1]
        fetchArticles(sort_by, order).then((articlelist) => {
            setArticles(articlelist)
        })
    }, [sortBy])

    function handleSortChange(event){
        const sort = event.target.value
        switch(sort){
            case "newest" : setSortBy(["created_at", "ASC"]);
                break;
            case "oldest" : setSortBy(["created_at", "DESC"]);
                break;
            case "most votes" : setSortBy(["votes", "ASC"]);
                break;
            case "least votes" : setSortBy(["votes", "DESC"]);
                break;
            case "most comments" : setSortBy(["comment_count", "ASC"]);
                break;
            case "least comments" : setSortBy(["comment_count", "DESC"]);
                break;
            default : setSortBy(["created_at", "ASC"])
        }
    }

    return (
        <div>
            <div className="sortby" >
            <label className="sortby-label" for="sort-by">Sort by </label>
            <select className="sortby-select" name="sort-by" onChange={handleSortChange}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="most votes">Most Votes</option>
                <option value="least votes">Least Votes</option>
                <option value="most comments">Most Comments</option>
                <option value="least comments">Least Comments</option>
            </select>
            </div>
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
        </div>
    )
}