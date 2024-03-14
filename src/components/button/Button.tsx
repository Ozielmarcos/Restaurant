import styles from "./button.module.css";

interface Props {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ active, onClick, children }: Props) {
  return (
    <button
      className={active ? styles.active : styles.default}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
