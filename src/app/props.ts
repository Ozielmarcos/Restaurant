import { StaticImageData } from "next/image";

export interface IButton {
  name: string;
  image: StaticImageData;
  active: boolean;
}

export interface IProduct {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  imagem: StaticImageData;
}
