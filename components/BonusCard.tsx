import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
// Define una interfaz para las props de tu componente
interface BonusCardProps {
  title: string;
  subtitle: string;
  description: string;
  avatarSrc: string;
}
// Añade las propiedades title, description, y avatarSrc como argumentos de la función
export default function BonusCard({
  title,
  subtitle,
  description,
  avatarSrc,
}: BonusCardProps) {
  const descriptionItems = description
    .split("-")
    .map((item) => item.trim())
    .filter((item) => item);

  // Asumiendo que avatarSrc es el URL base sin la extensión del archivo
  const webpSrc = `${avatarSrc}.webp`;
  const jpgSrc = `${avatarSrc}.jpg`;
  // Extrae solo el nombre del archivo de la URL para usarlo en el alt
  const imageName = avatarSrc.split("/").pop() || "bonus_notion";
  return (
    <Card className="pt-4 bg-white text-black rounded-xl mb-2 mx-2 md:mx-16">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* Utiliza la propiedad title para mostrar el subtítulo */}
        <h4 className="font-bold text-xl">{subtitle}</h4>
        {/* Utiliza la propiedad title para mostrar el título */}
        <h1 className="font-bold text-2xl">{title}</h1>
        {/* Utiliza la propiedad description para mostrar la descripción */}
        <ul className="text-lg font-normal">
          {descriptionItems.map((item, index) => (
            <li key={index} className="list-disc ml-4">
              {item}
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardBody className="overflow-visible pt-2">
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <source srcSet={jpgSrc} type="image/jpeg" />
          {/* El atributo src de la imagen será la fuente de respaldo, generalmente jpg */}
          <Image
            alt={imageName}
            src={jpgSrc}
            className="w-full max-w-md h-auto rounded-xl"
            width={256}
            height={150}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </picture>
      </CardBody>
    </Card>
  );
}
