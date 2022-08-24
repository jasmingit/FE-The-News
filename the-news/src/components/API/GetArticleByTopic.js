import axios from 'axios';

export const fetchArticleByTopic = (topic) => {
    return axios
    .get(`https://nc-news-example-1.herokuapp.com/api/articles?topic=${topic}`)
    .then(({data}) => {
        return data.articles
    });
}