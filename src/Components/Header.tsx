import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Badge } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import person1 from "../assets/person/1.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center sticky top-0 h-[50px] w-full bg-blue-600">
      <div className="flex-[3]">
        <h2 className="text-3xl mx-5 font-bold text-white cursor-pointer">
          Socialfy
        </h2>
      </div>
      <div className="flex-[5]">
        <div className="px-2 gap-2 flex items-center w-full h-[35px] bg-white border rounded-full">
          <SearchIcon fontSize="small" />
          <input
            placeholder="Search for friend,post or video"
            className="w-96 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex-[4] flex items-center justify-around text-white">
        <div className="links">
          <Link to="/home">
            <span className="me-5 text-md cursor-pointer">Homepage</span>
          </Link>

          <span className="me-5 text-md cursor-pointer">Timeline</span>
        </div>
        <div className="icons flex items-center justify-evenly ">
          <IconButton>
            <Badge badgeContent={5} color="warning">
              <PersonIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={5} color="warning">
              <ChatIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="warning">
              <NotificationsIcon sx={{ color: "white" }} />
            </Badge>
          </IconButton>
        </div>
        <Link to="/profile">
          <img
            src={person1}
            alt="person img"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
