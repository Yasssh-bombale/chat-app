import React from "react";
import SideBar from "../../components/sidebar/SideBar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-lg overflow-hidden">
      <SideBar />
      {/* <MessageContainer/> */}
    </div>
  );
};

export default Home;
