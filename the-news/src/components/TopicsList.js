import fetchTopics from './API/Topics';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


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
                    <Link style={{color: 'black'}} className="topic-item"to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                    </section>
                )
            })}
        </ul>
    )
}