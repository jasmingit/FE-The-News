import { useState } from 'react';
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi';

export default function Vote({votes}) {

    const [voteNum, setVoteNum] = useState([votes])

    function incVote(vote){
        setVoteNum(vote+= 1)
    }
    function decVote(vote){
        setVoteNum(vote-= 1)
    }

    return (
        <section className="article-vote ">
            <h4>{voteNum} votes</h4>
        <button className="vote-button" onClick={() => {incVote(voteNum)}}><FiThumbsUp /></button>
        <button className="vote-button" onClick={() => {decVote(voteNum)}}><FiThumbsDown /></button>
        </section>
    )
}