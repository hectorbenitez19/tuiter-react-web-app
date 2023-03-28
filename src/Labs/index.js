import Nav from "../nav";
import Assignment6 from "./A6";
import Assignment7 from "./A7";
import {Routes, Route} from "react-router";

function Labs() {
 return (
   <div>
     <Nav/>
     <Routes>
       <Route index
        element={<Assignment6/>}/>
       <Route path="A7"
        element={<Assignment7/>}/>
     </Routes>
   </div>
 );
}

export default Labs;