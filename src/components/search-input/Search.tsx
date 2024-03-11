import Icon from "../icons/Icon";
import styles from "./search.module.css";
import lupa from "/public/Assets/lupa.png";

export default function Search() {
  return (
    <div className={styles.search}>
      <button type="submit" className={styles.button}>
        <Icon src={lupa} />
      </button>
      <input type="text" name="search" className={styles.input} />
    </div>
  );
}
