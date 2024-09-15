import clsx from "clsx";
import css from "../../App.module.css";
import { NavLink } from "react-router-dom";

const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
};

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home Page
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/register">
            Registration Page
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/login">
            Login Page
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/contacts">
            Contacts Page
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/mailbox">
            MailBox
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/products">
            Products
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/search">
            Search
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
