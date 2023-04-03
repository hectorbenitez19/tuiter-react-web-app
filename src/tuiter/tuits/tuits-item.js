import {useDispatch} from "react-redux";
import React from "react";

import TuitStat from "./tuit-stats";

import {deleteTuit, createTuit}
 from "./tuits-reducer";

 import {deleteTuitThunk} from "../../services/tuits-thunk";


const TuitItem = (
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
      dispatch(deleteTuitThunk(id));
 }

return(
 <li className="list-group-item">
   <div className="row">
     <div className="col-auto">
       <img width={50}
            className="float-end rounded-circle"
            src={`/images/${tuit.image}`}/>
     </div>

     <i className="col-1">{tuit.topic}</i>
     <i className="col-1 bi bi-patch-check-fill"></i>
     <i className="col-1">@{tuit.userName}</i>
     <i className="col-2">{tuit.time}</i>
          <div className="col-auto">
            <div>
              <i className="bi bi-x-lg float-end"
                 onClick={() => deleteTuitHandler(tuit._id)}></i>
             </div>
           </div>
      </div>
           <i className="col-auto">{tuit.tuit}</i>
              <TuitStat
              key={tuit._id} tuit={tuit}/>
        </li>
 )
}
export default TuitItem;