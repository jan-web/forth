

import styles from "./Navigation.module.css";

type NavigationProps = {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navigation = (props: NavigationProps) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
