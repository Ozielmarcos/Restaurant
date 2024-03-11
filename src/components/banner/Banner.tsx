import Image from "next/image";
import banner from "../../../public/Assets/banner.png";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image alt="Imagem de banner" src={banner} width={1344} />
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
