// styles
import styles from "./Navbar.module.css";

// rrd imports
import { Link, NavLink } from "react-router";

// hooks
import { useSignout } from "../hooks/useSignout";

// global container
import { useGlobalContext } from "../hooks/useGlobalContext";

function Navbar() {
  const { signOutUser, loading } = useSignout();
  const { user } = useGlobalContext();

  return (
    <header className={styles.header}>
      <div className="container">
        <Link className={styles.logo} to="/">
          myMoney
        </Link>

        {user && (
          <div className={styles.avatar}>
            <span>Hello, {user.email}</span>
            <img src="https://picsum.photos/400" alt="" />
            {!loading && <button onClick={signOutUser}>Logout</button>}
            {loading && (
              <button className={styles.disabled} disabled>
                Loadgin...
              </button>
            )}
          </div>
        )}

        {!user && (
          <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
