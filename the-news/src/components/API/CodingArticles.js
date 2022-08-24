import axios from 'axios';
                
export const fetchCodingArticles = () => {
    return axios
    .get("https://nc-news-example-1.herokuapp.com/api/articles?topic=coding")
    .then(({data}) => {
        return data.articles
    });
}
    