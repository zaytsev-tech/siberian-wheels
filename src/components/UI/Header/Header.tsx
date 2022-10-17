import "../../../styles/components/header.scss";
import { HeaderMenu } from "./components/HeaderMenu";

export const Header = () => {
  return (
    <div className="header">
      <span className="header_title">SIBERIAN WHEELS</span>
      <HeaderMenu />
    </div>
  );
};
