import { FC } from "react";
import "../../../styles/components/header.scss";

export const AuthLayout: FC<React.PropsWithChildren> = (props) => {
  return (
    <>
      <div className="header">
        <span className="header_title">SIBERIAN WHEELS</span>
      </div>
      {props.children}
    </>
  );
};
