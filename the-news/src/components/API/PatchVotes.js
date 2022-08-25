import axios from 'axios';

export const patchArticleVote = (article_id, voteReq) => {
    // console.log(article_id, voteNum)
    const voteUpdate = { inc_votes: voteReq }
    return axios
    .patch(`https://nc-news-example-1.herokuapp.com/api/articles/${article_id}`, voteUpdate)
    .then(({data}) => {
        return data.article
    });
}