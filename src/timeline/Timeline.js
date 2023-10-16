
import "./Timeline.css"
import Suggestions from "./Suggestions"
import Post from './post/Post'
import React, { useState } from 'react';


function Timeline() {
  const [posts, setPosts] = useState([{
    user: "redian",
    postImage: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/292600815/original/46fe8a85183ee3d1d7965c4fad9042ec83bb0875/transform-your-image-into-stunning-ai-generated-masterpiece.png",
    likes: 210,
    timestamp:"2d",
  },
  {
    user: "redian1",
    postImage: "https://img.freepik.com/premium-photo/boy-programming-room-rendered-3d-style_870512-143.jpg",
    likes: 214,
    timestamp:"3d",
    },
  {
    user: "redian2",
    postImage: "https://img.freepik.com/premium-photo/cartoon-children-room-with-computer_871881-394.jpg",
    likes: 213,
    timestamp:"4d",
  }]);
  return (
      <div className='timeline'> 
      <div className='timeline__left'>
        <div className='timeline__posts'>
          {posts.map((post) => (<Post user={post.user} postImage={post.postImage}likes={post.likes} timestamp={post.timestamp}/>))}
        </div>
          </div>
          <div className='timeline__right'>
            <Suggestions/>
            </div>
    </div>
  )
}

export default Timeline
