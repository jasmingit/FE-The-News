import { useState } from "react"
import PostCommentsById from "./API/PostComment"
// import fetchAllUsers from "./API/GetAllUsers"
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


export default function UserInput({article_id}) {

    const [body, setBody] = useState("");
    
    const {user} = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault();

        PostCommentsById(article_id, body, user)
        .catch((err) => {
            console.log(err.status);
        });
    }

console.log(user)

    return (
        <div className="add-comment" >
            <h4 className="comment-title" >Add your comment</h4>
            <p>{user}</p>    
            <form className="comment-form" onSubmit={handleSubmit}>
                <textarea
                id="comment-input"
                name="comment-input"
                placeholder="comment here!"
                onChange={(event) => {
                    setBody(event.target.value)
                }}
                minLength="2"
                maxLength="500"
                value={body}
                required
                /> 
                <button id="comment-button">Submit</button>

            </form>
        </div>
    )
};
