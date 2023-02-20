import logo from "../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <nav className={styles.headerComponent}>
      <img src={logo} alt="" />
      <div>
        <span className={styles.toTitle}>to</span>
        <span className={styles.doTitle}>do</span>
      </div>
    </nav>
  );
}
