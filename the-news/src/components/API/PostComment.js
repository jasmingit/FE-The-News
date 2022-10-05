import axios from 'axios';

export default function PostCommentsById(article_id, body, username) {
    return axios
    .post(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}/comments`, 
    {
        body : body,
        username : username
    })
    .then((res) => {
        console.log(res.status); 
    });
}