import axios from 'axios';

export const fetchCookingArticles = () => {
    return axios
    .get("https://nc-news-example-1.herokuapp.com/api/articles?topic=cooking")
    .then(({data}) => {
        return data.articles
    });
}