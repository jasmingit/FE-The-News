import axios from 'axios';

export default function fetchTopics() {
    return axios.get('https://nc-news-example-1.herokuapp.com/api/topics')
    .then(({data}) => {
       return data.topics
    })
}