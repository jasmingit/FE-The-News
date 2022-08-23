import axios from 'axios';

export const fetchArticles = () => {
    return axios
    .get("https://nc-news-example-1.herokuapp.com/api/articles?sort_by=created_at")
    .then(({data}) => {
        return data['articles']
    });
}
    