import Image from "next/image";

interface Props {
  link: string;
  alt: string;
}
const PortraitWorks = ({ link, alt }: Props) => {
  return (
    <div className="h-screen w-full sticky top-0 left-0">
      <Image
        className="w-full h-full object-cover"
        src={link}
        alt={alt}
        width={1000}
        height={1000}
      ></Image>
      <div className="overlay absolute top-0 left-0 w-full h-screen bg-black/60 z-[1]"></div>
    </div>
  );
};

export default PortraitWorks;
