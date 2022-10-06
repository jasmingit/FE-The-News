import { useEffect, useState } from "react";
import fetchCommentsById from "./API/GetComments";

export default function Comments(article_id) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchCommentsById(article_id).then((comments) => {
            setComments(comments)
        })
    }, [article_id])
    
    return (
        <div className="comments-section">
            {comments.map((comment) => {
                return(
                    <section className="comment-card" key={comment.comment_id}>
                        <h5 className="author-name-comment">@{comment.author}</h5>
                        <p className="comment-body">{comment.body}</p>
                        <h5 className="author-name">{comment.created_at}</h5>
                    </section>
                )
            })}
        </div>
       
    )
}