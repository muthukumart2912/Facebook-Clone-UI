import "../App.css";
import React from "react";
import { sidebarLinks } from "../Data/Dummydata";
import { profilePicture } from "../Data/Dummydata";

type sidebarLinks = {
  icons: React.ReactNode;
  tittle: string;
}[];

type profilePicture = {
  users: number;
  profile: string;
  username: string;
};

const Sidebar: React.FC = () => {
  return (
    <section className=" sideBar flex-[3] p-2 overflow-y-scroll sticky top-[50px] ">
      <div className="sidebarWrapper">
        <ul className="flex  flex-col gap-4 mx-3 cursor-pointer">
          {sidebarLinks.map((items) => (
            <li key={items.tittle}>
              {items.icons} <span className="mx-2">{items.tittle}</span>
            </li>
          ))}
        </ul>
        <button className="mt-3 mx-4 px-8 py-1 rounded-md text-sm font-semibold bg-gray-200">
          Show More
        </button>
        <hr className="mt-3  bg-gray-400" />

        <div className="flex flex-col mt-5 mx-2 gap-4 ">
          {profilePicture.map((item) => (
            <div className="flex items-center gap-4" key={item.users}>
              <img
                src={item.profile}
                alt="person2"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{item.username}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
