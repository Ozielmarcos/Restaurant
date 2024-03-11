"use client";
import Banner from "@/components/banner/Banner";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import entrada from "/public/Assets/entrada.png";
import massa from "/public/Assets/massa.png";
import carne from "/public/Assets/carne.png";
import bebidas from "/public/Assets/bebidas.png";
import saladas from "/public/Assets/salada.png";
import sobremesas from "/public/Assets/sobremesa.png";
import Icon from "@/components/icons/Icon";
import Search from "@/components/search-input/Search";

import { produtos } from "../data";
import Card from "@/components/card/Card";
import { useState } from "react";

export default function Home() {
  const [initial, setInitial] = useState(
    produtos.filter((produto) => produto.categoria === "Entradas")
  );

  const navButton = [
    { name: "Entradas", image: entrada },
    { name: "Massas", image: massa },
    { name: "Carne", image: carne },
    { name: "Bebidas", image: bebidas },
    { name: "Saladas", image: saladas },
    { name: "Sobremesas", image: sobremesas },
  ];

  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.nav}>
        {navButton.map((nav, index) => (
          <Button key={index}>
            <Icon src={nav.image} />
            {nav.name}
          </Button>
        ))}
      </div>

      <div className={styles.searchInput}>
        <Search />
      </div>

      <h2 className={styles.subtitulo}>Cardápio</h2>

      <div className={styles.main}>
        {initial.map((produto, index) => (
          <Card
            key={index}
            image={produto.imagem}
            name={produto.nome}
            category={produto.categoria}
            description={produto.descricao}
            price={produto.preco}
          />
        ))}
      </div>
    </div>
  );
}
