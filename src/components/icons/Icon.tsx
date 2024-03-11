import Image, { StaticImageData } from "next/image";

interface props {
  src: StaticImageData;
}

export default function Icon({ src }: props) {
  return <Image alt="" src={src} width={20} height={20} />;
}
