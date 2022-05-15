import React, { useEffect, useState } from 'react'
import { Avatar} from "@material-ui/core"

import PhotoIcon from '@material-ui/icons/Photo';
import MovieIcon from '@material-ui/icons/Movie';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import "./css/feed.css"
import Post from './Post';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { db } from './firebase';
import {useSelector} from 'react-redux';
import {selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';




function Feed() {
    const user = useSelector(selectUser);

    const [posts,setPost] =useState([]);
    const [input, setInput] = useState();
    const submitPost=(e)=>{
        e.preventDefault();
      db.collection("posts").add({
          name:user.displayName,
          description:"this is test",
          message:input,
          
          
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),

      });
      setInput("");

}

   useEffect(() => {
       db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
           setPost(snapshot.docs.map(doc=>({
               id:doc.id,
               data:doc.data()

           })))

       })

   },[])

    

  return (
    <div className="feed">
        <div className="feed__input">
        <div className="feed__form">
            <Avatar src=" "/>
            <form onSubmit={submitPost}>
                <input type="text" placeholder="Start a post" value={input} onChange={e=>setInput(e.target.value)}/>
                <input type="submit"/>

            </form>
            </div>
     

         <div className="feed__options">
             <div className="option">
                 <PhotoIcon style={{color:'#70b5f9'}}/>
                 <span> Photo </span>
             </div>
             <div className="option">
                 <MovieIcon style={{color:'#7fc15e'}}/>
                 <span> Videos </span>
             </div>
             <div className="option">
                 <MovieFilterIcon style={{color:'#70b5f9'}}/>
                 <span> 3d Videos </span>
             </div>
             <div className="option">
                 <EventIcon style={{color:'#e7a33e'}}/>
                 <span> Event </span>
             </div>
             <div className="option">
                 <AssignmentIcon style={{color:'#fc9295'}}/>
                 <span> Write article </span>
             </div>
         </div>
         </div>
         <FlipMove>
         {
          posts.map(({id, data : {name  ,description, message}}) => {
                 return <Post key={id} name={name} description={description} message={message} />

             })
         }
          </FlipMove>
         
        
         
         

         
    </div>
  )
}

export default Feed