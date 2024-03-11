import Image, { StaticImageData } from "next/image";
import styles from "./card.module.css";

interface Props {
  name: string;
  category: string;
  description: string;
  price: number;
  image: StaticImageData;
}

export default function Card({
  name,
  category,
  description,
  price,
  image,
}: Props) {
  return (
    <div className={styles.cardContainer}>
      <Image src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.category}>{category}</span>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}>R$ {price.toFixed(2)}</span>
      </div>
    </div>
  );
}
