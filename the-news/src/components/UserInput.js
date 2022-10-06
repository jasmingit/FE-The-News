import { useState, useEffect } from "react"
import PostCommentsById from "./API/PostComment"
import fetchAllUsers from "./API/GetAllUsers"


export default function UserInput({article_id}) {

    const [body, setBody] = useState("");
    const [usernameList, setUsernameList] = useState([])
    const [author, setAuthor] = useState("")

    function handleUserChange(event) {
       setAuthor(event.target.value)
    };

    useEffect(() => {
        fetchAllUsers().then((users) => {
            setUsernameList(users) 
        })
        .catch((err)=> {
            console.log(err)
        })
    }, [])
   

    const handleSubmit = (event) => {
        event.preventDefault();

        PostCommentsById(article_id, body, author)
        .catch((err) => {
            console.log(err.status);
        });
    }



    return (
        <div className="add-comment" >
            <h4 className="comment-title" >Add your comment</h4>
            
            <form className="comment-form" onSubmit={handleSubmit}>
                
                <div className="user-list">
                <select id="usernames" onChange={handleUserChange} required>
                    <option value="" selected disabled hidden>Author</option>
                    {usernameList.map((user) => {
                        
                        return (
                            <option value={user.username}>{user.username}</option>
                        )
                    })}
                </select>
                </div>

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
