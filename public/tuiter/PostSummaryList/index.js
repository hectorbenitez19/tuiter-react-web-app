import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.js";

const PostSummaryList = () => {

return(`
   <div class="container">
              ${
                 posts.map(post => {
                    return(PostSummaryItem(post));
                 })
              }

   </div>
  `);

}

$(PostSummaryList);
export default PostSummaryList;