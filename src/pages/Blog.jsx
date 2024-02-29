import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


export default function Blog() {

    //There are a few things missing to improve this like handling errors
    //I have been using Next.js and that part is easier to handle. Will study about ErrorBoundary more..
    //I also run out of time. Now i have decidated roughly 4:30 hours for both tasks, mainly for the first task

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const handleFetch = async () => {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json();
        setData(data)
        setLoading(false)
    }

  
    useEffect(() => {
        handleFetch()
    }, [])

    if(loading) {
        return (
            <div>
                ...loading
            </div>
        )
    }
    return (
        <div>
            <h1>Blog</h1>
            <div>
                {data.map((post, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}