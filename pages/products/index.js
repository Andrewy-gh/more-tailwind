import React from "react";
import DesktopSideBar from "../../components/sidebar/desktop";
import MobileSideBar from "../../components/sidebar/mobile";
import NavBar from "../../components/navbar/index";

export default function Products(props) {
  return (
    <>
      {/* media query change 10% to a bigger value */}
      <NavBar />
      <div className="grid lg:grid-cols-[minmax(150px,_25%)_1fr]">
        <DesktopSideBar />
        <MobileSideBar />
        <div>Main Content</div>
      </div>
    </>
  );
}
