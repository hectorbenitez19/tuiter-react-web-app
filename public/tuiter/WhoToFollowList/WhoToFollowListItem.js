
const WhoToFollowListItem = (who) => {
   return(`
     <div class="row">
       <div class="col-2">
         <img class="rounded-circle img-fluid" height=48px  src=${who.avatarIcon}/>
       </div>
       <div class="col-8">
         <div class="fw-bold">${who.userName}</div>
         <div>@${who.handle}</div>
       </div>
       <div class="col-2">
         <button class="btn btn-primary rounded-pill float-end">Follow</button>
       </div>
     </div>

   `);
}

export default WhoToFollowListItem;