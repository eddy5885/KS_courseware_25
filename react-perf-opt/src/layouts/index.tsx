import { Link, Outlet } from "umi";
import styles from "./index.less";

export default function Layout() {
  return (
    <div className={styles.navs}>
      <div style={{ borderBottom: "1px solid #ccc" }}>React Demos</div>
      <Outlet />
    </div>
  );
}
