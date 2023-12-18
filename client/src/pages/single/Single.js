import React from "react";
import "./single.css";
// import Sidebar from '../../components/sidebar/Sidebar';
import Singlepost from "../../components/singlepost/Singlepost";

function Single() {
  return (
    <div className="single">
      <Singlepost></Singlepost>
      {/* <Sidebar></Sidebar> */}
    </div>
  );
}

export default Single;
