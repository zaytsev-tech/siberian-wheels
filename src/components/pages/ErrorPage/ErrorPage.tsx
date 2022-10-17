import "../../../styles/style.scss";
import "../../../styles/pages/error_page.scss";
import { useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError() as any;
  return (
    <div className="error_title">
      <h3>Oops... Requested page not found</h3>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
