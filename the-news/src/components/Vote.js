import { useState} from 'react';
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi';
import { patchArticleVote } from './API/PatchVotes';

export default function Vote({votes, article_id}) {
    // console.log(votes)
    const [addedVote, setAddedVote] = useState(0)
    console.log(votes, article_id)

    // useEffect(() => {
    //     patchArticleVote(article_id, ).then((voteCount) => {
    //         setVoteNum(voteCount)
    //     })
    // }, [article_id, voteNum])
    
    const incVote = () => {
        setAddedVote((currVote) => {
            return currVote + 1})
        patchArticleVote(article_id, +1)
            .catch((err)=>{
                setAddedVote((currVote) => {
                    return currVote - 1
                })
            })
        
    }
    const decVote = () => {
        setAddedVote((currVote) => {
            return currVote - 1})
        patchArticleVote(article_id, - 1)
            .catch((err)=>{
                setAddedVote((currVote) => {
                    return currVote + 1
                })
            })
        
    }


        
    // const decVote = () => {
    //     return setVoteNum(-1)
    // }
    return (
        <section className="article-vote ">
            <h4>{votes + addedVote} votes</h4>
        <button onClick={incVote} className="vote-button"><FiThumbsUp /></button>
        <button onClick={decVote} className="vote-button"><FiThumbsDown /></button>
        </section>
        
    )
}