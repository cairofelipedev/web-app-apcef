import Image from "next/image";

export default function FotoItem({ fotos }) {
  return (
    <div className="col-span-2">
      <Image
        width="800px"
        height="500px"
        src={fotos.image ? fotos.image.url : "No Image"}
        alt={fotos.Nome}
        className="rounded-md"
      />
      <p className="text-center">{fotos.Nome}</p>
    </div>
  );
}
