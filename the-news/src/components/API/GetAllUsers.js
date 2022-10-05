import axios from 'axios';

export default function fetchAllUser(){

    return axios
    .get(`https://nc-news-example-1.herokuapp.com/api/users/`)
    .then(({data}) => {
        return data.users
    });
}