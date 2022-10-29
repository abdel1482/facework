import "./sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/Dashboard";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ZKpro</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Princiale</p>
          <li>
            <DashboardOutlinedIcon className="icon" />
            <span>Tableau de bord</span>
          </li>
          <p className="title">Listes</p>
          <li>
            <AssignmentIndOutlinedIcon className="icon" />
            <span>Utilisateurs</span>
          </li>
          <li>
            <Inventory2OutlinedIcon className="icon" />
            <span>Produits</span>
          </li>
          <li>
            <ShoppingCartOutlinedIcon className="icon" />
            <span>Commandes</span>
          </li>
          <li>
            <DeliveryDiningOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Généralités</p>
          <li>
            <QueryStatsOutlinedIcon className="icon" />
            <span>Statistiques</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <PlaylistAddCheckOutlinedIcon className="icon" />
            <span>Operations</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Paramètres</span>
          </li>
          <p className="title">Services</p>
          <li>
            <ContactPageOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Diversity1OutlinedIcon className="icon" />
            <span>Succès</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
