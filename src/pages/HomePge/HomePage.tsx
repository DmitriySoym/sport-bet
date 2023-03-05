import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";

export const HomePage = () => {
  return (
    <div>
      HomePage
      <Link to={ROUTE.DETAIL}>Detail</Link>
    </div>
  );
};
