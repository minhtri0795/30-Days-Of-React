import { NavLink } from "react-router-dom";

const routerItem = {
  display: "inline-block",
  margin: "20px 10px 0 10px",
  padding: "10px",
  borderRadius: "8px",
  background: "#f1f1f1",
  boxShadow: "5px 5px 17px #d0d0d0,-5px -5px 17px #f0f0f0",
};
const CatRouter = () => {
  return (
    <div className="navbar">
      <ul style={{ display: "inline-block" }}>
        <li style={routerItem}>
          <NavLink to="/day19">Day 19</NavLink>
        </li>
        <li style={routerItem}>
          <NavLink to="/day20">Day 20</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default CatRouter;
