import { useState } from "react"
import { useDispatch } from "react-redux" // used to send actions to the store then it get processed by reducers 
import { nanoid } from "@reduxjs/toolkit" // library to generate unique id 
import { postAdded } from "./postSlice"

function AddPostForm() {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const dispatch = useDispatch() 

    const onTitleChange = (e) =>{
        e.preventDefault()
        setTitle(e.target.value)
    }
    const onContentChange = (e) =>{
        e.preventDefault()
        setContent(e.target.value)
    }
    const onSavePostClicked = () =>{
        if(title && content){
            dispatch(
                postAdded({
                    id:nanoid(),
                    title:title,
                    content:content
                })
            )
            setTitle('')
            setContent('')
        }
    }
  return (
    <section>
        <h2>Add new Post</h2>
        <form>
            <label> Post Title </label>
            <input type="text" value={title} onChange={onTitleChange}/>

            <label>Post Content</label>
            <textarea type="text" value={content} onChange={onContentChange}/>
            <button onClick={onSavePostClicked} type="button">Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm