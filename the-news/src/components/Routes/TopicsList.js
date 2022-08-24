import fetchTopics from '../API/Topics';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ArticleByTopic from '../Routes/ArticleByTopic';


export default function TopicList() {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        fetchTopics().then((topicsList) => {
            setTopics(topicsList)
        })
    }, [])

    return (
        <ul className="topics-list">
            {topics.map((topic) => {
                return (
                    <section key ={topic.slug} >
                    <Link onClick={<ArticleByTopic topic={topic} />} style={{color: 'black'}} className="topic-item"to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                    </section>
                )
            })}
        </ul>
    )
}