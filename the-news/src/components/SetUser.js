import fetchAllUsers from "./API/GetAllUsers";
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from "react-router-dom";
// import { AvatarContext } from "../contexts/AvatarContext";

export default function UserLogin() {
    const {user, setUser} = useContext(UserContext)
    const [usernameList, setUsernameList] = useState([])
    const [selectUser, setSelectUser] = useState("")
    const [avatar, setAvatar] = useState("")

    const navigate = useNavigate()
   console.log(avatar)

    useEffect(() => {
        fetchAllUsers().then((users) => {
            setUsernameList(users) 
        })
        .catch((err)=> {
            console.log(err)
        })
    }, [])

    function getAvatar(username) {
        for(let i = 0; i < usernameList.length; i++) {
            if(usernameList[i].username === username) {
                setAvatar(usernameList[i].avatar_url)
            }
        }
    }
  
    function handleUserChange(event) {
        const selected = event.target.value
        setSelectUser(selected)
        

     };
    function handleClick() {
        setUser(selectUser)
        getAvatar(user)
        navigate('/')
     };

     
    return (
        <div>
        <pre className="msg">{JSON.stringify(user, null, 2)}</pre>
        <form>
    
            <div className="user-list">
                <label for="username">Username</label>
                <select name="username" id="usernames" defaultValue={'DEFAULT'} required onChange={handleUserChange}>
                    <option value="DEFAULT" hidden disabled>Choose Username</option>
                    {usernameList.map((user, index) => {
                        return (
                            <option value= { user.username }>{user.username}</option>
                        )
                    })}
                </select>
                </div>

        </form>
        <button onClick={handleClick}>Login</button>
        </div>
    )
}