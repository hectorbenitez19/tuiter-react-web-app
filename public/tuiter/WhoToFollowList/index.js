
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js";

const WhoToFollowList = () => {
return (`
   <div class="container">
              ${
                 whos.map(who => {
                    return(WhoToFollowListItem(who));
                 })
              }

   </div>
   `);

}

$(WhoToFollowList);
export default WhoToFollowList;