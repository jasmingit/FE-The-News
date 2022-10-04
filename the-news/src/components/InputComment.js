// import {  useState, useEffect } from "react";
// import postCommentsById from "./API/PostComment";
import UserInput from "./UserInput";

export default function InputComment({article_id}){

    // console.log(comment)
    return (
        <>
        {/* <p>{comment}</p> */}
        <form>
            <UserInput article_id={article_id} />
        </form>
        </>
    )
}

