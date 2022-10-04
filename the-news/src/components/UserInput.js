import { useState } from "react"
import fetchUser from "./API/GetUser";
import PostCommentsById from "./API/PostComment"

export default function UserInput({article_id}) {

    const [addedUsername, setAddedUsername] = useState([])
    const [body, setBody] = useState("")


    function handleUserChange(event) {
       fetchUser(event.target.value).then((user) => {
        setAddedUsername(user.username)
       })
       .catch((err)=> {
         console.log("username does not exist")
        
       })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        PostCommentsById(article_id, body, addedUsername).then(
            function commentPosted() {
                return "Comment posted!"
            }
        )
        .catch((err) => {
            console.log(err.status)
        })
    }
    
    const handleClick = () => {
        const button = document.getElemendById("comment-button");
        button.textContent = "Comment Posted!";
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label id="username-input">username:</label>
                <input 
                type="text" 
                id="username-input" 
                name="username-input"
                onChange={handleUserChange}/>

                <textarea
                id="comment-input"
                name="comment-input"
                placeholder="comment here!"
                onChange={(event) => {
                    setBody(event.target.value)
                }}
                minLength="2"
                maxLength="500"
                required
                />
                <button onClick={handleClick} id="comment-button">Submit</button>
            </form>
        </div>
    )
}