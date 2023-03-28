import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";


import {Link}
  from "react-router-dom";
  import NavigationSidebar
    from "../navigation-sidebar";
import WhoToFollowListItem
  from "../who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "../who-to-follow-list/index";
 import Nav from "../../nav";
import PostSummaryList from "../post-summary-list/post-summary-item";
import PostSummaryItem
  from "../post-summary-list/post-summary-item";
  import ExploreComponent from "../explore";
import tuitsReducer from "../tuits/tuits-reducer";
  import whoReducer
    from "../reducers/who-reducer";
  import { configureStore }
    from '@reduxjs/toolkit';
  import {Provider} from "react-redux";
  const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

const HomeComponent = () => {
 return(
      <Provider store={store}>
          <div>
            <Nav/>
          <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
              <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
               <WhatsHappening/>
              <TuitsList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
              <WhoToFollowList/>
            </div>
          </div>
          </div>
      </Provider>

 );
};
export default HomeComponent;