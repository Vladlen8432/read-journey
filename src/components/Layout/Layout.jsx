import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/authActions";
import { selectUser } from "../../redux/auth/authSelectors";
import { fetchCurrentUser } from "../../services/api";

import { BurgerMenuIcon, MainLogoIcon } from "../Icons";
import css from "./Layout.module.css";

export const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await fetchCurrentUser();
        if (currentUser) {
          dispatch({ type: "auth/setUser", payload: currentUser });
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    loadUser();
  }, [dispatch]);

  console.log("user in Layout:", user);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login");
  };

  const userName = user?.name || "User Name";
  const userAvatar = user?.name ? user.name.charAt(0).toUpperCase() : "?";

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
            <div className={css.userAvatar}>{userAvatar}</div>
            <p className={css.userName}>{userName}</p>
          </div>

          <button
            className={css.buttonLogout}
            type="button"
            onClick={handleLogout}
          >
            Log out
          </button>

          <button className={css.buttonBurger} type="button">
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

// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { logout } from "../../redux/auth/authActions";
// import { selectUser } from "../../redux/auth/authSelectors";

// import { BurgerMenuIcon, MainLogoIcon } from "../Icons";
// import css from "./Layout.module.css";

// export const Layout = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector(selectUser);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const userName = user?.name || "User Name";
//   const userAvatar = user?.name ? user.name.charAt(0).toUpperCase() : "?";

//   return (
//     <div className={css.containerLayout}>
//       <header className={css.header}>
//         <div className={css.containerMainLogo}>
//           <MainLogoIcon />
//           <p className={css.mainLogoText}>read journey</p>
//         </div>

//         <nav className={css.nav}>
//           <ul className={css.navList}>
//             <li className={css.navItem}>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? `${css.navLink} ${css.active}` : css.navLink
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className={css.navItem}>
//               <NavLink
//                 to="/library"
//                 className={({ isActive }) =>
//                   isActive ? `${css.navLink} ${css.active}` : css.navLink
//                 }
//               >
//                 My library
//               </NavLink>
//             </li>
//           </ul>
//         </nav>

//         <div className={css.containerLine}>
//           <div className={css.containerUserInfo}>
//             <div className={css.userAvatar}>{userAvatar}</div>
//             <p className={css.userName}>{userName}</p>
//           </div>

//           <button
//             className={css.buttonLogout}
//             type="button"
//             onClick={handleLogout}
//           >
//             Log out
//           </button>

//           <button className={css.buttonBurger} type="button">
//             <BurgerMenuIcon />
//           </button>
//         </div>
//       </header>

//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// // import { useDispatch } from "react-redux";
// // import { NavLink, Outlet, useNavigate } from "react-router-dom";
// // import { logout } from "../../redux/auth/authActions";

// // import { BurgerMenuIcon, MainLogoIcon } from "../Icons";
// // import css from "./Layout.module.css";

// // export const Layout = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     dispatch(logout());
// //     localStorage.removeItem("token");
// //     navigate("/login");
// //   };

// //   return (
// //     <div className={css.containerLayout}>
// //       <header className={css.header}>
// //         <div className={css.containerMainLogo}>
// //           <MainLogoIcon />
// //           <p className={css.mainLogoText}>read journey</p>
// //         </div>

// //         <nav className={css.nav}>
// //           <ul className={css.navList}>
// //             <li className={css.navItem}>
// //               <NavLink
// //                 to="/"
// //                 className={({ isActive }) =>
// //                   isActive ? `${css.navLink} ${css.active}` : css.navLink
// //                 }
// //               >
// //                 Home
// //               </NavLink>
// //             </li>
// //             <li className={css.navItem}>
// //               <NavLink
// //                 to="/library"
// //                 className={({ isActive }) =>
// //                   isActive ? `${css.navLink} ${css.active}` : css.navLink
// //                 }
// //               >
// //                 My library
// //               </NavLink>
// //             </li>
// //           </ul>
// //         </nav>

// //         <div className={css.containerLine}>
// //           <div className={css.containerUserInfo}>
// //             <div className={css.userAvatar}>A</div>
// //             <p className={css.userName}>User Name</p>
// //           </div>

// //           <button
// //             className={css.buttonLogout}
// //             type="button"
// //             onClick={handleLogout}
// //           >
// //             Log out
// //           </button>

// //           <button className={css.buttonBurger} type="button">
// //             {" "}
// //             <BurgerMenuIcon />
// //           </button>
// //         </div>
// //       </header>

// //       <main>
// //         <Outlet />
// //       </main>
// //     </div>
// //   );
// // };
