
const PostSummaryItem = (post) => {

   return(`
   <div class="row">
     <div class="col-10">
       <div>${post.userName} . ${post.time}</div>
       <div class="fw-bolder">${post.topic}</div>
       <div>${post.title}</div>
     </div>
     <div class="col-2">
       <img width={70} class="float-end rounded-3" src=${post.image}/>
     </div>
   </div>

   `);
}

export default PostSummaryItem;