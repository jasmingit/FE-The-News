import axios from 'axios';

export default function fetchCommentsById({article_id}) {

    return axios
    .get(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}/comments?order=ASC`)
    .then(({data}) => {
        return data.comments
    });
}