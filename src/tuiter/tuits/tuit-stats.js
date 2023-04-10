import {useDispatch} from "react-redux";
import React, {useState} from "react";

import {deleteTuit, createTuit, toggleLike}
 from "./tuits-reducer";


const TuitStat = (
 {
   tuit = {
   "_id": 234,
   "topic": "Space",
   "userName": "SpaceX",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "time": "2h",
    "image": "space.png",
    "liked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
   }
 }) => {

 const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
   dispatch(deleteTuit(id));
 }

  const toggleLikeHandler = (tuit) => {
    dispatch(toggleLike(tuit));
  }


  const [liked, setLiked] = useState(tuit.liked);
  const [numlikes, setNumLikes] = useState(tuit.likes)
  const likedChangeHandler = (event) => {
    const likeValue = event.target.value;
    const newLiked = !likeValue;
    if(newLiked) {
        setNumLikes(numlikes + 1);
    } else {
     setNumLikes(numlikes - 1)
    }
    setLiked(newLiked);
  }


if(tuit.liked) {
return(
 <li className="list-group-item">
   <div className="row">
           <div className="col-3">
               <i className="bi bi-chat"
                  >{tuit.replies}</i>
           </div>

        <div className="col-3">
            <i className="bi bi-arrow-clockwise"
               >{tuit.retuits}</i>
        </div>
     <div className="col-3">
         <i className="bi bi-heart-fill">{tuit.likes}</i>
     </div>

     <div className="col-3">
       <div>
         <i className="bi bi-share"
           ></i>
        </div>

      </div>
      </div>
        </li>
 )

}

else {
return(
 <li className="list-group-item">
   <div className="row">
           <div className="col-3">
               <i className="bi bi-chat"
                  >{tuit.replies}</i>
           </div>

        <div className="col-3">
            <i className="bi bi-arrow-clockwise"
               >{tuit.retuits}</i>
        </div>
     <div className="col-3">

     </div>

     <div className="col-3">
       <div>
         <i className="bi bi-share"
           ></i>
        </div>

      </div>
      </div>
        </li>
 )

}

}
export default TuitStat;