import axios from 'axios';

export default function fetchUser(username){

    return axios
    .get(`https://nc-news-example-1.herokuapp.com/api/users/${username}`)
    .then(({data}) => {
        console.log(data.user)
        return data.user
    });
}