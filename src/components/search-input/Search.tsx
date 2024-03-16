import Icon from "../icons/Icon";
import styles from "./search.module.css";
import lupa from "/public/Assets/lupa.png";

interface SearchProps {
  placeholder?: string;
  onChange: (text: string) => void;
}

export default function Search({ placeholder, onChange }: SearchProps) {
  return (
    <div className={styles.search}>
      <Icon src={lupa} />
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        className={styles.input}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
}
