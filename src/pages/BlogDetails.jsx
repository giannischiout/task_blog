import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"



export default function BlogDetails() {
    const { id } = useParams();
    const [state, setState] = useState({
        posts: [],
        comments: []
    })

    const handleFetch = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json();
        setState(prev => ({ ...prev, posts: data }))
    }
    const handleComments = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com//comments?postId=${id}`)
        const data = await response.json();
        setState(prev => ({ ...prev, comments: data }))
    }

  
    useEffect(() => {
        handleFetch()
        handleComments()
    }, [])
    return (
        <div>
            <h1>{state.posts?.title}</h1>
            <p>DESCRIPTION: {state.posts?.body}</p>
            <hr />
            <div>
                <h2>Comments:</h2>
                {state.comments.map((comment, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <span>User:</span>
                                <p>{comment.name}</p>
                            </div>
                            <div>
                                <span>Comment:</span>
                                <p>{comment.body}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}