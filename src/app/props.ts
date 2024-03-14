import { StaticImageData } from "next/image";

export interface IButton {
  name: string;
  image: StaticImageData;
  active: boolean;
}
