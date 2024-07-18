import { useEffect, useState } from "react";

const Post = ()=>{
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
    })
    return (
        <>
            <h1>Posts</h1>
            {posts.map((post)=>{
                return (
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Post;