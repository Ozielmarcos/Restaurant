import styles from "./button.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return <button className={styles.default}>{children}</button>;
}
