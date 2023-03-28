import React from "react";
import {useSelector} from "react-redux";

import TuitItem
  from "./tuits-item";

const TuitsList = () => {
 const postsArray = useSelector(state => state.tuits);
 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <TuitItem
           key={post._id} tuit={post}/> )
     }
   </ul>
 );
};
export default TuitsList;