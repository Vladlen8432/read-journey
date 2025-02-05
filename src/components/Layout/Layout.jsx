import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/authActions";

import { BurgerMenuIcon, MainLogoIcon } from "../Icons";
import css from "./Layout.module.css";

export const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={css.containerLayout}>
      <header className={css.header}>
        <div className={css.containerMainLogo}>
          <MainLogoIcon />
          <p className={css.mainLogoText}>read journey</p>
        </div>

        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${css.navLink} ${css.active}` : css.navLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className={css.navItem}>
              <NavLink
                to="/library"
                className={({ isActive }) =>
                  isActive ? `${css.navLink} ${css.active}` : css.navLink
                }
              >
                My library
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={css.containerLine}>
          <div className={css.containerUserInfo}>
            <div className={css.userAvatar}>A</div>
            <p className={css.userName}>User Name</p>
          </div>

          <button
            className={css.buttonLogout}
            type="button"
            onClick={handleLogout}
          >
            Log out
          </button>

          <button className={css.buttonBurger} type="button">
            {" "}
            <BurgerMenuIcon />
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
