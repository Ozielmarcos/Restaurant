import Icon from "../icons/Icon";
import styles from "./search.module.css";
import lupa from "/public/Assets/lupa.png";

interface SearchProps {
  placeholder?: string;
  value?: string;
  onChange: (text: string) => void;
  handleBlur?: () => void;
}

export default function Search({
  placeholder,
  value,
  onChange,
  handleBlur,
}: SearchProps) {
  return (
    <div className={styles.search}>
      <Icon src={lupa} />
      <input
        type="text"
        name="search"
        onBlur={handleBlur}
        value={value}
        placeholder={placeholder}
        className={styles.input}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
}
