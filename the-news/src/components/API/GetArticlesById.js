import axios from 'axios';

export default function fetchArticleById(id) {
    return axios
    .get(`https://nc-news-example-1.herokuapp.com/api/articles/${id}`)
    .then(({data}) => {
        console.log(data)
        return data.article
    });
}