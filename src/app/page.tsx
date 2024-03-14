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
import { StaticImageData } from "next/image";

const navButton = [
  { name: "Entradas", image: entrada, active: false },
  { name: "Massas", image: massa, active: false },
  { name: "Carnes", image: carne, active: false },
  { name: "Bebidas", image: bebidas, active: false },
  { name: "Saladas", image: saladas, active: false },
  { name: "Sobremesas", image: sobremesas, active: false },
];

interface IProduct {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  imagem: StaticImageData;
}

export default function Home() {
  const defaultValues = produtos.filter(
    (produto) => produto.categoria === "Entradas"
  );
  const [data, setData] = useState<IProduct[]>(defaultValues);

  const handleButton = (name: string) => {
    setData(produtos.filter((produto) => produto.categoria === name));
  };

  const handleSearch = (text: string) => {
    text.length > 2
      ? setData(
          produtos.filter(
            (produto) =>
              produto.nome.toLowerCase().includes(text.toLowerCase()) ||
              produto.categoria.toLowerCase().includes(text.toLowerCase()) ||
              produto.descricao.toLowerCase().includes(text.toLowerCase())
          )
        )
      : setData(defaultValues);
  };

  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.nav}>
        {navButton.map((nav, index) => (
          <Button
            key={index}
            active={nav.name === data[0].categoria ? true : false}
            onClick={() => handleButton(nav.name)}
          >
            <Icon src={nav.image} />
            {nav.name}
          </Button>
        ))}
      </div>

      <div className={styles.searchInput}>
        <Search onChange={(text) => handleSearch(text)} />
      </div>

      <h2 className={styles.subtitulo}>Cardápio</h2>

      <div className={styles.main}>
        {data.map((produto, index) => (
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
