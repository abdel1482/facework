import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="widgets">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <Badge badgeContent={4} color="error" className="badgeIcon">
              <NotificationsNoneOutlinedIcon className="icon" />
            </Badge>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="monbadge">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-juan-mendez-1536619.jpg&fm=jpg&_gl=1*11xxn3c*_ga*MTc0MTk0OTY0MS4xNjY3MDQ5MjA5*_ga_8JE65Q40S6*MTY2NzA0OTIyMC4xLjEuMTY2NzA0OTIyMi4wLjAuMA.."
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
