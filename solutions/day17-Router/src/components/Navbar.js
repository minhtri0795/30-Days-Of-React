import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  margin-top: 20px;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`;
const Item = styled.li`
  margin: 0 10px;
  font-weight: 600;
`;
const Navbar = () => {
  return (
    <Nav>
      <List>
        <Item>
          <NavLink to="/home">Home</NavLink>
        </Item>
        <Item>
          <NavLink to="/about">About me</NavLink>
        </Item>
        <Item>
          <NavLink to="/contact">Contact me</NavLink>
        </Item>
        <Item>
          <NavLink to="/blog">Blog</NavLink>
        </Item>
      </List>
    </Nav>
  );
};
export default Navbar;
