
import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";


function exploreComponent() {
   $('#wd-explore').append(`
         <div class="row mt-2">
          <div class="col-2 col-md-2 col-lg-1 col-xl-2">
             ${NavigationSidebar()}
          </div>
          <div class="col-10 col-lg-7 col-xl-6">

            <div class="row">
                      <div class="col-11 position-relative">
                            <input placeholder="Search Tuiter"
                                   class="form-control rounded-pill ps-5"/>
                            <i class="fa fa-search position-absolute wd-nudge-up"></i>
                          </div>
                          <div class="col-1">
                            <i class="wd-bottom-4 text-primary float-end fa fa-cog fa-2x position-relative"></i>
                          </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->

                           <ul class="nav nav-pills">
                             <li class="nav-item">
                               <a class="nav-link active">For You</a>
                             </li>
                             <li class="nav-item">
                               <a class="nav-link">Trending</a>
                             </li>
                             <li class="nav-item">
                               <a class="nav-link">News</a>
                             </li>
                           </ul>
                     </ul>

                   <div class="position-relative mb-2">
                                        <img src="../../images/starship.jfif" class="w-100 img-fluid"/>
                                        <h1 class="position-absolute wd-nudge-up text-white">
                                          SpaceX Starship</h1>
                                          </div>


           <!-- image with overlaid text -->
           ${PostSummaryList()}

          </div>
          <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
           ${WhoToFollowList()}
          </div>

         </div>

   `);
}

$(exploreComponent);