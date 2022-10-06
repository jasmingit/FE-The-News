import axios from 'axios';

export const fetchArticles = (sort_by = "created_at", order = "ASC") => {
    return axios
    .get("https://nc-news-example-1.herokuapp.com/api/articles",
    {
        params: {sort_by, order}
    })
    .then(({data}) => {
        return data['articles']
    });
}
    