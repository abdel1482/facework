import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import "./widget.scss";

const Widget = ({ type }) => {
  let data;
  const amout = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "UTILISATEURS",
        isMoney: false,
        link: "Consulter les utilisateurs",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(180, 10, 10, 0.336)",
              color: "crimson",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "COMMANDES",
        isMoney: false,
        link: "Consuter les commandes",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(255, 217, 0, 0.297)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "GAINS",
        isMoney: true,
        link: "Consulter les gains",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.268)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "SOLDE",
        isMoney: true,
        link: "Consulter le solde",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(115, 3, 115, 0.34)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && "$"}
          {amout}
        </div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="pourcentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
