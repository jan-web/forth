
import Navigation from "./Navigation";
import styles from "./MainHeader.module.css";

type MainHeaderProps = {
  isAuthenticated: boolean;
  onLogout: () => void;
}
const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className={styles["main-header"]}>
      <h1>React Advanced</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
