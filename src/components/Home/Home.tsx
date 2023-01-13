

import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

type HomeProps = {
  onLogout: (email: string, password: string) => void
}

const Home = (props: HomeProps) => {
  return (
    <Card className={styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
    </Card>
  );
};

export default Home;
