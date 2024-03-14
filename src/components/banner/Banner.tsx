import Image from "next/image";
import banner from "../../../public/Assets/banner.png";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image className="image" alt="Imagem de banner" src={banner} />
      <div className={styles.text}>
        <h1>RESTAURANTE</h1>
        <p>
          De prátos clássicos a criações surpreendentes, nosso cardápio é um
          requinte de sabores refinados.
        </p>
      </div>
    </div>
  );
}
