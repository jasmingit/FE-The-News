import axios from 'axios';
                
export const fetchFootballArticles = () => {
    return axios
    .get("https://nc-news-example-1.herokuapp.com/api/articles?topic=football")
    .then(({data}) => {
        return data.articles
    });
}