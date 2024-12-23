import React, { useState } from 'react';
import Header from '../components/header/Header';
import ExploreMenu from '../components/explore_menu/ExploreMenu';
import DisplayFood from '../components/dispalyFood/DisplayFood';
import DownloadApp from '../components/downloadApp/DownloadApp';
function Home() {
  const[category,setcategory]=useState("all");
  return (
    <div>
    <Header/>
    <ExploreMenu category={category} setcategory={setcategory}/>
    <DisplayFood category={category}/>
    <DownloadApp/>
    </div>
  )
}

export default Home;
